import { Allo } from "./Allo/Allo";
import { Registry } from "./Registry/Registry";
import { BaseStrategy } from "./strategies/BaseStrategy";

// Strategy Extensions
import { AllocationExtension } from "./strategies/extensions/allocate/AllocationExtension";
import { AllocatorsAllowlistExtension } from "./strategies/extensions/allocate/AllocatorsAllowlistExtension";
import { EASGatingExtension } from "./strategies/extensions/gating/EASGatingExtension";
import { MilestonesExtension } from "./strategies/extensions/milestones/MilestonesExtension";
import { RecipientsExtension } from "./strategies/extensions/register/RecipientsExtension";

// Type exports
export * from "./types";
export * from "./strategies/types";
export * from "./Registry/types";
export * from "./Allo/types";

// ABI exports
export { abi as AlloAbi } from "./Allo/allo.config";
export { abi as RegistryAbi } from "./Registry/registry.config";
export { abi as BaseStrategyAbi } from "./strategies/baseStrategy.config";
export { abi as AllocationExtensionAbi } from "./strategies/extensions/allocate/allocationExtension.config";
export { abi as AllocatorsAllowlistExtensionAbi } from "./strategies/extensions/allocate/allocatorsAllowlistExtension.config";
export { abi as EASGatingExtensionAbi } from "./strategies/extensions/gating/easGatingExtension.config";
export { abi as NFTGatingExtensionAbi } from "./strategies/extensions/gating/tokenGatingExtension.config";
export { abi as TokenGatingExtensionAbi } from "./strategies/extensions/gating/tokenGatingExtension.config";
export { abi as MilestonesExtensionAbi } from "./strategies/extensions/milestones/milestonesExtension.config";
export { abi as RecipientsExtensionAbi } from "./strategies/extensions/register/recipientsExtension.config";

// Main exports
export {
  // Core
  Allo,
  Registry,
  BaseStrategy,
  
  // Extensions
  AllocationExtension,
  AllocatorsAllowlistExtension,
  EASGatingExtension,
  MilestonesExtension,
  RecipientsExtension,
};
