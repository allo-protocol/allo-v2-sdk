import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  encodeFunctionData,
  extractChain,
  getContract,
  parseAbiParameters,
} from "viem";

import { Allo } from "../../Allo/Allo";
import { abi as alloAbi } from "../../Allo/allo.config";
import { create } from "../../Client/Client";
import {
  abi as microGrantsAbi,
  bytecode as microGrantsBytecode,
} from "./microGrants.config";
import {
  abi as microGrantsGovAbi,
  bytecode as microGrantsGovBytecode,
} from "./microGrantsGov.config";
import {
  abi as microGrantsHatsAbi,
  bytecode as microGrantsHatsBytecode,
} from "./microGrantsHats.config";

import {
  ConstructorArgs,
  DeployParams,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { PayoutSummary, Status } from "../types";

import { supportedChains } from "../../chains.config";
import {
  Allocation,
  InitializeParams,
  InitializeParamsGov,
  InitializeParamsHats,
  Recipient,
  RegisterData,
  SetAllocatorData,
  StrategyType,
} from "./types";

export class MicroGrantsStrategy {
  private client: PublicClient<Transport, Chain>;

  private contract: any;

  private strategy: `0x${string}` | undefined;

  private poolId: bigint;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.allo = new Allo({ chain, rpc }); // to call allocate

    if (address) {
      this.contract = getContract({
        address: address,
        abi: microGrantsAbi,
        client: {
          public: this.client,
        }
      });
      this.strategy = address;
    }

    this.poolId = poolId || BigInt(-1);
  }

  public async setPoolId(poolId: bigint): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);
    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: microGrantsAbi,
      client: {
        public: this.client,
      }
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === BigInt(-1))
      throw new Error(
        "MicroGrantsStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "MicroGrantsStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async allocator(allocatorAddress: string): Promise<boolean> {
    this.checkStrategy();
    const allocator = await this.contract.read.allocators([allocatorAddress]);

    return allocator;
  }

  public async allocated(
    allocatorAddress: string,
    recipientAddress: string,
  ): Promise<boolean> {
    this.checkStrategy();

    const allocated = await this.contract.read.allocated([
      allocatorAddress,
      recipientAddress,
    ]);

    return allocated;
  }

  public async allocationEndTime(): Promise<bigint> {
    this.checkStrategy();

    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async allocationStartTime(): Promise<bigint> {
    this.checkStrategy();

    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async approvalThreshold(): Promise<string> {
    this.checkStrategy();

    const threshold = await this.contract.read.approvalThreshold();

    return threshold;
  }

  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public async getPayouts(recipientIds: string[]): Promise<PayoutSummary[]> {
    this.checkStrategy();

    const emptyData = Array(recipientIds.length).fill("0x");

    const payouts = await this.contract.read.getPayouts([
      recipientIds,
      emptyData,
    ]);

    const payoutSummary: PayoutSummary[] = payouts.map((payout: any) => {
      this.checkStrategy();

      return {
        address: payout.recipientAddress,
        amount: payout.amount,
      };
    });

    return payoutSummary;
  }

  public async getPoolAmount(): Promise<bigint> {
    this.checkStrategy();

    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<bigint> {
    this.checkStrategy();

    const poolId = await this.contract.read.getPoolId();

    return poolId;
  }

  public async getRecipient(recipientId: string): Promise<Recipient> {
    this.checkStrategy();

    const recipient = await this.contract.read.getRecipient([recipientId]);

    return recipient;
  }

  public async getRecipientStatus(recipientId: string): Promise<Status> {
    this.checkStrategy();

    const status = await this.contract.read.getRecipientStatus([recipientId]);

    return status;
  }

  public async getStrategyId(): Promise<string> {
    this.checkStrategy();

    const id = await this.contract.read.getStrategyId();

    return id;
  }

  public async isPoolActive(): Promise<boolean> {
    this.checkStrategy();

    const active = await this.contract.read.isPoolActive();

    return active;
  }

  public async isValidAllocator(allocatorAddress: string): Promise<boolean> {
    this.checkStrategy();

    const valid = await this.contract.read.isValidAllocator([allocatorAddress]);

    return valid;
  }

  public async recipientAllocations(
    recipientId: string,
    status: Status,
  ): Promise<string> {
    this.checkStrategy();

    const allocations = await this.contract.read.recipientAllocations([
      recipientId,
      status,
    ]);

    return allocations;
  }

  public async maxRequestedAmount(): Promise<bigint> {
    this.checkStrategy();

    const maxRequestedAmount = await this.contract.read.maxRequestedAmount();

    return maxRequestedAmount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();

    const useRegistryAnchor = await this.contract.read.useRegistryAnchor();

    return useRegistryAnchor;
  }

  public async getHatsAddress(): Promise<`0x${string}`> {
    this.checkStrategy();

    const contractReader = getContract({
      address: this.strategy!,
      abi: microGrantsHatsAbi,
      client: {
        public: this.client,
      }
    });

    const hatsAddress: `0x${string}` =
      (await contractReader.read.hats()) as `0x${string}`;

    return hatsAddress;
  }

  public async getHatId(): Promise<bigint> {
    this.checkStrategy();

    const contractReader = getContract({
      address: this.strategy!,
      abi: microGrantsHatsAbi,
      client: {
        public: this.client,
      }
    });

    const hatId: bigint = (await contractReader.read.hatId()) as bigint;

    return hatId;
  }

  public async getGovAddress(): Promise<`0x${string}`> {
    this.checkStrategy();

    const contractReader = getContract({
      address: this.strategy!,
      abi: microGrantsGovAbi,
      client: {
        public: this.client,
      }
    });

    const govAddress: `0x${string}` =
      (await contractReader.read.gov()) as `0x${string}`;

    return govAddress;
  }

  public async getSnapshotReference(): Promise<bigint> {
    this.checkStrategy();

    const contractReader = getContract({
      address: this.strategy!,
      abi: microGrantsGovAbi,
      client: {
        public: this.client,
      }
    });

    const reference: bigint =
      (await contractReader.read.snapshotReference()) as bigint;

    return reference;
  }

  public async getMinimumVotePower(): Promise<bigint> {
    this.checkStrategy();

    const contractReader = getContract({
      address: this.strategy!,
      abi: microGrantsGovAbi,
      client: {
        public: this.client,
      }
    });

    const votePower: bigint =
      (await contractReader.read.minVotePower()) as bigint;

    return votePower;
  }

  public async getStrategyContractId(
    strategyContract: string,
  ): Promise<{ strategyId: `0x${string}` }> {
    const contractReader = getContract({
      address: strategyContract as `0x${string}`,
      abi: microGrantsGovAbi,
      client: {
        public: this.client,
      }
    });

    const strategyId = await contractReader.read.getStrategyId();

    switch (strategyId) {
      case "0x697f0592ebd05466d2d24454477e11d69c475d7a7c4134f15ddc1ea9811bb16f":
        return {
          strategyId: strategyId,
        };

      case "0x741ac1e2f387d83f219f6b5349d35ec34902cf94019d117335e0045d2e0ed912":
        return {
          strategyId: strategyId,
        };

      case "0x5aa24dcfcd55a1e059a172e987b3456736b4856c71e57aaf52e9a965897318dd":
        return {
          strategyId: strategyId,
        };

      case "0xb87f34c0968bd74d43a6a5b72831a5ea733a4783a026b9fc9b1d17adf51214d2":
        return {
          strategyId: strategyId,
        };

      case "0x414f2ea9b91b8ee2e35a380fa0af0e14079832cc93530a61a4893b3dbf0a9aba":
        return {
          strategyId: strategyId,
        };

      case "0xed28ce0387d1786c1a38404047e9eecc4d1dcaeff695b867e912483e36c3d770":
        return {
          strategyId: strategyId,
        };

      case "0xc5263e972c91d7ff40708bc71239a2b6cbc8768704e210ca3069e2e11fc195df":
        return {
          strategyId: strategyId,
        };

      case "0xecc48557f4826bd1181a4495232d6d07f248ef9cc0a650e64520f6c9f7458a8c":
        return {
          strategyId: strategyId,
        };

      default:
        return {
          strategyId: "0x",
        };
    }
  }

  public async getInitializeData(
    params: InitializeParams,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("bool, uint64, uint64, uint256, uint256"),
      [
        params.useRegistryAnchor,
        params.allocationStartTime,
        params.allocationEndTime,
        params.approvalThreshold,
        params.maxRequestedAmount,
      ],
    );

    return encoded;
  }

  public async getInitializeDataHats(
    params: InitializeParamsHats,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "(bool, uint64, uint64, uint256, uint256), address, uint256",
      ),
      [
        [
          params.useRegistryAnchor,
          params.allocationStartTime,
          params.allocationEndTime,
          params.approvalThreshold,
          params.maxRequestedAmount,
        ],
        params.hats,
        params.hatId,
      ],
    );

    return encoded;
  }

  public async getInitializeDataGov(
    params: InitializeParamsGov,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "bool, uint64, uint64, uint256, uint256, address, uint256, uint256",
      ),
      [
        params.useRegistryAnchor,
        params.allocationStartTime,
        params.allocationEndTime,
        params.approvalThreshold,
        params.maxRequestedAmount,
        params.gov,
        params.snapshotReference,
        params.minVotePower,
      ],
    );

    console.log(params);

    return encoded;
  }

  public getDeployParams(strategyType: string): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), strategyType],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    // create the proper bytecode
    const bytecode =
      strategyType == StrategyType.Gov
        ? microGrantsGovBytecode
        : strategyType == StrategyType.Hats
        ? microGrantsHatsBytecode
        : microGrantsBytecode;
    const abi =
      strategyType == StrategyType.Gov
        ? microGrantsGovAbi
        : strategyType == StrategyType.Hats
        ? microGrantsHatsAbi
        : microGrantsAbi;

    return {
      abi: abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public getBatchAllocationData(allocations: Allocation[]): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    allocations.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, uint8"),
        [allocation.recipientId, allocation.status],
      );

      encodedParams.push(encoded);
    });

    const poolIds: bigint[] = Array(encodedParams.length).fill(this.poolId);

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "batchAllocate",
      args: [poolIds, encodedParams],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getAllocationData(
    recipientId: `0x${string}`,
    status: Status,
  ): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, uint8"),
      [recipientId, status],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "allocate",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getRegisterRecipientData(data: RegisterData): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, uint256, (uint256, string)"),
      [
        data.registryAnchor || ZERO_ADDRESS,
        data.recipientAddress,
        data.requestedAmount,
        [data.metadata.protocol, data.metadata.pointer],
      ],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "registerRecipient",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getBatchRegisterRecipientData(data: RegisterData[]): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, uint256, (uint256, string)"),
        [
          registerData.registryAnchor || ZERO_ADDRESS,
          registerData.recipientAddress,
          registerData.requestedAmount,
          [registerData.metadata.protocol, registerData.metadata.pointer],
        ],
      );

      encodedParams.push(encoded);
    });

    const poolIds: bigint[] = Array(encodedParams.length).fill(this.poolId);

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "batchRegisterRecipient",
      args: [poolIds, encodedParams],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  public getIncreasemaxRequestedAmountData(amount: bigint): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi: microGrantsAbi,
      functionName: "increasemaxRequestedAmountAllowed",
      args: [amount],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getSetAllocatorData(data: SetAllocatorData): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi: microGrantsAbi,
      functionName: "setAllocator",
      args: [data.allocatorAddress, data.flag],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getBatchSetAllocatorData(data: SetAllocatorData[]): TransactionData {
    this.checkStrategy();

    const allocatorArray: `0x${string}`[] = [];
    const flagArray: boolean[] = [];

    data.map((allocator) => {
      allocatorArray.push(allocator.allocatorAddress);
      flagArray.push(allocator.flag);
    });

    const encodedData = encodeFunctionData({
      abi: microGrantsAbi,
      functionName: "batchSetAllocator",
      args: [allocatorArray, flagArray],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public getUpdatePoolTimestampsData(
    allocationStartTime: bigint,
    allocationEndTime: bigint,
  ): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi: microGrantsAbi,
      functionName: "updatePoolTimestamps",
      args: [allocationStartTime, allocationEndTime],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }
}
