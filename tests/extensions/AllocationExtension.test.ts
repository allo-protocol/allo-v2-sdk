import { AllocationExtension } from '../../src/strategies/extensions/allocate/AllocationExtension';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../../src/strategies/extensions/allocate/allocationExtension.config';

describe('AllocationExtension Read Function Tests', () => {
  let extension: AllocationExtension;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    extension = new AllocationExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getAllocationStartTime', async () => {
    const startTime = await extension.getAllocationStartTime();
    expect(startTime).toBeDefined();
    expect(startTime).toBeInstanceOf(BigInt);
  });

  test('getAllocationEndTime', async () => {
    const endTime = await extension.getAllocationEndTime();
    expect(endTime).toBeDefined();
    expect(endTime).toBeInstanceOf(BigInt);
  });

  test('isUsingAllocationMetadata', async () => {
    const isUsing = await extension.isUsingAllocationMetadata();
    expect(typeof isUsing).toBe('boolean');
  });

  test('isAllowedToken - allowed token', async () => {
    const allowedToken = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const isAllowed = await extension.isAllowedToken(allowedToken);
    expect(isAllowed).toBe(true); // Modify to expected result based on test setup
  });

  test('isAllowedToken - disallowed token', async () => {
    const disallowedToken = '0x0000000000000000000000000000000000000000' as `0x${string}`;
    const isAllowed = await extension.isAllowedToken(disallowedToken);
    expect(isAllowed).toBe(false);
  });
});

describe('AllocationExtension Write Function Tests', () => {
  let extension: AllocationExtension;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    extension = new AllocationExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('updateAllocationTimestamps', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000));
    const endTime = startTime + BigInt(86400); // 24 hours later
    
    const txData = extension.updateAllocationTimestamps(startTime, endTime);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'updateAllocationTimestamps',
      args: [startTime, endTime],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateAllocationTimestamps with identical start and end times should fail', async () => {
    const identicalTime = BigInt(Math.floor(Date.now() / 1000));
    const txData = extension.updateAllocationTimestamps(identicalTime, identicalTime);

    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'updateAllocationTimestamps',
        args: [identicalTime, identicalTime],
        account: testAddress,
      })
    ).rejects.toThrow();
  });

  test('updateAllocationTimestamps with end time before start time should fail', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000));
    const endTime = startTime - BigInt(86400); // End time before start time
    
    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'updateAllocationTimestamps',
        args: [startTime, endTime],
        account: testAddress,
      })
    ).rejects.toThrow();
  });

  test('should throw error when contract not set', async () => {
    const newExtension = new AllocationExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    // Force contract to be undefined
    (newExtension as any).contract = undefined;

    await expect(newExtension.getAllocationStartTime()).rejects.toThrow(
      'AllocationExtension: No strategy address provided'
    );
  });

  test('updateAllocationTimestamps with future timestamps', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000) + 86400); // Start in 24 hours
    const endTime = startTime + BigInt(86400); // End 24 hours after start time

    const txData = extension.updateAllocationTimestamps(startTime, endTime);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'updateAllocationTimestamps',
      args: [startTime, endTime],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  // Unauthorized sender test
  test('updateAllocationTimestamps called by unauthorized sender should fail', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000));
    const endTime = startTime + BigInt(86400);
    const unauthorizedSender = '0x0000000000000000000000000000000000000000' as `0x${string}`; // Placeholder for unauthorized address

    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'updateAllocationTimestamps',
        args: [startTime, endTime],
        account: unauthorizedSender,
      })
    ).rejects.toThrow();
  });
});
