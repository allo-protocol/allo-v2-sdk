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
import { create } from "../../Client/Client";
import { Allo } from "../../Allo/Allo";
import {
  ConstructorArgs,
  DeployParams,
  Metadata,
  TransactionData,
} from "../../Common/types";
import { PayoutSummary, Status } from "../types";
import {
  Distribution,
  InitializeParamsDonationVoting,
  Permit2Data,
  Recipient,
  RegisterDataDonationVoting,
  StrategyTypeDonationVoting,
} from "./types";
import { supportedChains } from "../../chains.config";
import {
  abi as vaultAbi,
  bytecode as vaultBytecode,
} from "./donationVotingVault.config";
import {
  abi as directAbi,
  bytecode as directBytecode,
} from "./donationVotingDirect.config";
import { abi as alloAbi } from "../../Allo/allo.config";

export class DonationVotingMerkleDistributionStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;

  private strategy: `0x${string}` | undefined;
  private poolId: number;

  private allo: Allo;

  constructor({ chain, rpc, address, poolId }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);

    this.allo = new Allo({ chain, rpc }); // to call allocate

    if (address) {
      this.strategy = address;

      this.contract = getContract({
        address: address,
        abi: vaultAbi,
        publicClient: this.client,
      });
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
      abi: vaultAbi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === -1)
      throw new Error(
        "DonationVotingMerkleDistributionStrategy: No poolId provided. Please call `setPoolId` first.",
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "DonationVotingMerkleDistributionStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  // Init and Deploy

  public async getInitializeData(
    params: InitializeParamsDonationVoting,
  ): Promise<`0x${string}`> {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "bool, bool, uint64, uint64, uint64, uint64, address[]",
      ),
      [
        params.useRegistryAnchor,
        params.metadataRequired,
        params.registrationStartTime,
        params.registrationEndTime,
        params.allocationStartTime,
        params.allocationEndTime,
        params.allowedTokens,
      ],
    );

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
      strategyType === StrategyTypeDonationVoting.Vault
        ? vaultBytecode
        : directBytecode;
    const abi =
      strategyType === StrategyTypeDonationVoting.Vault ? vaultAbi : directAbi;

    return {
      abi: abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  // Read only functions
  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getPermit2(): Promise<string> {
    this.checkStrategy();

    const permit2 = await this.contract.read.PERMIT2();

    return permit2;
  }

  public async getAllocationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.allocationEndTime();

    return endTime;
  }

  public async getAllocationStartTime(): Promise<number> {
    this.checkStrategy();

    const startTime = await this.contract.read.allocationStartTime();

    return startTime;
  }

  public async getIsAllowedToken(token: string): Promise<boolean> {
    this.checkStrategy();

    const allowed = await this.contract.read.allowedTokens(token);

    return allowed;
  }

  public async getClaim(recipient: string, token: string): Promise<number> {
    this.checkStrategy();

    const claims = await this.contract.read.claims([recipient, token]);

    return claims;
  }

  public async getDistributionMetadata(): Promise<Metadata> {
    this.checkStrategy();

    const metadata: Metadata = await this.contract.read.distributionMetadata();

    return metadata;
  }

  public async getDistributionStarted(): Promise<boolean> {
    this.checkStrategy();

    const started = await this.contract.read.distributionStarted();

    return started;
  }

  public async getAllo(): Promise<string> {
    this.checkStrategy();

    const allo = await this.contract.read.getAllo();

    return allo;
  }

  public async getPayouts(
    recipientIds: string[],
    data: string[],
  ): Promise<PayoutSummary[]> {
    this.checkStrategy();

    const payouts = await this.contract.read.getPayouts([recipientIds, data]);

    const payoutSummary: PayoutSummary[] = payouts.map((payout: any) => {
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

    const id = await this.contract.read.getPoolId();

    return id;
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

  public async getHasBeenDistributed(index: number): Promise<boolean> {
    this.checkStrategy();

    const distributed = await this.contract.read.hasBeenDistributed([index]);

    return distributed;
  }

  public async getIsDistributionSet(): Promise<boolean> {
    this.checkStrategy();

    const set = await this.contract.read.isDistributionSet();

    return set;
  }

  public async getIsPoolActive(): Promise<boolean> {
    this.checkStrategy();

    const active = await this.contract.read.isPoolActive();

    return active;
  }

  public async getIsValidAllocator(allocator: `0x${string}`): Promise<boolean> {
    this.checkStrategy();

    const valid = await this.contract.read.isValidAllocator([allocator]);

    return valid;
  }

  public async getMerkleRoot(): Promise<string> {
    this.checkStrategy();

    const root = await this.contract.read.merkleRoot();

    return root;
  }

  public async getMetadataRequired(): Promise<boolean> {
    this.checkStrategy();

    const required = await this.contract.read.metadataRequired();

    return required;
  }

  public async getRecipientToStatusIndexes(
    recipient: string,
  ): Promise<number[]> {
    this.checkStrategy();

    const indexes = await this.contract.read.recipientToStatusIndexes([
      recipient,
    ]);

    return indexes;
  }

  public async getRecipientsCounter(): Promise<number> {
    this.checkStrategy();

    const counter = await this.contract.read.recipientsCounter();

    return counter;
  }

  public async getRegistrationEndTime(): Promise<number> {
    this.checkStrategy();

    const endTime = await this.contract.read.registrationEndTime();

    return endTime;
  }

  public async getRegistrationStartTime(): Promise<number> {
    this.checkStrategy();

    const startTime = await this.contract.read.registrationStartTime();

    return startTime;
  }

  public async getStatusAtIndex(index: number): Promise<number> {
    this.checkStrategy();

    const bitMap = await this.contract.read.statusesBitMap([index]);

    return bitMap;
  }

  public async getTotalPayoutAmount(): Promise<number> {
    this.checkStrategy();

    const amount = await this.contract.read.totalPayoutAmount();
    return amount;
  }

  public async useRegistryAnchor(): Promise<boolean> {
    this.checkStrategy();

    const anchor = await this.contract.read.useRegistryAnchor();

    return anchor;
  }

  // Callable by allo client
  public getAllocationData(
    data: Permit2Data,
    ethAmount?: bigint,
  ): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("((address, uint256), uint256, uint256), bytes32"),
      [
        [
          [data.permit.permitted.token, data.permit.permitted.amount],
          data.permit.nonce,
          data.permit.deadline,
        ],
        data.signature,
      ],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "allocate",
      args: [this.poolId, encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: ethAmount ? ethAmount.toString() : "0",
    };
  }

  public getBatchAllocationData(
    data: Permit2Data[],
    ethAmount?: bigint,
  ): TransactionData {
    this.checkPoolId();

    const encodedParams: `0x${string}`[] = [];

    data.forEach((allocation) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("((address, uint256), uint256, uint256), bytes32"),
        [
          [
            [
              allocation.permit.permitted.token,
              allocation.permit.permitted.amount,
            ],
            allocation.permit.nonce,
            allocation.permit.deadline,
          ],
          allocation.signature,
        ],
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
      value: ethAmount ? ethAmount.toString() : "0",
    };
  }

  public getRegisterRecipientData(
    data: RegisterDataDonationVoting,
  ): TransactionData {
    this.checkPoolId();
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, address, (uint256, string)"),
      [
        data.registryAnchor,
        data.recipientAddress,
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

  public getBatchRegisterRecipientData(
    data: RegisterDataDonationVoting[],
  ): TransactionData {
    this.checkPoolId();
    const encodedParams: `0x${string}`[] = [];

    data.forEach((registerData) => {
      const encoded: `0x${string}` = encodeAbiParameters(
        parseAbiParameters("address, address, (uint256, string)"),
        [
          registerData.registryAnchor,
          registerData.recipientAddress,
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

  public distribute(data: Distribution[]): TransactionData {
    this.checkPoolId();

    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("(uint256, address, uint256, bytes32[])[]]"),
      [[data.map((d) => [d.index, d.recipientId, d.amount, d.merkleProof])]],
    );

    const encodedData = encodeFunctionData({
      abi: alloAbi,
      functionName: "distribute",
      args: [this.poolId, [], encoded],
    });

    return {
      to: this.allo.address(),
      data: encodedData,
      value: "0",
    };
  }

  // Write functions
  public claim(
    claims: { recipientId: string; token: string }[],
  ): TransactionData {
    this.checkStrategy();
    const data = encodeFunctionData({
      abi: vaultAbi,
      functionName: "claim",
      args: [claims],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public multicall(data: string[]): TransactionData {
    this.checkStrategy();
    const encodedData = encodeFunctionData({
      abi: vaultAbi,
      functionName: "multicall",
      args: [data],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  public reviewRecipients(
    statuses: { index: number; statusRow: number }[],
  ): TransactionData {
    this.checkStrategy();
    const data = encodeFunctionData({
      abi: vaultAbi,
      functionName: "reviewRecipients",
      args: [statuses],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public updateDistribution(
    merkleRoot: string,
    distributionMetadata: Metadata,
  ): TransactionData {
    this.checkStrategy();

    const data = encodeFunctionData({
      abi: vaultAbi,
      functionName: "updateDistribution",
      args: [merkleRoot, distributionMetadata],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public updatePoolTimestamps(
    registrationStartTime: number,
    registrationEndTime: number,
    allocationStartTime: number,
    allocationEndTime: number,
  ): TransactionData {
    this.checkStrategy();

    const data = encodeFunctionData({
      abi: vaultAbi,
      functionName: "updatePoolTimestamps",
      args: [
        registrationStartTime,
        registrationEndTime,
        allocationStartTime,
        allocationEndTime,
      ],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }

  public withdraw(amount: number): TransactionData {
    this.checkStrategy();

    const data = encodeFunctionData({
      abi: vaultAbi,
      functionName: "withdraw",
      args: [amount],
    });

    return {
      to: this.strategy!,
      data: data,
      value: "0",
    };
  }
}
