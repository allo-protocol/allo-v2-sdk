import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  getContract,
} from "viem";
import { create } from "../../Client/Client";
import { abi } from "./donationVoting.config";
import { Allo } from "../../Allo/Allo";
import { ConstructorArgs } from "../../Common/types";
export class DonationVotingMerkleDistributionStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;
  private strategy: `0x${string}`;

  private allo: Allo;

  constructor({ chain, rpc, address }: ConstructorArgs) {
    this.client = create(chain, rpc);

    if(!address) throw new Error(
      "DonationVotingMerkleDistributionStrategy: No strategy address provided",
    );
    this.strategy = address;

    this.allo = new Allo({ chain, rpc }); // to call allocate

    this.contract = getContract({
      address: address,
      abi: abi,
      publicClient: this.client,
    });

    // Read only functions


  }
}

  // read only
  //   "function NATIVE() view returns (address)",
  //   "function PERMIT2() view returns (address)",
  //   "function allocationEndTime() view returns (uint64)",
  //   "function allocationStartTime() view returns (uint64)",
  //   "function allowedTokens(address) view returns (bool)",
  //   "function claims(address, address) view returns (uint256)",
  //   "function distributionMetadata() view returns (uint256 protocol, string pointer)",
  //   "function distributionStarted() view returns (bool)",
  //   "function getAllo() view returns (address)",
  //   "function getPayouts(address[] _recipientIds, bytes[] _data) view returns (tuple(address recipientAddress, uint256 amount)[])",
  //   "function getPoolAmount() view returns (uint256)",
  //   "function getPoolId() view returns (uint256)",
  //   "function getRecipient(address _recipientId) view returns (tuple(bool useRegistryAnchor, address recipientAddress, tuple(uint256 protocol, string pointer) metadata) recipient)",
  //   "function getRecipientStatus(address _recipientId) view returns (uint8)",
  //   "function getStrategyId() view returns (bytes32)",
  //   "function hasBeenDistributed(uint256 _index) view returns (bool)",
  //   "function isDistributionSet() view returns (bool)",
  //   "function isPoolActive() view returns (bool)",
  //   "function isValidAllocator(address _allocator) view returns (bool)",
  //   "function merkleRoot() view returns (bytes32)",
  //   "function metadataRequired() view returns (bool)",
  //   "function recipientToStatusIndexes(address) view returns (uint256)",
  //   "function recipientsCounter() view returns (uint256)",
  //   "function registrationEndTime() view returns (uint64)",
  //   "function registrationStartTime() view returns (uint64)",
  //   "function statusesBitMap(uint256) view returns (uint256)",
  //   "function totalPayoutAmount() view returns (uint256)",
  //   "function useRegistryAnchor() view returns (bool)",


  // callable by allo client
  //   "function allocate(bytes _data, address _sender) payable",
  //   "function registerRecipient(bytes _data, address _sender) payable returns (address recipientId)",
  //   "function batchRegisterRecipient(uint256[] memory _poolIds, bytes[] memory _data) returns (address[] memory recipientIds)""
  //   "function fundPool(uint256 _poolId, uint256 _amount) external payable"
  //   "function distribute(address[] _recipientIds, bytes _data, address _sender)",


  // write functions

  //   "function claim(tuple(address recipientId, address token)[] _claims)",
  //   "function multicall(bytes[] data) returns (bytes[] results)",


  //   "function reviewRecipients(tuple(uint256 index, uint256 statusRow)[] statuses)",

  //   "function updateDistribution(bytes32 _merkleRoot, tuple(uint256 protocol, string pointer) _distributionMetadata)",
  //   "function updatePoolTimestamps(uint64 _registrationStartTime, uint64 _registrationEndTime, uint64 _allocationStartTime, uint64 _allocationEndTime)",
  //   "function withdraw(uint256 _amount)";