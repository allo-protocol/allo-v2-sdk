import { BaseStrategy } from '../src/strategies/BaseStrategy';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../src/strategies/baseStrategy.config';

describe('BaseStrategy Read Function Tests', () => {
  let strategy: BaseStrategy;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    strategy = new BaseStrategy({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getAllo', async () => {
    const allo = await strategy.getAllo();
    expect(allo).toBeDefined();
    expect(allo).toMatch(/^0x[a-fA-F0-9]{40}$/); // Checks if it's a valid address
  });

  test('getStrategyId', async () => {
    const strategyId = await strategy.getStrategyId();
    expect(strategyId).toBeDefined();
    expect(strategyId).toMatch(/^0x[a-fA-F0-9]{64}$/); // Expect 32-byte hex string
  });

  test('getPoolId', async () => {
    const poolId = await strategy.getPoolId();
    expect(poolId).toBeDefined();
    expect(typeof poolId).toBe('bigint'); // Expected bigint based on Solidity contract type
  });

  test('getPoolAmount', async () => {
    const amount = await strategy.getPoolAmount();
    expect(amount).toBeDefined();
    expect(amount).toBeInstanceOf(BigInt); // Ensures it’s a bigint
  });
});

describe('BaseStrategy Write Function Tests', () => {
  let strategy: BaseStrategy;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    strategy = new BaseStrategy({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('initialize', async () => {
    const poolId = BigInt(1);
    const data = '0x1234' as `0x${string}`;
    const txData = strategy.initialize(poolId, data);

    const { request } = await publicClient.simulateContract({
      address: strategy.address(),
      abi,
      functionName: 'initialize',
      args: [poolId, data],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('allocate', async () => {
    const recipients = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const amounts = [BigInt(1000)];
    const data = '0x1234' as `0x${string}`;
    const sender = '0x5678567890123456789012345678901234567890' as `0x${string}`;

    const txData = strategy.allocate(recipients, amounts, data, sender);

    const { request } = await publicClient.simulateContract({
      address: strategy.address(),
      abi,
      functionName: 'allocate',
      args: [recipients, amounts, data, sender],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('distribute', async () => {
    const recipients = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const data = '0x1234' as `0x${string}`;
    const sender = '0x5678567890123456789012345678901234567890' as `0x${string}`;

    const txData = strategy.distribute(recipients, data, sender);

    const { request } = await publicClient.simulateContract({
      address: strategy.address(),
      abi,
      functionName: 'distribute',
      args: [recipients, data, sender],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  // Additional edge case tests
  test('initialize with invalid data should throw error', async () => {
    const poolId = BigInt(-1); // Invalid poolId
    const data = '0x1234' as `0x${string}`;

    expect(() => strategy.initialize(poolId, data)).toThrow();
  });

  test('allocate with unauthorized sender should throw error', async () => {
    const unauthorizedSender = '0x0000000000000000000000000000000000000000' as `0x${string}`; // Invalid sender
    const recipients = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const amounts = [BigInt(1000)];
    const data = '0x1234' as `0x${string}`;

    const txData = strategy.allocate(recipients, amounts, data, unauthorizedSender);

    await expect(
      publicClient.simulateContract({
        address: strategy.address(),
        abi,
        functionName: 'allocate',
        args: [recipients, amounts, data, unauthorizedSender],
        account: testAddress,
      })
    ).rejects.toThrow();
  });
});
