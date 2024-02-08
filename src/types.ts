export { CreatePoolArgs, UpdateMetaDataArgs, Pool } from "./Allo/types";

export {
  ConstructorArgs,
  TransactionData,
  Metadata,
  FunctionDataParams,
  DeployParams,
  ZERO_ADDRESS,
} from "./Common/types";

export {
  Profile,
  CreateProfileArgs,
  HasRoleArgs,
  ProfileAndAddressArgs,
  MemberArgs,
  ProfileMetadataArgs,
  ProfileNameArgs,
} from "./Registry/types";

export { PayoutSummary, Status } from "./strategies/types";

export {
  Recipient,
  RegisterData,
  InitializeParams,
  Allocation,
  SetAllocatorData,
} from "./strategies/MicroGrantsStrategy/types";


export const StrategyType = {
  MicroGrants: "MicroGrantsv1",
  Hats: "MicroGrantsHatsv1",
  Gov: "MicroGrantsGovv1",
  SQFSuperFluid: "SQFSuperFluidStrategyv1"
};

export const NATIVE =
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLocaleLowerCase();