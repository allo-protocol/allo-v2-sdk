import { EASGatingExtension } from '../../src/strategies/extensions/gating/EASGatingExtension';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../../src/strategies/extensions/gating/easGatingExtension.config';

describe('EASGatingExtension Read Function Tests', () => {
  let extension: EASGatingExtension;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }
    extension = new EASGatingExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getEAS', async () => {
    const eas = await extension.getEAS();
    expect(eas).toBeDefined();
    expect(eas).toMatch(/^0x[a-fA-F0-9]{40}$/); // Checks if it's a valid address
  });

  // Error cases
  test('should throw error when contract not set', () => {
    const newExtension = new EASGatingExtension({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    // Force contract to be undefined
    (newExtension as any).contract = undefined;

    expect(newExtension.getEAS()).rejects.toThrow(
      'EASGatingExtension: No strategy address provided'
    );
  });
});