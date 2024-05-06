import {
  Chain,
  PublicClient,
  Transport,
  encodeFunctionData,
  extractChain,
  getContract,
} from "viem";
import { create } from "../Client/Client";
import { ConstructorArgs, TransactionData } from "../Common/types";
import { abi, getAddress } from "./registry.config";
import {
  CreateProfileArgs,
  HasRoleArgs,
  MemberArgs,
  Profile,
  ProfileAndAddressArgs,
  ProfileMetadataArgs,
  ProfileNameArgs,
} from "./types";
import { supportedChains } from "../chains.config";

export class Registry {
  private client: PublicClient<Transport, Chain>;
  private contract: any;
  private addr: `0x${string}`;

  constructor({ chain, rpc }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.addr = getAddress(usedChain);

    this.client = create(usedChain, rpc);

    this.contract = getContract({
      address: this.addr,
      abi: abi,
      client: {
        public: this.client,
      }
    });
  }

  public address(): `0x${string}` {
    return this.addr;
  }

  // Read only Functions

  public async getAlloOwner(): Promise<`0x${string}`> {
    const owner = await this.contract.read.ALLO_OWNER();
    return owner;
  }

  public async getDefaultAdminRole(): Promise<`0x${string}`> {
    const admin = await this.contract.read.DEFAULT_ADMIN_ROLE();
    return admin;
  }

  public async getNative(): Promise<`0x${string}`> {
    const native = await this.contract.read.NATIVE();
    return native;
  }

  public async getAnchorToProfileId(
    anchor: `0x${string}`,
  ): Promise<`0x${string}`> {
    const profileId = await this.contract.read.anchorToProfileId([anchor]);
    return profileId;
  }

  public async getProfileByAnchor(anchor: `0x${string}`): Promise<Profile> {
    const profile = await this.contract.read.getProfileByAnchor([anchor]);
    return profile;
  }

  public async getProfileById(profileId: `0x${string}`): Promise<Profile> {
    const profile = await this.contract.read.getProfileById([profileId]);
    return profile;
  }

  public async getRoleAdmin(role: `0x${string}`): Promise<`0x${string}`> {
    const admin = await this.contract.read.getRoleAdmin([role]);
    return admin;
  }

  public async hasRole({ role, account }: HasRoleArgs): Promise<boolean> {
    const hasRole = await this.contract.read.hasRole([role, account]);
    return hasRole;
  }

  public async isMemberOfProfile({
    profileId,
    account,
  }: ProfileAndAddressArgs): Promise<boolean> {
    const isMember = await this.contract.read.isMemberOfProfile([
      profileId,
      account,
    ]);
    return isMember;
  }

  public async isOwnerOfProfile({
    profileId,
    account,
  }: ProfileAndAddressArgs): Promise<boolean> {
    const isOwner = await this.contract.read.isOwnerOfProfile([
      profileId,
      account,
    ]);
    return isOwner;
  }

  public async isOwnerOrMemberOfProfile({
    profileId,
    account,
  }: ProfileAndAddressArgs): Promise<boolean> {
    const isOwnerOrMember = await this.contract.read.isOwnerOrMemberOfProfile([
      profileId,
      account,
    ]);
    return isOwnerOrMember;
  }

  public async profileIdToPendingOwner(
    profileId: `0x${string}`,
  ): Promise<`0x${string}`> {
    const pendingOwner = await this.contract.read.profileIdToPendingOwner([
      profileId,
    ]);
    return pendingOwner;
  }

  public async profilesById(profileId: `0x${string}`): Promise<any> {
    const profile = await this.contract.read.profilesById([profileId]);
    return profile;
  }

  // Write functions

  public createProfile({
    nonce,
    name,
    metadata,
    owner,
    members,
  }: CreateProfileArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "createProfile",
      args: [nonce, name, metadata, owner, members],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public acceptProfileOwnership(profileId: `0x${string}`): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "acceptProfileOwnership",
      args: [profileId],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public addMembers({ profileId, members }: MemberArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "addMembers",
      args: [profileId, members],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public removeMembers({ profileId, members }: MemberArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "removeMembers",
      args: [profileId, members],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateProfileMetadata({
    profileId,
    metadata,
  }: ProfileMetadataArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateProfileMetadata",
      args: [profileId, metadata],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateProfileName({
    profileId,
    name,
  }: ProfileNameArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateProfileName",
      args: [profileId, name],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }

  public updateProfilePendingOwner({
    profileId,
    account,
  }: ProfileAndAddressArgs): TransactionData {
    const data = encodeFunctionData({
      abi: abi,
      functionName: "updateProfilePendingOwner",
      args: [profileId, account],
    });

    return {
      to: this.addr,
      data: data,
      value: "0",
    };
  }
}
