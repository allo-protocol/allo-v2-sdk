# DirectGrantsStrategy

The `DirectGrantsStrategy` class is a powerful tool for interacting with the MicroGrants contract. It provides methods for reading information from the contract and executing various transactions.

## Table of Contents

- [DirectGrantsStrategy](#directgrantsstrategy)
  - [Table of Contents](#table-of-contents)
  - [Initialization](#initialization)
    - [Creating a DirectGrantsStrategy Instance](#creating-a-directgrantsstrategy-instance)
    - [Setting Pool ID and Strategy Contract](#setting-pool-id-and-strategy-contract)
  - [Read-Only Functions](#read-only-functions)
    - [Get Native Token Address](#get-native-token-address)
    - [Check Recipient Status](#check-recipient-status)
    - [Check Milestone Status](#check-milestone-status)
    - [Get Allo Instance](#get-allo-instance)
    - [Get Payouts](#get-payouts)
    - [Get Pool Amount](#get-pool-amount)
    - [Get Pool ID](#get-pool-id)
    - [Get Recipient](#get-recipient)
    - [Get Recipient Status](#get-recipient-status)
    - [Get Strategy ID](#get-strategy-id)
    - [Check Pool Activity](#check-pool-activity)
    - [Check Allocator Validity](#check-allocator-validity)
    - [Get Max Requested Amount](#get-max-requested-amount)
    - [Check Use Registry Anchor](#check-use-registry-anchor)
    - [HATS MicroGrants](#hats-microgrants)
      - [Get HATS Contract Address](#get-hats-contract-address)
      - [Get HAT ID](#get-hat-id)
    - [Governance MicroGrants](#governance-microgrants)
      - [Get Governance Contract Address](#get-governance-contract-address)
      - [Get Snapshot Reference](#get-snapshot-reference)
      - [Get Minimum Vote Power](#get-minimum-vote-power)
    - [Get Strategy Contract ID](#get-strategy-contract-id)
  - [Write Functions](#write-functions)
    - [Deploy Parameters](#deploy-parameters)
    - [Batch Allocation Data](#batch-allocation-data)
    - [Allocation Data](#allocation-data)
    - [Register Recipient Data](#register-recipient-data)
    - [Batch Register Recipient Data](#batch-register-recipient-data)

---

## Initialization

### Creating a DirectGrantsStrategy Instance

To start interacting with the MicroGrants contract, create a new instance of `DirectGrantsStrategy`:

```javascript
import { DirectGrantsStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new DirectGrantsStrategy({
  chain: 1,
});
```

If you are aware of the poolId, you can load that while creating the instance

```javascript
import { DirectGrantsStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new DirectGrantsStrategy({
  chain: 1,
  poolId: 1, // valid pool Id
});
```

### Setting Pool ID and Strategy Contract

To perform operations that require a specific pool and strategy contract, set the pool ID and strategy contract address:

```javascript
const poolId = 1;
const strategyAddress = "0x938d8338cb06d0F789b66F46642C8ed67782CE16";

await strategy.setPoolId(poolId);
strategy.setContract(strategyAddress);
```

## Read-Only Functions

### Get Native Token Address

Retrieve the native token address used in the strategy:

```javascript
const nativeToken = await strategy.getNative();

console.log(`Native Token Address: ${nativeToken}`);
```

### Check Recipient Status

Check if a specific allocator has already cast their allocation to a specific recipient

```javascript
const recipientId = "0x938d8338cb06d0F789b66F46642C8ed67782CE16";
const status = await strategy.getRecipientStatus(recipientId);

console.log(`Recipient Status: ${status}`);
```

### Check Milestone Status

Check if a specific allocator has already cast their allocation to a specific recipient

```javascript
const status = await strategy.getMilestoneStatus(recipientId, BigInt(milestoneId));

console.log(`Is Allocated: ${isAllocated}`);
```

### Get Allo Instance

Retrieve the associated Allo instance for the strategy:

```javascript
const alloInstance = await strategy.getAllo();

console.log(`Allo Instance: ${alloInstance}`);
```

### Get Payouts

Retrieve a summary of payouts for a list of recipient addresses:

```javascript
const recipientIds = ["0xRecipient1", "0xRecipient2"];
const payouts = await strategy.getPayouts(recipientIds);

console.log(`Payouts: ${payouts}`);
```

### Get Pool Amount

Retrieve the total amount available in the pool:

```javascript
const poolAmount = await strategy.getPoolAmount();

console.log(`Pool Amount: ${poolAmount}`);
```

### Get Pool ID

Retrieve the current pool ID associated with the strategy:

```javascript
const currentPoolId = await strategy.getPoolId();

console.log(`Current Pool ID: ${currentPoolId}`);
```

### Get Recipient

Retrieve details of a specific recipient:

```javascript
const recipientId = "0xYourRecipientId";
const recipientDetails = await strategy.getRecipient(recipientId);

console.log(`Recipient Details: ${recipientDetails}`);
```

### Get Recipient Status

Retrieve the status of a specific recipient:

```javascript
const recipientId = "0xYourRecipientId";
const recipientStatus = await strategy.getRecipientStatus(recipientId);

console.log(`Recipient Status: ${recipientStatus}`);
```

### Get Strategy ID

Retrieve the unique identifier for the strategy:

```javascript
const strategyId = await strategy.getStrategyId();

console.log(`Strategy ID: ${strategyId}`);
```

### Check Pool Activity

Check if the pool associated with the strategy is active:

```javascript
const isActive = await strategy.isPoolActive();

console.log(`Is Pool Active: ${isActive}`);
```

### Check Allocator Validity

Check if a specific allocator address is valid for the strategy:

```javascript
const allocatorAddress = "0xYourAllocatorAddress";
const isValid = await strategy.isValidAllocator(allocatorAddress);

console.log(`Is Allocator Valid: ${isValid}`);
```

### Get Max Requested Amount

Retrieve the maximum requested amount allowed by the strategy:

```javascript
const allocatedGrantAmount = await strategy.allocatedGrantAmount();

console.log(`Max Requested Amount: ${allocatedGrantAmount}`);
```

### Check Use Registry Anchor

Check if the strategy uses a registry anchor:

```javascript
const useRegistryAnchor = await strategy.useRegistryAnchor();
console.log(`Use Registry Anchor: ${useRegistryAnchor}`);
```

### HATS MicroGrants

This set of functions are available if the MicroGrants uses a hats micro grant strategy

#### Get HATS Contract Address

Retrieve the address of the HATS contract associated with the strategy:

```javascript
const hatsAddress = await strategy.getHatsAddress();
console.log(`HATS Contract Address: ${hatsAddress}`);
```

#### Get HAT ID

Retrieve the hatId used by the strategy:

```javascript
const hatId = await strategy.getHatId();
console.log(`HAT ID: ${hatId}`);
```

### Governance MicroGrants

This set of functions are available if the MicroGrants uses a governance token micro grant strategy

#### Get Governance Contract Address

Retrieve the address of the governance contract associated with the strategy:

```javascript
const govAddress = await strategy.getGovAddress();
console.log(`Governance Contract Address: ${govAddress}`);
```

#### Get Snapshot Reference

Retrieve the snapshot reference used by the strategy:

```javascript
const snapshotReference = await strategy.getSnapshotReference();
console.log(`Snapshot Reference: ${snapshotReference}`);
```

#### Get Minimum Vote Power

Retrieve the minimum vote power required by the strategy:

```javascript
const minVotePower = await strategy.getMinimumVotePower();
console.log(`Minimum Vote Power: ${minVotePower}`);
```

### Get Strategy Contract ID

Retrieve the unique identifier for the strategy contract:

```javascript
const strategyContract = "0xYourStrategyContractAddress";
const strategyContractId = await strategy.getStrategyContractId(strategyContract);
console.log(`Strategy Contract ID: ${strategyContractId}`);
```

## Write Functions

### Deploy Parameters

Generate deployment parameters for deploying a new strategy:

```javascript
import { StrategyType } from "@allo-team/allo-v2-sdk/dist/strategies/DirectGrantsStrategy/types";

const strategyType = StrategyType.Gov; // Specify the strategy type
const deployParams = strategy.getDeployParams(strategyType);

// Client could be from ethers, viem, etc.
const hash = await walletClient!.deployContract({
  abi: deployParams.abi,
  bytecode: deployParams.bytecode as `0x${string}`,
  args: [],
});
```

### Batch Allocation Data

Generate transaction data for batch allocation to multiple pools:

```javascript
const allocations = [
  { recipientId: "0xRecipient1", status: 1 },
  { recipientId: "0xRecipient2", status: 1 },
];

const txData = strategy.getBatchAllocationData(allocations);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Allocation Data

Generate transaction data for allocating funds to a specific recipient:

```javascript
const recipientId = "0xYourRecipientId";
const status = 1; // Example status, replace with the actual status value

const txData = strategy.getAllocationData(recipientId, status);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Register Recipient Data

Generate transaction data for registering a new recipient:

```javascript
const registerData = {
  registryAnchor: "0xYourRegistryAnchor", // Optional
  recipientAddress: "0x938d8338cb06d0F789b66F46642C8ed67782CE16",
  grantAmount: BigInt(1),
  metadata: {
    protocol: BigInt(0),
    pointer: "0xYourPointer",
  },
};

const txData = strategy.getRegisterRecipientData(registerData);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Batch Register Recipient Data

Generate transaction data for batch registering multiple recipients:

```javascript
const batchRegisterData = [
  {
    registryAnchor: "0xYourRegistryAnchor1", // Optional
    recipientAddress: "0x938d8338cb06d0F789b66F46642C8ed67782CE16",
    grantAmount: BigInt(1),
    metadata: {
      protocol:  BigInt(1),
      pointer: "0xYourPointer1",
    },
  },
  {
    registryAnchor: "0xYourRegistryAnchor2", // Optional
    0x938d8338cb06d0F789b66F46642C8ed67782CE16: "0xRecipientAddress2",
    grantAmount:  BigInt(2),
    metadata: {
      protocol: BigInt(1),
      pointer: "0xYourPointer2",
    },
  },
];

const txData = strategy.getBatchRegisterRecipientData(batchRegisterData);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```
