import { MilestonesExtension, MilestoneStatus, type Milestone, type Metadata } from '../../src/strategies/extensions/milestones/MilestonesExtension';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../../src/strategies/extensions/milestones/milestonesExtension.config';

describe('MilestonesExtension Read Function Tests', () => {
  let extension: MilestonesExtension;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    extension = new MilestonesExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getMaxBid', async () => {
    const maxBid = await extension.getMaxBid();
    expect(maxBid).toBeDefined();
    expect(maxBid).toBeInstanceOf(BigInt);
  });

  test('getUpcomingMilestone', async () => {
    const milestone = await extension.getUpcomingMilestone();
    expect(milestone).toBeDefined();
    expect(typeof milestone).toBe('number');
  });

  test('getBid', async () => {
    const recipientId = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const bid = await extension.getBid(recipientId);
    expect(bid).toBeDefined();
    expect(bid).toBeInstanceOf(BigInt);
  });

  test('getMilestone', async () => {
    const milestoneId = BigInt(1);
    const milestone = await extension.getMilestone(milestoneId);
    expect(milestone).toBeDefined();
    expect(milestone).toHaveProperty('amountPercentage');
    expect(milestone).toHaveProperty('metadata');
    expect(milestone).toHaveProperty('status');
    expect(milestone.amountPercentage).toBeInstanceOf(BigInt);
    expect(typeof milestone.metadata.protocol).toBe('string');
    expect(typeof milestone.metadata.pointer).toBe('string');
    expect(Object.values(MilestoneStatus)).toContain(milestone.status);
  });

  test('getMilestoneStatus', async () => {
    const milestoneId = BigInt(1);
    const status = await extension.getMilestoneStatus(milestoneId);
    expect(status).toBeDefined();
    expect(Object.values(MilestoneStatus)).toContain(status);
  });
});

describe('MilestonesExtension Write Function Tests', () => {
  let extension: MilestonesExtension;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    extension = new MilestonesExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('increaseMaxBid', async () => {
    const maxBid = BigInt(1000);
    const txData = extension.increaseMaxBid(maxBid);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'increaseMaxBid',
      args: [maxBid],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('increaseMaxBid with lower amount should fail', async () => {
    const maxBid = BigInt(100); // Lower than the current max bid
    await expect(() => extension.increaseMaxBid(maxBid)).toThrow('MilestonesExtension_AmountTooLow');
  });

  test('setMilestones with valid total percentage', async () => {
    const milestones: Milestone[] = [{
      amountPercentage: BigInt(1e18), // 100% of the bid
      metadata: {
        protocol: '1',
        pointer: 'ipfs://QmHash',
      },
      status: MilestoneStatus.None
    }];
    
    const txData = extension.setMilestones(milestones);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'setMilestones',
      args: [milestones],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('setMilestones with invalid total percentage should fail', async () => {
    const milestones: Milestone[] = [{
      amountPercentage: BigInt(5000), // Less than 100%
      metadata: {
        protocol: '1',
        pointer: 'ipfs://QmHash',
      },
      status: MilestoneStatus.None
    }];
    
    await expect(() => extension.setMilestones(milestones)).toThrow('MilestonesExtension_InvalidMilestone');
  });

  test('submitUpcomingMilestone with valid metadata', async () => {
    const recipientId = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const metadata: Metadata = {
      protocol: '1',
      pointer: 'ipfs://QmHash'
    };
    
    const txData = extension.submitUpcomingMilestone(recipientId, metadata);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'submitUpcomingMilestone',
      args: [recipientId, metadata],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('submitUpcomingMilestone with invalid metadata should fail', async () => {
    const recipientId = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const invalidMetadata: Metadata = {
      protocol: '', // Invalid protocol
      pointer: 'ipfs://QmHash'
    };
    
    await expect(() => extension.submitUpcomingMilestone(recipientId, invalidMetadata)).toThrow('MilestonesExtension_InvalidMetadata');
  });

  test('reviewMilestone with valid status', async () => {
    const status = MilestoneStatus.Accepted;
    const txData = extension.reviewMilestone(status);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'reviewMilestone',
      args: [status],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('reviewMilestone with invalid status should fail', async () => {
    const invalidStatus = MilestoneStatus.None; // Invalid milestone status

    await expect(() => extension.reviewMilestone(invalidStatus)).toThrow('MilestonesExtension_InvalidMilestoneStatus');
  });

  // Error cases
  test('should throw error when contract not set', async () => {
    const newExtension = new MilestonesExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    // Force contract to be undefined
    (newExtension as any).contract = undefined;

    await expect(newExtension.getMaxBid()).rejects.toThrow(
      'MilestonesExtension: No strategy address provided'
    );
  });
});
