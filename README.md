# Allo Protocol V2 SDK

Welcome to the allo-v2-sdk, a powerful software development kit designed to simplify and streamline your interactions with the Allo V2 protocol. This SDK provides tools and utilities for managing your profile on the registry, creating and managing pools on Allo, and directly interacting with custom approved strategies. As the Allo V2 protocol evolves and new strategies are added, this SDK will continue to grow and adapt to support them seamlessly.

## Table of Contents

- [Allo Protocol V2 SDK](#allo-protocol-v2-sdk)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Profile Management](#profile-management)
  - [Pool Management](#pool-management)
  - [Strategy Management](#strategy-management)
  - [Supported Chains](#supported-chains)
  - [Contribution Guidelines](#contribution-guidelines)

## Installation

To install the allo-v2-sdk, use the following steps:

```bash
npm i @allo-team/allo-v2-sdk
```

## Profile Management

The allo-v2-sdk provides functions to create and manage your profile on the registry. For detailed instructions, please refer to the Registry [README](./src/Registry/README.md) to learn how to manage your profile on the registry.


## Pool Management

The allo-v2-sdk provides functions to create and manage your pool on the pool. For detailed instructions, please refer to the Allo [README](./src/Allo/README.md) to learn how to manage your pools on Allo.

## Strategy Management

Custom strategies may include functions that are not explicitly defined in the IStrategy interface. The allo-v2-sdk extends its support to a variety of strategies, encompassing a broad range of functionalities.

**Supported Strategies**
- [MicroGrants](./src/strategies/MicroGrantsStrategy/README.md)

## Supported Chains

The SDK seamlessly accommodates all chains where Allo-v2 is deployed, with the network configurations conveniently accessible [here](./src/chains.config.ts).

## Contribution Guidelines

We welcome contributions to the allo-v2-sdk. If you'd like to contribute, please submit a pull request.
