# SuperFluid Strategy

## Table of Contents

- [SQFSuperFluidStrategy](#superfluid-strategy)
  - [Table of Contents](#table-of-contents)
  - [Initialization](#initialization)
    - [Creating a SQFSuperFluidStrategy Instance](#creating-a-sqfsuperfluidstrategy-instance)
    - [Setting Pool ID and Strategy Contract](#setting-pool-id-and-strategy-contract)
  - [Read-Only Functions](#read-only-functions)
  - [Write Functions](#write-functions)

## Initialization

To start interacting with the SQFSuperFluidStrategy contract, create a new
instance of `SQFSuperFluidStrategy`:

```javascript
import { SQFSuperFluidStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new SQFSuperFluidStrategy({
  chain: 1,
});
```

If you are aware of the poolId, you can load that while creating the instance

```javascript
import { SQFSuperFluidStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new SQFSuperFluidStrategy({
  chain: 1,
  poolId: 1, // valid pool Id
});
```

### Setting Pool ID and Strategy Contract

To perform operations that require a specific pool and strategy contract, set
the pool ID and strategy contract address:

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

Check if a specific allocator has already cast their allocation to a specific
recipient

```javascript
const allocatorAddress = "0xYourAllocatorAddress";
const recipientAddress = "0xYourRecipientAddress";
const isAllocated = await strategy.allocated(
  allocatorAddress,
  recipientAddress,
);
console.log(`Is Allocated: ${isAllocated}`);
```

### Get Registration Start Time

Retrieve the start time of the registration period:

```javascript
const startTime = await strategy.registrationStartTime();
console.log(`Registration Start Time: ${startTime}`);
```

### Get Registration End Time

Retrieve the end time of the registration period:

```javascript
const endTime = await strategy.registrationEndTime();
console.log(`Registration End Time: ${EndTime}`);
```

### Get Allocation Start Time

Retrieve the start time of the allocation period:

```javascript
const startTime = await strategy.allocationStartTime();
console.log(`Allocation Start Time: ${startTime}`);
```

### Get Allocation End Time

Retrieve the end time of the allocation period:

```javascript
const endTime = await strategy.allocationEndTime();
console.log(`Allocation End Time: ${endTime}`);
```

### Get Allo Instance

Retrieve the associated Allo instance for the strategy:

```javascript
const alloInstance = await strategy.getAllo();
console.log(`Allo Instance: ${alloInstance}`);
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

### Check Use Registry Anchor

Check if the strategy uses a registry anchor:

```javascript
const useRegistryAnchor = await strategy.useRegistryAnchor();
console.log(`Use Registry Anchor: ${useRegistryAnchor}`);
```

### Check if Metadata is required

```javascript
const metadataRequired = await strategy.metadataRequired();
console.log(`Require Metadata: ${metadataRequired}`);
```

### Check Allocator Validity

Check if a specific allocator address is valid for the strategy:

```javascript
const allocatorAddress = "0xYourAllocatorAddress";
const isValid = await strategy.isValidAllocator(allocatorAddress);
console.log(`Is Allocator Valid: ${isValid}`);
```

### Get total units by recipient

```javascript
const recipientId = "0xYourRecipientId";
const totalUnits = await strategy.totalUnitsByRecipient(recipientId);
console.log(`Total Units: ${totalUnits}`);
```

## Write Functions

### Deploy Parameters

Generate deployment parameters for deploying a new strategy:

```javascript
import { StrategyType } from "@allo-team/allo-v2-sdk/dist/strategies/MicroGrantsStrategy/types";

const strategyType = StrategyType.SQFSuperFluid; // Specify the strategy type
const deployParams = strategy.getDeployParams(strategyType);

// Client could be from ethers, viem, etc.
const hash = await walletClient!.deployContract({
  abi: deployParams.abi,
  bytecode: deployParams.bytecode as `0x${string}`,
  args: [],
});
```

### Update Pool Timestamps Data

Generate transaction data for updating pool timestamps:

```javascript
const registrationStartTime = 1642320000; // Example timestamp, replace with the actual value
const registrationEndTime = 1642410000; // Example timestamp, replace with the actual value
const allocationStartTime = 1642320000; // Example timestamp, replace with the actual value
const allocationEndTime = 1642410000; // Example timestamp, replace with the actual value

const txData = strategy.getUpdatePoolTimestampsData(registrationStartTime, registrationEndTime, allocationStartTime, allocationEndTime);

// Client could be from ethers, viem, etc.
const tx = await sendTransaction({
  to: txData.to as string,
  data: txData.data,
  value: BigInt(txData.value),
});
```
