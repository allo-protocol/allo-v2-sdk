import { Metadata } from "../Common/types";

export type Profile = {
  id: string;
  nonce: number;
  name: string;
  metadata: Metadata;
  owner: string;
  anchor: string;
};

// Function Args

export type CreateProfileArgs = {
  nonce: number;
  name: string;
  metadata: Metadata;
  owner: string;
  members: string[];
};


export type HasRoleArgs = {
  role: string;
  account: string;
}

export type ProfileAndAddressArgs = {
  profileId: string;
  account: string;
}

export type MemberArgs = {
  profileId: string;
  members: string[];
}

export type ProfileMetadataArgs = {
  profileId: string;
  metadata: Metadata;
}

export type ProfileNameArgs = {
  profileId: string;
  name: string;
}
