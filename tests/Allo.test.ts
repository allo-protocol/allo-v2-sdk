import { Allo } from '../src/Allo/Allo';
import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { abi } from '../src/Allo/allo.config';

describe('Allo Read Function Tests', () => {
  let allo: Allo;
  let walletClient: any;
  const testPrivateKey = process.env.TEST_PRIVATE_KEY as `0x${string}`;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testPrivateKey || !testAddress) {
      throw new Error('TEST_PRIVATE_KEY and TEST_ADDRESS must be set in environment variables');
    }

    allo = new Allo({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });

    const account = privateKeyToAccount(testPrivateKey);
    walletClient = createWalletClient({
      account,
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('getFeeDenominator', async () => {
    const feeDenominator = await allo.getFeeDenominator();
    expect(feeDenominator).toBeDefined();
    expect(typeof feeDenominator.toString()).toBe('string');
  });

  test('getPercentFee', async () => {
    const percentFee = await allo.getPercentFee();
    expect(percentFee).toBeDefined();
    expect(typeof percentFee.toString()).toBe('string');
  });

  test('getBaseFee', async () => {
    const baseFee = await allo.getBaseFee();
    expect(baseFee).toBeDefined();
    expect(typeof baseFee.toString()).toBe('string');
  });

  test('getTreasury', async () => {
    const treasury = await allo.getTreasury();
    expect(treasury).toBeDefined();
    expect(treasury).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });

  test('getRegistry', async () => {
    const registry = await allo.getRegistry();
    expect(registry).toBeDefined();
    expect(registry).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });

  test('isCloneableStrategy', async () => {
    const strategy = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const isCloneable = await allo.isCloneableStrategy(strategy);
    expect(typeof isCloneable).toBe('boolean');
  });

  test('getPool', async () => {
    const poolId = BigInt(1); // Assuming pool with ID 1 exists
    const pool = await allo.getPool(poolId);
    expect(pool).toBeDefined();
    expect(typeof pool).toBe('object');
    // Add more specific assertions based on the Pool type structure
  });

  test('isTrustedForwarder', async () => {
    const forwarder = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const isTrusted = await allo.isTrustedForwarder(forwarder);
    expect(typeof isTrusted).toBe('boolean');
  });

  test('getOwner', async () => {
    const owner = await allo.getOwner();
    expect(owner).toBeDefined();
    expect(owner).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });

  test('isPoolAdmin', async () => {
    const poolId = BigInt(1); // Assuming pool with ID 1 exists
    const address = '0x1234567890123456789012345678901234567890';
    const isAdmin = await allo.isPoolAdmin(poolId, address);
    expect(typeof isAdmin).toBe('boolean');
  });

  test('isPoolManager', async () => {
    const poolId = BigInt(1); // Assuming pool with ID 1 exists
    const address = '0x1234567890123456789012345678901234567890';
    const isManager = await allo.isPoolManager(poolId, address);
    expect(typeof isManager).toBe('boolean');
  });

  test('getStrategy', async () => {
    const poolId = BigInt(1); // Assuming pool with ID 1 exists
    const strategy = await allo.getStrategy(poolId);
    expect(strategy).toBeDefined();
    expect(strategy).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });
});

describe('Allo Write Function Tests', () => {
  let allo: Allo;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    allo = new Allo({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('createPoolWithCustomStrategy', async () => {
    const createPoolArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      strategy: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      initStrategyData: '0x1234' as `0x${string}`,
      token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' as `0x${string}`,
      amount: parseEther('0.1'),
      metadata: {
        protocol: BigInt(1),
        pointer: 'bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi',
      },
      managers: ['0x1234567890123456789012345678901234567890' as `0x${string}`],
    };

    const txData = allo.createPoolWithCustomStrategy(createPoolArgs);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'createPoolWithCustomStrategy',
      args: [
        createPoolArgs.profileId,
        createPoolArgs.strategy,
        createPoolArgs.initStrategyData,
        createPoolArgs.token,
        createPoolArgs.amount,
        createPoolArgs.metadata,
        createPoolArgs.managers
      ],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updatePoolMetadata', async () => {
    const poolId = BigInt(1);
    const metadata = {
      protocol: BigInt(1),
      pointer: 'new_metadata_pointer',
    };

    const txData = allo.updatePoolMetadata({ poolId, metadata });

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'updatePoolMetadata',
      args: [poolId, metadata],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateRegistry', async () => {
    const newRegistry = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.updateRegistry(newRegistry);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'updateRegistry',
      args: [newRegistry],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('addPoolManager', async () => {
    const poolId = BigInt(1);
    const manager = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.addPoolManagers(poolId, [manager]);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'addPoolManagers',
      args: [poolId, [manager]],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('removePoolManager', async () => {
    const poolId = BigInt(1);
    const manager = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.removePoolManagers(poolId, [manager]);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'removePoolManagers',
      args: [poolId, [manager]],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('addToCloneableStrategies', async () => {
    const strategy = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.addToCloneableStrategies(strategy);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'addToCloneableStrategies',
      args: [strategy],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('removeFromCloneableStrategies', async () => {
    const strategy = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.removeFromCloneableStrategies(strategy);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'removeFromCloneableStrategies',
      args: [strategy],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateBaseFee', async () => {
    const baseFee = parseEther('0.01');
    const txData = allo.updateBaseFee(baseFee);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'updateBaseFee',
      args: [baseFee],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updatePercentFee', async () => {
    const percentFee = BigInt(100); // 1%
    const txData = allo.updatePercentFee(percentFee);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'updatePercentFee',
      args: [percentFee],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateTreasury', async () => {
    const treasury = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.updateTreasury(treasury);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'updateTreasury',
      args: [treasury],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('recoverFunds', async () => {
    const token = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.recoverFunds(token, testAddress);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'recoverFunds',
      args: [token, testAddress],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('registerRecipient', async () => {
    const poolId = BigInt(1);
    const data = '0x1234' as `0x${string}`;
    const txData = allo.registerRecipient(poolId, [testAddress], data);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'registerRecipient',
      args: [poolId, [testAddress], data],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('batchRegisterRecipient', async () => {
    const poolIds = [BigInt(1), BigInt(2)];
    const data = ['0x1234', '0x5678'] as `0x${string}`[];
    const txData = allo.batchRegisterRecipient(poolIds, [[testAddress], [testAddress]], data);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'batchRegisterRecipient',
      args: [poolIds, [[testAddress], [testAddress]], data],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('fundPool', async () => {
    const poolId = BigInt(1);
    const amount = parseEther('1');
    const txData = allo.fundPool(poolId, amount);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'fundPool',
      args: [poolId, amount],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('allocate', async () => {
    const poolId = BigInt(1);
    const recipients = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const amounts = [parseEther('0.5')];
    const data = '0x1234' as `0x${string}`;
    const txData = allo.allocate(poolId, recipients, amounts, data);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'allocate',
      args: [poolId, recipients, amounts, data],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('batchAllocate', async () => {
    const poolIds = [BigInt(1), BigInt(2)];
    const recipients = [
      ['0x1234567890123456789012345678901234567890' as `0x${string}`],
      ['0x0987654321098765432109876543210987654321' as `0x${string}`]
    ];
    const amounts = [[parseEther('0.5')], [parseEther('0.3')]];
    const values = [parseEther('0.5'), parseEther('0.3')];
    const datas = ['0x1234', '0x5678'] as `0x${string}`[];
    const txData = allo.batchAllocate(poolIds, recipients, amounts, values, datas);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'batchAllocate',
      args: [poolIds, recipients, amounts, values, datas],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('distribute', async () => {
    const poolId = BigInt(1);
    const recipientId = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const strategyData = '0x1234' as `0x${string}`;
    const txData = allo.distribute(poolId, recipientId, strategyData);

    const { request } = await publicClient.simulateContract({
      address: allo.address(),
      abi,
      functionName: 'distribute',
      args: [poolId, recipientId, strategyData],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });
});

