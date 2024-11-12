import { RecipientsExtension, Status, type ApplicationStatus, type Recipient } from '../../src/strategies/extensions/register/RecipientsExtension';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../../src/strategies/extensions/register/recipientsExtension.config';

describe('RecipientsExtension Read Function Tests', () => {
  let extension: RecipientsExtension;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    extension = new RecipientsExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getReviewEachStatus', async () => {
    const status = await extension.getReviewEachStatus();
    expect(typeof status).toBe('boolean');
  });

  test('getMetadataRequired', async () => {
    const required = await extension.getMetadataRequired();
    expect(typeof required).toBe('boolean');
  });

  test('getRegistrationStartTime', async () => {
    const startTime = await extension.getRegistrationStartTime();
    expect(startTime).toBeDefined();
    expect(startTime).toBeInstanceOf(BigInt);
  });

  test('getRegistrationEndTime', async () => {
    const endTime = await extension.getRegistrationEndTime();
    expect(endTime).toBeDefined();
    expect(endTime).toBeInstanceOf(BigInt);
  });

  test('getRecipientsCounter', async () => {
    const counter = await extension.getRecipientsCounter();
    expect(counter).toBeDefined();
    expect(counter).toBeInstanceOf(BigInt);
  });

  test('getStatusesBitMap', async () => {
    const index = BigInt(1);
    const statusRow = await extension.getStatusesBitMap(index);
    expect(statusRow).toBeDefined();
    expect(statusRow).toBeInstanceOf(BigInt);
  });

  test('getRecipientIndexToRecipientId', async () => {
    const index = BigInt(1);
    const recipientId = await extension.getRecipientIndexToRecipientId(index);
    expect(recipientId).toBeDefined();
    expect(recipientId).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });

  test('getRecipient', async () => {
    const recipientId = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const recipient = await extension.getRecipient(recipientId);
    expect(recipient).toBeDefined();
    expect(typeof recipient.useRegistryAnchor).toBe('boolean');
    expect(recipient.recipientAddress).toMatch(/^0x[a-fA-F0-9]{40}$/);
    expect(recipient.statusIndex).toBeInstanceOf(BigInt);
    expect(typeof recipient.metadata.protocol).toBe('string');
    expect(typeof recipient.metadata.pointer).toBe('string');
  });

  test('getRecipient with invalid recipientId should handle gracefully', async () => {
    const invalidRecipientId = '0x0000000000000000000000000000000000000000' as `0x${string}`;
    await expect(extension.getRecipient(invalidRecipientId)).rejects.toThrow('Recipient not found');
  });
});

describe('RecipientsExtension Write Function Tests', () => {
  let extension: RecipientsExtension;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    extension = new RecipientsExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('reviewRecipients', async () => {
    const statuses: ApplicationStatus[] = [{
      index: BigInt(1),
      statusRow: BigInt(Status.Accepted),
    }];
    const refRecipientsCounter = BigInt(1);
    
    const txData = extension.reviewRecipients(statuses, refRecipientsCounter);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'reviewRecipients',
      args: [statuses, refRecipientsCounter],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('reviewRecipients with invalid statusRow should fail', async () => {
    const statuses: ApplicationStatus[] = [{
      index: BigInt(1),
      statusRow: BigInt(999), // Invalid status row
    }];
    const refRecipientsCounter = BigInt(1);
    
    await expect(() => extension.reviewRecipients(statuses, refRecipientsCounter)).toThrow('Invalid status');
  });

  test('updatePoolTimestamps', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000));
    const endTime = startTime + BigInt(86400); // 24 hours later
    
    const txData = extension.updatePoolTimestamps(startTime, endTime);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'updatePoolTimestamps',
      args: [startTime, endTime],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updatePoolTimestamps with invalid timestamps should fail', async () => {
    const startTime = BigInt(Math.floor(Date.now() / 1000));
    const endTime = startTime - BigInt(86400); // End time before start time
    
    const txData = extension.updatePoolTimestamps(startTime, endTime);

    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'updatePoolTimestamps',
        args: [startTime, endTime],
        account: testAddress,
      })
    ).rejects.toThrow('Invalid timestamp range');
  });

  // Error cases
  test('should throw error when contract not set', () => {
    const newExtension = new RecipientsExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    // Force contract to be undefined
    (newExtension as any).contract = undefined;

    expect(newExtension.getReviewEachStatus()).rejects.toThrow(
      'RecipientsExtension: No strategy address provided'
    );
  });
});
