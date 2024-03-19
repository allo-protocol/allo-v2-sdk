import {
  PublicClient,
  Transport,
  Chain,
  extractChain,
  getContract,
  encodeAbiParameters,
  parseAbiParameters,
} from "viem";
import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams } from "../../types";
import { supportedChains } from "../../chains.config";
import { create } from "../../Client/Client";
import { InitializeParamsSimple } from "./types";
import {
  abi as qvSimpleStrategyAbi,
  bytecode as qvSimpleStrategyBytecode,
} from "./qvSimple.config";

export class QVSimpleStrategy {
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

    this.allo = new Allo({ chain, rpc });

    if (address) {
      this.contract = getContract({
        address: address,
        abi: [],
        publicClient: this.client,
      });
      this.strategy = address;
    }

    this.poolId = poolId || BigInt(-1);
  }

  public getInitializeData(params: InitializeParamsSimple): `0x${string}` {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters(
        "uint256, (bool, bool, uint256, uint64, uint64, uint64, uint64)"
      ),
      [
        params.maxVoiceCreditsPerAllocator,
        [
          params.params.registryGating,
          params.params.metadataRequired,
          params.params.reviewThreshold,
          params.params.registrationStartTime,
          params.params.registrationEndTime,
          params.params.allocationStartTime,
          params.params.allocationEndTime,
        ],
      ]
    );

    return encoded;
  }

  public getDeployParams(): DeployParams {
    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), "QVSimpleStrategy1.0"]
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi: qvSimpleStrategyAbi,
      bytecode: (qvSimpleStrategyBytecode +
        constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  public async setPoolId(poolId: bigint): Promise<void> {
    this.poolId = poolId;
    const strategyAddress = await this.allo.getStrategy(poolId);

    this.setContract(strategyAddress as `0x${string}`);
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi: qvSimpleStrategyAbi,
      publicClient: this.client,
    });

    this.strategy = address;
  }

  private checkPoolId(): void {
    if (this.poolId === BigInt(-1))
      throw new Error(
        "QVSimpleStrategy: No poolId provided. Please call `setPoolId` first."
      );
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "QVSimpleStrategy: No strategy address provided. Please call `setContract` first."
      );
  }

  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();

    return native;
  }

  public async getMetadataRequired(): Promise<boolean> {
    this.checkStrategy();

    const required: boolean = await this.contract.read.metadataRequired();

    return required;
  }
}
