# Allo Table of Contents

- [Table of Contents](#table-of-contents)
- [Allo](#allo)
  - [Initialization](#initialization)
    - [Creating an Allo Instance](#creating-an-allo-instance)
  - [Read Functions](#view-functons)
  - [Write Functions](#write-functions)


# Allo

The Allo class provides a set of funcitons for interacting with the Allo contract read and write functions. The README provides examples and explainations for using these functions.

## Intialization
Before using the functions provided by the Registry module, you need to create an instance of the Allo class. Here's how you can create a Allo instance:

### Creating an Allo Insatance

To create a new Registry instance, you need to provide the chain information. In this example, we're using the 5 chain information.

```javascript
import { chains } from "../Client/chains";
import { Allo } from "../Allo/Allo";

const allo = new Allo({ chain: 5 });
```

This allo instance can then be used to call various read and transactional functions provided by the Allo module. Refer to the sections above for detailed examples on how to use these functions. Remember to replace placeholder values with actual values according to your requirements.

---

## Read Functons

## Write Functons