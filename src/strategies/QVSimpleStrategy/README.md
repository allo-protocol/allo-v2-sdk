# Quadratic Voting Simple Strategy

This strategy is a simple implementation of Quadratic Voting.

## Table of Contents

- [Quadratic Voting Simple Strategy](#quadratic-voting-simple-strategy)
  - [Table of Contents](#table-of-contents)
  - [Initialization](#initialization)
    - [Creating a Quadratic Voting Instance](#creating-a-quadratic-voting-instance)

## Initialization

### Creating a Quadratic Voting Instance

```javascript
import { QVSimpleStrategy } from "@allo-team/allo-v2-sdk/";

const strategy = new QVSimpleStrategy({
    chain: 1,
    poolId: 1,
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

### Deploy Parameters

Generate deployment parameters for deploying a new strategy:

```javascript
const deployParams = strategy.getDeployParams();

// Client could be from ethers, viem, etc.
const hash = await walletClient!.deployContract({
  abi: deployParams.abi,
  bytecode: deployParams.bytecode as `0x${string}`,
  args: [],
});
```