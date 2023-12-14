import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  extractChain,
  getContract,
  parseAbiParameters,
} from "viem";
import { Allo } from "../../Allo/Allo";
import {
  ConstructorArgs,
  DeployParams,
  InitializeParams,
  PayoutSummary,
  Recipient,
  Status,
} from "../../types";
import { supportedChains } from "../../chains.config";
import { create } from "../../Client/Client";
import {
  abi as superfluidAbi,
  bytecode as superfluidBytecode,
} from "./superfluid.config";
import { InitializeParamsSuperFluid } from "../MicroGrantsStrategy/types";

export class SuperFluidStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  private strategy: `0x${string}`;
  private poolId: number;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.allo = new Allo({ chain, rpc });

    if (address) {
      this.contract = getContract({
        address: address,
        abi: superfluidAbi,
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || -1;
  }

  public async setPoolId(poolId: number): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);
    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: superfluidAbi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "MicroGrantsStrategy: No poolId provided. Please call `setPoolId` first."
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "MicroGrantsStrategy: No strategy address provided. Please call `setContract` first."
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
    recipientAddress: string
  ): Promise<boolean> {
    this.checkStrategy();

    const allocated = await this.contract.read.allocated([
      allocatorAddress,
      recipientAddress,
    ]);

    return allocated;
  }

  public async allocationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async allocationStartTime(): Promise<number> {
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

  public async getPoolAmount(): Promise<number> {
    this.checkStrategy();

    const amount = await this.contract.read.getPoolAmount();

    return amount;
  }

  public async getPoolId(): Promise<number> {
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
    status: Status
  ): Promise<string> {
    this.checkStrategy();

    const allocations = await this.contract.read.recipientAllocations([
      recipientId,
      status,
    ]);

    return allocations;
  }

  public async maxRequestedAmount(): Promise<number> {
    this.checkStrategy();

    const maxRequestedAmount = await this.contract.read.maxRequestedAmount();

    return maxRequestedAmount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();

    const useRegistryAnchor = await this.contract.read.useRegistryAnchor();

    return useRegistryAnchor;
  }

  public async getInitializeData(
    params: InitializeParamsSuperFluid
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "bool, bool, address, address, address, uint64, uint64, uint64, uint64, uint256, uint256"
      ),
      [
        params.useRegistryAnchor,
        params.metadataRequired,
        params.passportDecoder,
        params.superFluidHost,
        params.allocationSuperToken,
        params.registrationStartTime,
        params.registrationEndTime,
        params.allocationStartTime,
        params.allocationEndTime,
        params.approvalThreshold,
        params.maxRequestedAmount,
      ]
    );

    return encoded;
  }

  public getDeployParams(strategyType: string): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), strategyType]
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    // create the proper bytecode
    const bytecode = superfluidBytecode;
    const abi = superfluidAbi;

    return {
      abi: abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  // todo: finish this...
}
