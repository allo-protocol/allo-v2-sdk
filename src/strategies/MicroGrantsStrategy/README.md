# MicroGrantsStrategy

The `MicroGrantsStrategy` class is a powerful tool for interacting with the MicroGrants contract. It provides methods for reading information from the contract and executing various transactions.

## Table of Contents

- [MicroGrantsStrategy](#micrograntsstrategy)
  - [Table of Contents](#table-of-contents)
  - [Initialization](#initialization)
    - [Creating a MicroGrantsStrategy Instance](#creating-a-micrograntsstrategy-instance)
    - [Setting Pool ID and Strategy Contract](#setting-pool-id-and-strategy-contract)
  - [Read-Only Functions](#read-only-functions)
    - [Get Native Token Address](#get-native-token-address)
    - [Check Allocator](#check-allocator)
    - [Check Allocated Status](#check-allocated-status)
    - [Get Allocation End Time](#get-allocation-end-time)
    - [Get Allocation Start Time](#get-allocation-start-time)
    - [Get Approval Threshold](#get-approval-threshold)
    - [Get Allo Instance](#get-allo-instance)
    - [Get Payouts](#get-payouts)
    - [Get Pool Amount](#get-pool-amount)
    - [Get Pool ID](#get-pool-id)
    - [Get Recipient](#get-recipient)
    - [Get Recipient Status](#get-recipient-status)
    - [Get Strategy ID](#get-strategy-id)
    - [Check Pool Activity](#check-pool-activity)
    - [Check Allocator Validity](#check-allocator-validity)
    - [Get Recipient Allocations](#get-recipient-allocations)
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
    - [Increase Max Requested Amount Data](#increase-max-requested-amount-data)
    - [Set Allocator Data](#set-allocator-data)
    - [Batch Set Allocator Data](#batch-set-allocator-data)
    - [Update Pool Timestamps Data](#update-pool-timestamps-data)

---

## Initialization

### Creating a MicroGrantsStrategy Instance

To start interacting with the MicroGrants contract, create a new instance of `MicroGrantsStrategy`:

```javascript
import { MicroGrantsStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new MicroGrantsStrategy({
  chain: 1,
});
```

If you are aware of the poolId, you can load that while creating the instance

```javascript
import { MicroGrantsStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new MicroGrantsStrategy({
  chain: 1,
  poolId: 1, // valid pool Id
});
```

### Setting Pool ID and Strategy Contract

To perform operations that require a specific pool and strategy contract, set the pool ID and strategy contract address:

```javascript
const poolId = 1;
const strategyAddress = "0xYourStrategyContractAddress";

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

### Check Allocator

Check if a specific allocator has already cast their allocation 

```javascript
const allocatorAddress = "0xYourAllocatorAddress";
const isAllocator = await strategy.allocator(allocatorAddress);
console.log(`Is Allocator: ${isAllocator}`);
```

### Check Allocated Status

Check if a specific allocator has already cast their allocation to a specific recipient

```javascript
const allocatorAddress = "0xYourAllocatorAddress";
const recipientAddress = "0xYourRecipientAddress";
const isAllocated = await strategy.allocated(allocatorAddress, recipientAddress);
console.log(`Is Allocated: ${isAllocated}`);
```

### Get Allocation End Time

Retrieve the end time of the allocation period:

```javascript
const endTime = await strategy.allocationEndTime();
console.log(`Allocation End Time: ${endTime}`);
```

### Get Allocation Start Time

Retrieve the start time of the allocation period:

```javascript
const startTime = await strategy.allocationStartTime();
console.log(`Allocation Start Time: ${startTime}`);
```

### Get Approval Threshold

Retrieve the approval threshold for the strategy:

```javascript
const threshold = await strategy.approvalThreshold();
console.log(`Approval Threshold: ${threshold}`);
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
const poolAmount = await strategy.getPoolAmount

();
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

### Get Recipient Allocations

Retrieve the allocations of a recipient based on their status:

```javascript
const recipientId = "0xYourRecipientId";
const status = 1; // Example status, replace with the actual status value
const allocations = await strategy.recipientAllocations(recipientId, status);
console.log(`Recipient Allocations: ${allocations}`);
```

### Get Max Requested Amount

Retrieve the maximum requested amount allowed by the strategy:

```javascript
const maxRequestedAmount = await strategy.maxRequestedAmount();
console.log(`Max Requested Amount: ${maxRequestedAmount}`);
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
import { StrategyType } from "@allo-team/allo-v2-sdk/dist/strategies/MicroGrantsStrategy/types";

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
  recipientAddress: "0xRecipientAddress",
  requestedAmount: BigInt(1),
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
    recipientAddress: "0xRecipientAddress1",
    requestedAmount: BigInt(1),
    metadata: {
      protocol:  BigInt(1),
      pointer: "0xYourPointer1",
    },
  },
  {
    registryAnchor: "0xYourRegistryAnchor2", // Optional
    recipientAddress: "0xRecipientAddress2",
    requestedAmount:  BigInt(2),
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

### Increase Max Requested Amount Data

Generate transaction data for increasing the maximum requested amount:

```javascript
const amount = 200;

const txData = strategy.getIncreasemaxRequestedAmountData(amount);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Set Allocator Data

Generate transaction data for setting allocator data:

```javascript
const allocatorData = {
  allocatorAddress: "0xYourAllocatorAddress",
  flag: true,
};

const txData = strategy.getSetAllocatorData(allocatorData);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Batch Set Allocator Data

Generate transaction data for batch setting allocator data:

```javascript
const batchSetAllocatorData = [
  {
    allocatorAddress: "0xYourAllocatorAddress1",
    flag: true,
  },
  {
    allocatorAddress: "0xYourAllocatorAddress2",
    flag: false,
  },
];

const txData = strategy.getBatchSetAllocatorData(batchSetAllocatorData);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```

### Update Pool Timestamps Data

Generate transaction data for updating pool timestamps:

```javascript
const allocationStartTime = 1642320000; // Example timestamp, replace with the actual value
const allocationEndTime = 1642410000; // Example timestamp, replace with the actual value

const txData = strategy.getUpdatePoolTimestampsData(allocationStartTime, allocationEndTime);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```
