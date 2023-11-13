# Registry Table of Contents

- [Table of Contents](#table-of-contents)
- [Registry](#registry)
  - [Initialization](#initialization)
    - [Creating a Registry Instance](#creating-a-registry-instance)
  - [Read Functions](#view-functions)
    - [Get Allo Owner](#get-allo-owner)
    - [Get Default Admin Role](#get-default-admin-role)
    - [Get Native](#get-native)
    - [Get Anchor To Profile Id](#get-anchor-to-profile-id)
    - [Get Profile By Anchor](#get-profile-by-anchor)
    - [Get Profile By ID](#get-profile-by-id)
    - [Get Role Admin](#get-role-admin)
    - [Check Role Membership](#check-role-membership)
    - [Check Membership in Profile](#check-membership-in-profile)
    - [Check Ownership of Profile](#check-ownership-of-profile)
    - [Check Ownership or Membership in Profile](#check-ownership-or-membership-in-profile)
    - [Get Profile ID to Pending Owner](#get-profile-id-to-pending-owner)
    - [Get Profile Details by ID](#get-profile-details-by-id)
  - [Write Functions](#write-functions)
    - [Creating a Profile](#creating-a-profile)
    - [Accepting Profile Ownership](#accepting-profile-ownership)
    - [Adding Members to a Profile](#adding-members-to-a-profile)
    - [Removing Members from a Profile](#removing-members-from-a-profile)
    - [Updating Profile Metadata](#updating-profile-metadata)
    - [Updating Profile Name](#updating-profile-name)
    - [Updating Profile Pending Owner](#updating-profile-pending-owner)

---

# Registry

The Registry class provides a set of functions for interacting with the Registry contract's view and write functions. This README provides examples and explanations for using these functions.

## Initialization

Before using the functions provided by the Registry module, you need to create an instance of the Registry class. Here's how you can create a Registry instance:

### Creating a Registry Instance

To create a new Registry instance, you need to provide the chain information. In this example, we're using the 5 chain information.

```javascript
import { chains } from "../Client/chains";
import { Registry } from "../Registry/Registry";

const registry = new Registry({ chain: 5 });
```

This registry instance can then be used to call various read and transactional functions provided by the Registry module. Refer to the sections above for detailed examples on how to use these functions. Remember to replace placeholder values with actual values according to your requirements.

---

## Read Functions

### Get Allo Owner

To retrieve the Allo Owner:

```javascript
const alloOwner: string = await registry.getAlloOwner();
console.log(alloOwner);
```

### Get Default Admin Role

To get the Default Admin Role:

```javascript
const defaultAdminRole: string = await registry.getDefaultAdminRole();
console.log(defaultAdminRole);
```

### Get Native

To obtain the Native:

```javascript
const native: string = await registry.getNative();
console.log(native);
```

### Get Anchor To Profile Id

To retrieve the Profile ID associated with an Anchor:

```javascript
const anchor = "your_anchor_value_here";
const profileId: string = await registry.getAnchorToProfileId(anchor);
console.log(profileId);
```

### Get Profile By Anchor

To fetch a Profile using an Anchor:

```javascript
import { Profile } from "../Registry/types";

const anchor = "your_anchor_value_here";
const profile: Profile = await registry.getProfileByAnchor(anchor);
console.log(profile);
```

### Get Profile By ID

To retrieve a Profile using its ID:

```javascript
import { Profile } from "../Registry/types";

const profileId = "your_profile_id_here";
const profile: Profile = await registry.getProfileById(profileId);
console.log(profile);
```

### Get Role Admin

To get the admin of a specified role:

```javascript
const role = "your_role_here";
const admin: string = await registry.getRoleAdmin(role);
console.log(admin);
```

### Check Role Membership

To check if an account has a specific role:

```javascript
import { HasRoleArgs } from "../Registry/types";

const hasRoleArgs: HasRoleArgs = {
  role: "your_role_here",
  account: "account_address_here",
};
const hasRole: boolean = await registry.hasRole(hasRoleArgs);
console.log(hasRole);
```

### Check Membership in Profile

To check if an account is a member of a profile:

```javascript
import { ProfileAndAddressArgs } from "../Registry/types";

const profileAndAddressArgs: ProfileAndAddressArgs = {
  profileId: "your_profile_id_here",
  account: "account_address_here",
};
const isMember: boolean = await registry.isMemberOfProfile(
  profileAndAddressArgs,
);
console.log(isMember);
```

### Check Ownership of Profile

To check if an account is the owner of a profile:

```javascript
import { ProfileAndAddressArgs } from "../Registry/types";

const profileAndAddressArgs: ProfileAndAddressArgs = {
  profileId: "your_profile_id_here",
  account: "account_address_here",
};
const isOwner: boolean = await registry.isOwnerOfProfile(profileAndAddressArgs);
console.log(isOwner);
```

### Check Ownership or Membership in Profile

To check if an account is either the owner or a member of a profile:

```javascript
import { ProfileAndAddressArgs } from "../Registry/types";

const profileAndAddressArgs: ProfileAndAddressArgs = {
  profileId: "your_profile_id_here",
  account: "account_address_here",
};
const isOwnerOrMember: boolean = await registry.isOwnerOrMemberOfProfile(
  profileAndAddressArgs,
);
console.log(isOwnerOrMember);
```

### Get Profile ID to Pending Owner

To get the pending owner of a profile:

```javascript
const profileId = "your_profile_id_here";
const pendingOwner: string = await registry.getProfileIdToPendingOwner(
  profileId,
);
console.log(pendingOwner);
```

### Get Profile Details by ID

To get profile details by ID:

```javascript
import { Profile } from "../Registry/types";

const profileId = "your_profile_id_here";
const profile: Profile = await registry.getProfilesById(profileId);
console.log(profile);
```

---

## Write Functions

### Creating a Profile

To create a new profile using the `createProfile` function:

```javascript
import { CreateProfileArgs } from "../Registry/types";
import { TransactionData } from "../types";

const createProfileArgs: CreateProfileArgs = {
  nonce: 3,
  name: "Module Test 1",
  metadata: {
    protocol: 1,
    pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
  },
  owner: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
  members: [
    "0x5cdb35fADB8262A3f88863254c870c2e6A848CcA",
    "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
  ],
};

const txData: TransactionData = registry.createProfile(createProfileArgs);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Accepting Profile Ownership

To accept ownership of a profile using the `acceptProfileOwnership` function:

```javascript
const profileId = "your_profile_id_here";

const txData: TransactionData = registry.acceptProfileOwnership(profileId);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Adding Members to a Profile

To add members to a profile using the `addMembers` function:

```javascript
import { MemberArgs } from "../Registry/types";

const memberArgs: MemberArgs = {
  profileId: "your_profile_id_here",
  members: [
    "0xMemberAddress1",
    "0xMemberAddress2",
    // Add more member addresses if needed
  ],
};

const txData: TransactionData = registry.addMembers(memberArgs);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Removing Members from a Profile

To remove members from a profile using the `removeMembers` function:

```javascript
import { MemberArgs } from "../Registry/types";

const memberArgs: MemberArgs = {
  profileId: "your_profile_id_here",
  members: [
    "0xMemberAddress1",
    "0xMemberAddress2",
    // Add more member addresses if needed
  ],
};

const txData: TransactionData = registry.removeMembers(memberArgs);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Updating Profile Metadata

To update profile metadata using the `updateProfileMetadata` function:

```javascript
import { ProfileMetadataArgs } from "../Registry/types";

const profileMetadataArgs: ProfileMetadataArgs = {
  profileId: "your_profile_id_here",
  metadata: {
    protocol: 2,
    pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
  },
};

const txData: TransactionData =
  registry.updateProfileMetadata(profileMetadataArgs);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Updating Profile Name

To update profile name using the `updateProfileName` function:

```javascript
import { ProfileNameArgs } from "../Registry/types";

const profileNameArgs: ProfileNameArgs = {
  profileId: "your_profile_id_here",
  name: "New Profile Name",
};

const txData: TransactionData = registry.updateProfileName(profileNameArgs);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```

### Updating Profile Pending Owner

To update the pending owner of a profile using the `updateProfilePendingOwner` function:

```javascript
import { ProfileAndAddressArgs } from "../Registry/types";

const profilePendingOwnerArgs: ProfileAndAddressArgs = {
  profileId: "your_profile_id_here",
  account: "new_pending_owner_address_here",
};

const txData: TransactionData = registry.updateProfilePendingOwner(
  profilePendingOwnerArgs,
);

// Client could be from ethers, viem, etc..
const hash = await client.sendTransaction({
  data: txData.data,
  account,
  to: txData.to,
  value: BigInt(txData.value),
});

console.log(`Transaction hash: ${hash}`);
```
