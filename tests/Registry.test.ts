import { Registry } from '../src/Registry/Registry';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { abi } from '../src/Registry/registry.config';

describe('Registry Read Function Tests', () => {
  let registry: Registry;
  const testPrivateKey = process.env.TEST_PRIVATE_KEY as `0x${string}`;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testPrivateKey || !testAddress) {
      throw new Error('TEST_PRIVATE_KEY and TEST_ADDRESS must be set in environment variables');
    }
    registry = new Registry({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
  });

  test('getAlloOwner', async () => {
    const owner = await registry.getAlloOwner();
    expect(owner).toBeDefined();
    expect(owner).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });

  test('getDefaultAdminRole', async () => {
    const admin = await registry.getDefaultAdminRole();
    expect(admin).toBeDefined();
    expect(typeof admin).toBe('string');
  });

  test('getAnchorToProfileId', async () => {
    const anchor = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const profileId = await registry.getAnchorToProfileId(anchor);
    expect(profileId).toBeDefined();
    expect(typeof profileId).toBe('string');
  });

  test('getProfileByAnchor', async () => {
    const anchor = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const profile = await registry.getProfileByAnchor(anchor);
    expect(profile).toBeDefined();
    expect(typeof profile).toBe('object');
  });

  test('getProfileById', async () => {
    const profileId = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const profile = await registry.getProfileById(profileId);
    expect(profile).toBeDefined();
    expect(typeof profile).toBe('object');
  });

  test('getRoleAdmin', async () => {
    const role = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const admin = await registry.getRoleAdmin(role);
    expect(admin).toBeDefined();
    expect(typeof admin).toBe('string');
  });

  test('hasRole', async () => {
    const role = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const account = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const hasRole = await registry.hasRole({ role, account });
    expect(typeof hasRole).toBe('boolean');
  });

  test('isMemberOfProfile', async () => {
    const profileId = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const account = '0x1234567890123456789012345678901234567890' as `0x${string}`;
    const isMember = await registry.isMemberOfProfile({ profileId, account });
    expect(typeof isMember).toBe('boolean');
  });
});

describe('Registry Write Function Tests', () => {
  let registry: Registry;
  let publicClient: any;
  const testAddress = process.env.TEST_ADDRESS as `0x${string}`;

  beforeAll(() => {
    if (!testAddress) {
      throw new Error('TEST_ADDRESS must be set in environment variables');
    }

    registry = new Registry({ chain: 11155111, rpc: 'https://rpc.sepolia.org' });
    
    publicClient = createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  });

  test('createProfile', async () => {
    const createProfileArgs = {
      nonce: BigInt(1),
      name: 'Test Profile',
      metadata: {
        protocol: BigInt(1),
        pointer: 'test_pointer',
      },
      owner: testAddress,
      members: [testAddress],
    };

    const txData = registry.createProfile(createProfileArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'createProfile',
      args: [
        createProfileArgs.nonce,
        createProfileArgs.name,
        createProfileArgs.metadata,
        createProfileArgs.owner,
        createProfileArgs.members,
      ],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('addMembers', async () => {
    const memberArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      members: ['0x1234567890123456789012345678901234567890' as `0x${string}`],
    };

    const txData = registry.addMembers(memberArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'addMembers',
      args: [memberArgs.profileId, memberArgs.members],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('removeMembers', async () => {
    const memberArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      members: ['0x1234567890123456789012345678901234567890' as `0x${string}`],
    };

    const txData = registry.removeMembers(memberArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'removeMembers',
      args: [memberArgs.profileId, memberArgs.members],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateProfileMetadata', async () => {
    const metadataArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      metadata: {
        protocol: BigInt(1),
        pointer: 'new_metadata_pointer',
      },
    };

    const txData = registry.updateProfileMetadata(metadataArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'updateProfileMetadata',
      args: [metadataArgs.profileId, metadataArgs.metadata],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateProfileName', async () => {
    const nameArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      name: 'New Profile Name',
    };

    const txData = registry.updateProfileName(nameArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'updateProfileName',
      args: [nameArgs.profileId, nameArgs.name],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('updateProfilePendingOwner', async () => {
    const ownerArgs = {
      profileId: '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`,
      account: '0x1234567890123456789012345678901234567890' as `0x${string}`,
    };

    const txData = registry.updateProfilePendingOwner(ownerArgs);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'updateProfilePendingOwner',
      args: [ownerArgs.profileId, ownerArgs.account],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('grantRole', async () => {
    const role = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const account = '0x1234567890123456789012345678901234567890' as `0x${string}`;

    const txData = registry.grantRole(role, account);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'grantRole',
      args: [role, account],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('renounceRole', async () => {
    const role = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const account = '0x1234567890123456789012345678901234567890' as `0x${string}`;

    const txData = registry.renounceRole(role, account);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'renounceRole',
      args: [role, account],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });

  test('revokeRole', async () => {
    const role = '0x1234567890123456789012345678901234567890123456789012345678901234' as `0x${string}`;
    const account = '0x1234567890123456789012345678901234567890' as `0x${string}`;

    const txData = registry.revokeRole(role, account);

    const { request } = await publicClient.simulateContract({
      address: registry.address(),
      abi,
      functionName: 'revokeRole',
      args: [role, account],
      account: testAddress,
    });

    expect(request.data).toBe(txData.data);
    expect(request.to).toBe(txData.to);
    expect(request.value.toString()).toBe(txData.value.toString());
  });
});
