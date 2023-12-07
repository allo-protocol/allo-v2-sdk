# Allo Table of Contents

- [Allo Table of Contents](#allo-table-of-contents)
- [Allo](#allo)
  - [Initialization](#initialization)
    - [Creating an Allo Instance](#creating-an-allo-instance)
    - [Get Allo Address](#get-allo-address)
  - [Read Only Functions](#read-only-functions)
    - [Get Fee Denominator](#get-fee-denominator)
    - [Check Pool Admin](#check-pool-admin)
    - [Check Pool Manager](#check-pool-manager)
    - [Get Strategy](#get-strategy)
    - [Get Percent Fee](#get-percent-fee)
    - [Get Base Fee](#get-base-fee)
    - [Get Treasury](#get-treasury)
    - [Get Registry](#get-registry)
    - [Check Cloneable Strategy](#check-cloneable-strategy)
    - [Get Pool](#get-pool)
  - [Write Functions](#write-functions)
    - [Create Pool With Custom Strategy](#create-pool-with-custom-strategy)
    - [Create Pool](#create-pool)
    - [Update Pool Metadata](#update-pool-metadata)
    - [Update Registry](#update-registry)
    - [Update Treasury](#update-treasury)
    - [Update Percent Fee](#update-percent-fee)
    - [Update Base Fee](#update-base-fee)
    - [Add to Cloneable Strategies](#add-to-cloneable-strategies)
    - [Remove from Cloneable Strategies](#remove-from-cloneable-strategies)
    - [Add Pool Manager](#add-pool-manager)
    - [Remove Pool Manager](#remove-pool-manager)
    - [Recover Funds](#recover-funds)
    - [Register Recipient](#register-recipient)
    - [Batch Register Recipient](#batch-register-recipient)
    - [Fund Pool](#fund-pool)
    - [Allocate](#allocate)
    - [Batch Allocate](#batch-allocate)
    - [Distribute](#distribute)


# Allo

The Allo class provides a set of functions for interacting with the Allo contract's view and write functions. This README provides examples and explanations for using these functions.

## Initialization

### Creating an Allo Instance

To create a new Allo instance, you need to provide the chain information. In this example, we're using the 5 chain information.

```typescript
import { Allo } from "@allo-team/allo-v2-sdk/";
const allo = new Allo({ chain: 5 });
```

This `allo` instance can then be used to call various read and transactional functions provided by the Allo module. Refer to the sections below for detailed examples on how to use these functions. Remember to replace placeholder values with actual values according to your requirements.

### Get Allo Address

To retrieve the Allo contract address:

```typescript
const alloAddress: `0x${string}` = allo.address();
console.log(alloAddress);
```

## Read Only Functions

### Get Fee Denominator

To retrieve the Fee Denominator:

```typescript
const feeDenominator: number = await allo.getFeeDenominator();
console.log(feeDenominator);
```

### Check Pool Admin

To check if an address is a Pool Admin:

```typescript
const poolId = 1; // Replace with the desired pool ID
const address = "your_address_here";
const isPoolAdmin: boolean = await allo.isPoolAdmin(poolId, address);
console.log(isPoolAdmin);
```

### Check Pool Manager

To check if an address is a Pool Manager:

```typescript
const poolId = 1; // Replace with the desired pool ID
const address = "your_address_here";
const isPoolManager: boolean = await allo.isPoolManager(poolId, address);
console.log(isPoolManager);
```

### Get Strategy

To retrieve the Strategy address for a specific pool:

```typescript
const poolId = 1; // Replace with the desired pool ID
const strategyAddress: string = await allo.getStrategy(poolId);
console.log(strategyAddress);
```

### Get Percent Fee

To retrieve the Percent Fee:

```typescript
const percentFee: number = await allo.getPercentFee();
console.log(percentFee);
```

### Get Base Fee

To retrieve the Base Fee:

```typescript
const baseFee: number = await allo.getBaseFee();
console.log(baseFee);
```

### Get Treasury

To retrieve the Treasury address:

```typescript
const treasuryAddress: string = await allo.getTreasury();
console.log(treasuryAddress);
```

### Get Registry

To retrieve the Registry address:

```typescript
const registryAddress: string = await allo.getRegistry();
console.log(registryAddress);
```

### Check Cloneable Strategy

To check if the Strategy is cloneable:

```typescript
const isCloneable: boolean = await allo.isCloneableStrategy();
console.log(isCloneable);
```

### Get Pool

To retrieve information about a specific pool:

```typescript
const poolId = 1; // Replace with the desired pool ID
const pool: Pool = await allo.getPool(poolId);
console.log(pool);
```

## Write Functions

### Create Pool With Custom Strategy

To create a new pool with a custom strategy:

```typescript
import { CreatePoolArgs } from "@allo-team/allo-v2-sdk/dist/Allo/types";
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const createPoolArgs: CreatePoolArgs = {
  profileId: "your_profileId_here", // sender must be a profile member 
  strategy: "deployed_strategy_contract", // deployed strategy contract
  initStrategyData: initStrategyData, // unique to the strategy
  token: "token_address_here",
  amount: "pool_amount_here",
  metadata: {
    protocol: BigInt(1),
    pointer: "your_ipfs_hash",
  },
  managers: ["pool_manager_address"],
};

const txData: TransactionData = allo.createPoolWithCustomStrategy(createPoolArgs);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Create Pool

To create a new pool:

```typescript
import { CreatePoolArgs } from "@allo-team/allo-v2-sdk/dist/Allo/types";
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const createPoolArgs: CreatePoolArgs = {
  profileId: "your_profileId_here", // sender must be a profile member 
  strategy: "approved_strategy_contract", // approved strategy contract
  initStrategyData: initStrategyData, // unique to the strategy
  token: "token_address_here",
  amount: "pool_amount_here",
  metadata: {
    protocol: BigInt(1),
    pointer: "your_ipfs_hash",
  },
  managers: ["pool_manager_address"],
};

const txData: TransactionData = allo.createPool(createPoolArgs);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Update Pool Metadata

To update pool metadata:

```typescript
import { UpdateMetaDataArgs } from "@allo-team/allo-v2-sdk/dist/Allo/types";
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const updateMetadataArgs: UpdateMetaDataArgs = {
  poolId = 1,
  metadata: {
    protocol: BigInt(1),
    pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
  },
};

const txData: TransactionData = allo.updatePoolMetadata(updateMetadataArgs);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Update Registry

To update the Registry address:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const registryAddress = "new_registry_address_here";

const txData

: TransactionData = allo.updateRegistry(registryAddress);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Update Treasury

To update the Treasury address:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const treasuryAddress = "new_treasury_address_here";

const txData: TransactionData = allo.updateTreasury(treasuryAddress);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Update Percent Fee

To update the Percent Fee:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const percentage = 1e12; // Replace with the desired percentage

const txData: TransactionData = allo.updatePercentFee(percentage);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Update Base Fee

To update the Base Fee:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const percentage = 1e12; // Replace with the desired percentage

const txData: TransactionData = allo.updateBaseFee(percentage);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Add to Cloneable Strategies

To add a strategy to the list of cloneable strategies:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const strategyAddress = "strategy_address_here";

const txData: TransactionData = allo.addToCloneableStrategies(strategyAddress);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Remove from Cloneable Strategies

To remove a strategy from the list of cloneable strategies:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const strategyAddress = "strategy_address_here";

const txData: TransactionData = allo.removeFromCloneableStrategies(strategyAddress);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Add Pool Manager

To add a manager to a pool:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1; // Replace with the desired pool ID
const manager = "manager_address_here";

const txData: TransactionData = allo.addPoolManager(poolId, manager);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Remove Pool Manager

To remove a manager from a pool:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1; // Replace with the desired pool ID
const manager = "manager_address_here";

const txData: TransactionData = allo.removePoolManager(poolId, manager);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Recover Funds

To recover funds:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const token = "token_address_here";
const recipient = "recipient_address_here";

const txData: TransactionData = allo.recoverFunds(token, recipient);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Register Recipient

To register a recipient for a specific pool:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1; // Replace with the desired pool ID
const strategyData = "strategy_data_here";

const txData: TransactionData = allo.registerRecipient(poolId, strategyData);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Batch Register Recipient

To batch register recipients for multiple pools:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolIds = [1, 2, 3]; // Replace with the desired pool IDs
const strategyData = ["strategy_data_1", "strategy_data_2", "strategy_data_3"]; // Replace with the corresponding strategy data

const txData: TransactionData = allo.batchRegisterRecipient(poolIds, strategyData);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Fund Pool

To fund a pool with a specific amount:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1; // Replace with the desired pool ID
const amount = 1e18; // Replace with the desired amount

const txData: TransactionData = allo.fundPool(poolId, amount);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Allocate

To allocate funds for a specific pool:

```typescript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1; // Replace with the desired pool ID
const strategyData = "strategy_data_here";

const txData: TransactionData = allo.allocate(poolId, strategyData);

// Client could be from ethers, viem, etc.
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Batch Allocate

To batch allocate funds to multiple pools:

```javascript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolIds = [1, 2, 3]; // Example pool IDs
const strategyData = ["0xStrategyData1", "0xStrategyData2", "0xStrategyData3"]; // Example strategy data

const txData: TransactionData = allo.batchAllocate(poolIds, strategyData);

// Use a client to send the transaction
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Distribute

To distribute funds to multiple recipients in a pool:

```javascript
import { TransactionData } from "@allo-team/allo-v2-sdk/dist/Common/types";

const poolId = 1;
const recipientIds = ["0xRecipient1", "0xRecipient2", "0xRecipient3"]; // Example recipient addresses
const strategyData = "0xStrategyData"; // Example strategy data

const txData: TransactionData = allo.distribute(poolId, recipientIds, strategyData);

// Use a client to send the transaction
const hash = await client.sendTransaction({
  data: txData.data,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```