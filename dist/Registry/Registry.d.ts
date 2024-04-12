import { ConstructorArgs, TransactionData } from "../Common/types";
import { CreateProfileArgs, HasRoleArgs, MemberArgs, Profile, ProfileAndAddressArgs, ProfileMetadataArgs, ProfileNameArgs } from "./types";
export declare class Registry {
    private client;
    private contract;
    private addr;
    constructor({ chain, rpc }: ConstructorArgs);
    address(): `0x${string}`;
    getAlloOwner(): Promise<`0x${string}`>;
    getDefaultAdminRole(): Promise<`0x${string}`>;
    getNative(): Promise<`0x${string}`>;
    getAnchorToProfileId(anchor: `0x${string}`): Promise<`0x${string}`>;
    getProfileByAnchor(anchor: `0x${string}`): Promise<Profile>;
    getProfileById(profileId: `0x${string}`): Promise<Profile>;
    getRoleAdmin(role: `0x${string}`): Promise<`0x${string}`>;
    hasRole({ role, account }: HasRoleArgs): Promise<boolean>;
    isMemberOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    isOwnerOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    isOwnerOrMemberOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    profileIdToPendingOwner(profileId: `0x${string}`): Promise<`0x${string}`>;
    profilesById(profileId: `0x${string}`): Promise<any>;
    createProfile({ nonce, name, metadata, owner, members, }: CreateProfileArgs): TransactionData;
    acceptProfileOwnership(profileId: `0x${string}`): TransactionData;
    addMembers({ profileId, members }: MemberArgs): TransactionData;
    removeMembers({ profileId, members }: MemberArgs): TransactionData;
    updateProfileMetadata({ profileId, metadata, }: ProfileMetadataArgs): TransactionData;
    updateProfileName({ profileId, name, }: ProfileNameArgs): TransactionData;
    updateProfilePendingOwner({ profileId, account, }: ProfileAndAddressArgs): TransactionData;
}
