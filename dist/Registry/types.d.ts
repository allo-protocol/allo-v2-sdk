import { Metadata } from "../Common/types";
export type Profile = {
    id: `0x${string}`;
    nonce: bigint;
    name: string;
    metadata: Metadata;
    owner: `0x${string}`;
    anchor: `0x${string}`;
};
export type CreateProfileArgs = {
    nonce: bigint;
    name: string;
    metadata: Metadata;
    owner: `0x${string}`;
    members: `0x${string}`[];
};
export type HasRoleArgs = {
    role: `0x${string}`;
    account: `0x${string}`;
};
export type ProfileAndAddressArgs = {
    profileId: `0x${string}`;
    account: `0x${string}`;
};
export type MemberArgs = {
    profileId: `0x${string}`;
    members: `0x${string}`[];
};
export type ProfileMetadataArgs = {
    profileId: `0x${string}`;
    metadata: Metadata;
};
export type ProfileNameArgs = {
    profileId: `0x${string}`;
    name: string;
};
