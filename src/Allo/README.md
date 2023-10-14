# Allo SDK README

## Table of Contents

- [Allo SDK README](#allo-sdk-readme)
  - [Table of Contents](#table-of-contents)
  - [Allo](#allo)
    - [Intialization](#intialization)
      - [Creating an Allo Instance](#creating-an-allo-instance)
    - [Read Functions](#read-functions)
    - [Write Functions](#write-functions)

## Allo

The Allo class provides a set of funcitons for interacting with the Allo contract read and write functions. The README provides examples and explainations for using these functions.

### Intialization

Before using the functions provided by the Registry module, you need to create an instance of the Allo class. Here's how you can create a Allo instance:

#### Creating an Allo Instance

To create a new Registry instance, you need to provide the chain information. In this example, we're using the chains.goerli chain information.

```javascript
import { chains } from "../Client/chains";
import { Allo } from "../Allo/Allo";

const allo = new Allo({ chain: chains.goerli });
```

This allo instance can then be used to call various read and transactional functions provided by the Allo module. Refer to the sections above for detailed examples on how to use these functions. Remember to replace placeholder values with actual values according to your requirements.

---

### Read Functions

- ```getFeeDenominator```: Returns the fee denominator.
- ```isPoolAdmin```: Checks if an address is an admin of a specific pool.
- ```isPoolManager```: Checks if an address is a manager of a specific pool.
- ```getStrategy```: Returns the strategy address of a specific pool.
- ```getPercentFee```: Returns the percentage fee.
- ```getBaseFee```: Returns the base fee.
- ```getTreasury```: Returns the treasury address.
- ```getRegistry```: Returns the registry address.
- ```isCloneableStrategy```: Checks if a strategy is cloneable.
- ```getPool```: Returns the pool data of a specific pool.

### Write Functions

- ```createPoolWithCustomStrategy```: Creates a pool with a custom strategy.
- ```createPool```: Creates a pool with a cloneable strategy.
- ```updatePoolMetadata```: Updates metadata of a specific pool.
- ```updateRegistry```: Updates the registry address.
- ```updateTreasury```: Updates the treasury address.
- ```updatePercentFee```: Updates the percentage fee.
- ```updateBaseFee```: Updates the base fee.
- ```addToCloneableStrategies```: Adds a strategy to cloneable strategies.
- ```removeFromCloneableStrategies```: Removes a strategy from cloneable strategies.
- ```addPoolManager```: Adds a manager to a specific pool.
- ```removePoolManager```: Removes a manager from a specific pool.
- ```recoverFunds```: Recovers funds from the contract.
- ```registerRecipient```: Registers a recipient to a specific pool.
- ```batchRegisterRecipient```: Registers a recipient to multiple pools.
- ```fundPool```: Funds a specific pool.
- ```allocate```: Allocates funds to a specific pool.
- ```batchAllocate```: Allocates funds to multiple pools.
- ```distribute```: Distributes funds to recipients of a specific pool.
