import { Allo } from '../src/Allo/Allo';
import { createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

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
    expect(typeof feeDenominator).toBe('bigint');
  });

  test('getPercentFee', async () => {
    const percentFee = await allo.getPercentFee();
    expect(percentFee).toBeDefined();
    expect(typeof percentFee).toBe('bigint');
  });

  test('getBaseFee', async () => {
    const baseFee = await allo.getBaseFee();
    expect(baseFee).toBeDefined();
    expect(typeof baseFee).toBe('bigint');
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
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe(createPoolArgs.amount.toString());

    // send the transaction
    const hash = await walletClient.sendTransaction(txData);
    expect(hash).toBeDefined();
  });

  test('updatePoolMetadata', async () => {
    const poolId = BigInt(1);
    const metadata = {
      protocol: BigInt(1),
      pointer: 'new_metadata_pointer',
    };
  
    const txData = allo.updatePoolMetadata({ poolId, metadata });
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('updateRegistry', async () => {
    const newRegistry = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.updateRegistry(newRegistry);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('addPoolManager', async () => {
    const poolId = BigInt(1);
    const manager = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.addPoolManagers(poolId, [manager]);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('removePoolManager', async () => {
    const poolId = BigInt(1);
    const manager = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.removePoolManagers(poolId, [manager]);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('addToCloneableStrategies', async () => {
    const strategy = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.addToCloneableStrategies(strategy);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('removeFromCloneableStrategies', async () => {
    const strategy = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.removeFromCloneableStrategies(strategy);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('updateBaseFee', async () => {
    const baseFee = parseEther('0.01');
    const txData = allo.updateBaseFee(baseFee);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('updatePercentFee', async () => {
    const percentFee = BigInt(100); // 1%
    const txData = allo.updatePercentFee(percentFee);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('updateTreasury', async () => {
    const treasury = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.updateTreasury(treasury);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('recoverFunds', async () => {
    const token = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const txData = allo.recoverFunds(token, testAddress);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('registerRecipient', async () => {
    const poolId = BigInt(1);
    const data = '0x1234' as `0x${string}`;
    const txData = allo.registerRecipient(poolId, [testAddress], data);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('batchRegisterRecipient', async () => {
    const poolIds = [BigInt(1), BigInt(2)];
    const data = ['0x1234', '0x5678'] as `0x${string}`[];
    const txData = allo.batchRegisterRecipient(poolIds, [[testAddress], [testAddress]], data);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('fundPool', async () => {
    const poolId = BigInt(1);
    const amount = parseEther('1');
    const txData = allo.fundPool(poolId, amount);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('allocate', async () => {
    const poolId = BigInt(1);
    const recipients = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const amounts = [parseEther('0.5')];
    const data = '0x1234' as `0x${string}`;
    const txData = allo.allocate(poolId, recipients, amounts, data);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
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
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });

  test('distribute', async () => {
    const poolId = BigInt(1);
    const recipientId = ['0x1234567890123456789012345678901234567890' as `0x${string}`];
    const strategyData = '0x1234' as `0x${string}`;
    const txData = allo.distribute(poolId, recipientId, strategyData);
    expect(txData).toBeDefined();
    expect(txData.to).toBe(allo.address());
    expect(txData.data).toBeDefined();
    expect(txData.value).toBe('0');
  });
});

