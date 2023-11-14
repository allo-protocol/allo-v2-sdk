import { ConstructorArgs, TransactionData } from "../Common/types";
import { CreateProfileArgs, HasRoleArgs, MemberArgs, Profile, ProfileAndAddressArgs, ProfileMetadataArgs, ProfileNameArgs } from "./types";
export declare class Registry {
    private client;
    private contract;
    constructor({ chain, rpc }: ConstructorArgs);
    getAlloOwner(): Promise<string>;
    getDefaultAdminRole(): Promise<string>;
    getNative(): Promise<string>;
    getAnchorToProfileId(anchor: string): Promise<string>;
    getProfileByAnchor(anchor: string): Promise<Profile>;
    getProfileById(profileId: string): Promise<Profile>;
    getRoleAdmin(role: string): Promise<string>;
    hasRole({ role, account }: HasRoleArgs): Promise<boolean>;
    isMemberOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    isOwnerOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    isOwnerOrMemberOfProfile({ profileId, account, }: ProfileAndAddressArgs): Promise<boolean>;
    profileIdToPendingOwner(profileId: string): Promise<string>;
    profilesById(profileId: string): Promise<any>;
    createProfile({ nonce, name, metadata, owner, members, }: CreateProfileArgs): TransactionData;
    acceptProfileOwnership(profileId: string): TransactionData;
    addMembers({ profileId, members }: MemberArgs): TransactionData;
    removeMembers({ profileId, members }: MemberArgs): TransactionData;
    updateProfileMetadata({ profileId, metadata, }: ProfileMetadataArgs): TransactionData;
    updateProfileName({ profileId, name, }: ProfileNameArgs): TransactionData;
    updateProfilePendingOwner({ profileId, account, }: ProfileAndAddressArgs): TransactionData;
}
