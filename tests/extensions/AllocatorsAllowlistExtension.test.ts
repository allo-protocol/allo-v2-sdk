import { AllocatorsAllowlistExtension } from '../../src/strategies/extensions/allocate/AllocatorsAllowlistExtension';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../../src/strategies/extensions/allocate/allocatorsAllowlistExtension.config';

describe('AllocatorsAllowlistExtension Read Function Tests', () => {
  let extension: AllocatorsAllowlistExtension;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    extension = new AllocatorsAllowlistExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('isAllowedAllocator - allowed allocator', async () => {
    const allowedAllocator = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const isAllowed = await extension.isAllowedAllocator(allowedAllocator);
    expect(isAllowed).toBe(true); // Replace with expected result in your test setup
  });

  test('isAllowedAllocator - disallowed allocator', async () => {
    const disallowedAllocator = '0x0987654321098765432109876543210987654321' as `0x${string}`;
    const isAllowed = await extension.isAllowedAllocator(disallowedAllocator);
    expect(isAllowed).toBe(false);
  });
});

describe('AllocatorsAllowlistExtension Write Function Tests', () => {
  let extension: AllocatorsAllowlistExtension;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    extension = new AllocatorsAllowlistExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('addAllocators', async () => {
    const allocators = [
      '0x1234567890123456789012345678901234567890' as `0x${string}`,
      '0x0987654321098765432109876543210987654321' as `0x${string}`
    ];
    
    const txData = extension.addAllocators(allocators);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'addAllocators',
      args: [allocators],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('removeAllocators', async () => {
    const allocators = [
      '0x1234567890123456789012345678901234567890' as `0x${string}`,
      '0x0987654321098765432109876543210987654321' as `0x${string}`
    ];
    
    const txData = extension.removeAllocators(allocators);

    const { request } = await publicClient.simulateContract({
      address: extension.address(),
      abi,
      functionName: 'removeAllocators',
      args: [allocators],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  // Error cases
  test('should throw error when contract not set', async () => {
    const newExtension = new AllocatorsAllowlistExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    // Force contract to be undefined
    (newExtension as any).contract = undefined;

    await expect(newExtension.isAllowedAllocator('0x1234567890123456789012345678901234567890')).rejects.toThrow(
      'AllocatorsAllowlistExtension: No strategy address provided'
    );
  });

  test('addAllocators with empty array should fail', async () => {
    const allocators: `0x${string}`[] = [];

    await expect(extension.addAllocators(allocators)).rejects.toThrow();
  });

  test('removeAllocators with empty array should fail', async () => {
    const allocators: `0x${string}`[] = [];

    await expect(extension.removeAllocators(allocators)).rejects.toThrow();
  });

  test('addAllocators by unauthorized sender should fail', async () => {
    const allocators = [
      '0x1234567890123456789012345678901234567890' as `0x${string}`,
      '0x0987654321098765432109876543210987654321' as `0x${string}`
    ];
    const unauthorizedSender = '0x0000000000000000000000000000000000000000' as `0x${string}`; // Placeholder

    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'addAllocators',
        args: [allocators],
        account: unauthorizedSender,
      })
    ).rejects.toThrow();
  });

  test('removeAllocators by unauthorized sender should fail', async () => {
    const allocators = [
      '0x1234567890123456789012345678901234567890' as `0x${string}`,
      '0x0987654321098765432109876543210987654321' as `0x${string}`
    ];
    const unauthorizedSender = '0x0000000000000000000000000000000000000000' as `0x${string}`; // Placeholder

    await expect(
      publicClient.simulateContract({
        address: extension.address(),
        abi,
        functionName: 'removeAllocators',
        args: [allocators],
        account: unauthorizedSender,
      })
    ).rejects.toThrow();
  });
});
