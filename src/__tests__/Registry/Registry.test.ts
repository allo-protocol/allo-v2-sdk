import { chains } from "../../Client/chains";
import { Registry } from "../../Registry/Registry";
import { NATIVE, makeAddress, makeBytes32 } from "../utils/utils";
import { Metadata } from "../../Common/types";
import { Address, encodeFunctionData } from "viem";
import { abi } from "../../Registry/registry.config";
import { FunctionDataParams } from "../../Registry/types";

const address: Address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        ALLO_OWNER: jest.fn(() => makeAddress("ALLO_OWNER")),
        DEFAULT_ADMIN_ROLE: jest.fn(() => makeBytes32("DEFAULT_ADMIN_ROLE")),
        NATIVE: jest.fn(() => NATIVE()),
        anchorToProfileId: jest.fn(([anchor]: string[]) => makeBytes32(anchor)),
        getProfileByAnchor: jest.fn(([anchor]: string) => makeBytes32(anchor)),
        getProfileById: jest.fn(([profileId]: string) => makeBytes32(profileId)),
        getRoleAdmin: jest.fn(([role]: string) => makeBytes32(role)),
        hasRole: jest.fn(() => true),
        isMemberOfProfile: jest.fn(() => true),
        isOwnerOfProfile: jest.fn(() => true),
        isOwnerOrMemberOfProfile: jest.fn(() => true),
        getProfileIdToPendingOwner: jest.fn(() => makeBytes32("profileId")),
        getProfilesForId: jest.fn(() => [makeBytes32("profileId")]),
      },
      write: {
        createProfile: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        acceptProfileOwnership: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        addMembers: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        removeMembers: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        updateProfileMetadata: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        updateProfileName: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
        updateProfilePendingOwner: jest.fn(() => ({
          to: address,
          data: "data",
          value: "0",
        })),
      },
    };
  }),
}));

describe("Registry", () => {
  let registry: Registry;

  beforeEach(() => {
    registry = new Registry({ chain: chains.goerli });
  });

  describe("View Functions", () => {
    it("should get ALLO_OWNER", async () => {
      const allowOwner = await registry.getAlloOwner();

      expect(allowOwner).toEqual(makeAddress("ALLO_OWNER"));
    });

    it("should get DEFAULT_ADMIN_ROLE", async () => {
      const defaultAdminRole = await registry.getDefaultAdminRole();

      expect(defaultAdminRole).toEqual(makeBytes32("DEFAULT_ADMIN_ROLE"));
    });

    it("should get NATIVE", async () => {
      const native = await registry.getNative();

      expect(native).toEqual(NATIVE());
    });

    it("should get anchorToProfileId", async () => {
      const anchor = makeAddress("anchor");
      const anchorToProfileId = await registry.getAnchorToProfileId(anchor);

      expect(anchorToProfileId).toEqual(makeBytes32(anchor));
    });

    it("should get profile by anchor", async () => {
      const anchor = makeAddress("anchor");
      const profile = await registry.getProfileByAnchor(anchor);

      expect(profile).toEqual(makeBytes32(anchor));
    });

    it("should get profile by id", async () => {
      const profileId = makeBytes32("profileId");
      const profile = await registry.getProfileById(profileId);

      expect(profile).toEqual(makeBytes32(profileId));
    });

    it("should get the admin role", async () => {
      const adminRole = await registry.getRoleAdmin("role");

      expect(adminRole).toEqual(makeBytes32("role"));
    });

    it("should check if an account has a role", async () => {
      const hasRole = await registry.hasRole({
        role: "role",
        account: makeAddress("account"),
      });

      expect(hasRole).toEqual(true);
    });

    it("should check if an account is a owner of a profile", async () => {
      const isOwner = await registry.isOwnerOfProfile({
        profileId: makeBytes32("profileId"),
        account: makeAddress("account"),
      });

      expect(isOwner).toEqual(true);
    });

    it("should check if an account is a member or an owner of a profile", async () => {
      const isOwnerOrMember = await registry.isOwnerOrMemberOfProfile({
        profileId: makeBytes32("profileId"),
        account: makeAddress("account"),
      });

      expect(isOwnerOrMember).toEqual(true);
    });

    it("should get the pending owner for a profile id", async() => {
      // const profileId = await registry.getProfileIdToPendingOwner(
      //   makeBytes32("pendingOwner")
      // );

      // expect(profileId).toEqual(makeAddress("chad"));
    })

    it("should get the prifiles for an id", async() => {
      // const profileId = await registry.getProfilesById(makeBytes32("profileId"));
      

      // expect(profileId).toEqual([makeBytes32("profileId")]);
    });
  });

  // describe("Write Functions", () => {
  //   // Test cases for write functions
  //   it("should create a profile", async () => {
  //     const nonce = 1;
  //     const name = "my secret profile";
  //     const metatdata: Metadata = {
  //       protocol: 1,
  //       pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
  //     };
  //     const owner = makeAddress("owner");
  //     const members = [makeAddress("member1"), makeAddress("member2")];

  //     const receipt = await registry.createProfile({
  //       nonce,
  //       name,
  //       metadata: metatdata,
  //       owner,
  //       members
  //     });

  //     const data = await getFunctionData({ functionName: "createProfile", args: [nonce, name, metatdata, owner, members]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should accept profile ownership", async () => {
  //     const profileId = makeBytes32("profileId");

  //     const receipt = await registry.acceptProfileOwnership(profileId);

  //     console.log(receipt);
  //   });

  //   it("should accept profile ownership", async () => {
  //     const profileId = makeBytes32("profileId");

  //     const receipt = await registry.acceptProfileOwnership(profileId);

  //     const data = await getFunctionData({ functionName: "acceptProfileOwnership", args: [profileId]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should add a member to a profile", async () => {
  //     const profileId = makeBytes32("profileId");
  //     const members = [makeAddress("member1"), makeAddress("member2")];

  //     const receipt = await registry.addMembers({
  //       profileId,
  //       members
  //     });

  //     const data = await getFunctionData({ functionName: "addMembers", args: [profileId, members]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should remove a member from a profile", async () => {
  //     const profileId = makeBytes32("profileId");
  //     const members = [makeAddress("member1"), makeAddress("member2")];

  //     const receipt = await registry.removeMembers({
  //       profileId,
  //       members
  //     });

  //     const data = await getFunctionData({ functionName: "removeMembers", args: [profileId, members]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should update profile metadata", async () => {
  //     const profileId = makeBytes32("profileId");
  //     const metadata: Metadata = {
  //       protocol: 1,
  //       pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
  //     };

  //     const receipt = await registry.updateProfileMetadata({
  //       profileId,
  //       metadata
  //     });

  //     const data = await getFunctionData({ functionName: "updateProfileMetadata", args: [profileId, metadata]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should update profile name", async () => {
  //     const profileId = makeBytes32("profileId");
  //     const name = "my secret profile updated";

  //     const receipt = await registry.updateProfileName({
  //       profileId,
  //       name
  //     });

  //     const data = await getFunctionData({ functionName: "updateProfileName", args: [profileId, name]});
      
  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });

  //   it("should update profile pending owner", async () => {
  //     const profileId = makeBytes32("profileId");
  //     const pendingOwner = makeAddress("pendingOwner");

  //     const receipt = registry.updateProfilePendingOwner({
  //       profileId,
  //       account: pendingOwner
  //     });

  //     const data = await getFunctionData({ functionName: "updateProfilePendingOwner", args: [profileId, pendingOwner]});

  //     expect(receipt).toEqual({
  //       to: address,
  //       data: data,
  //       value: "0",
  //     });
  //   });
  // });

  // Helper function to get function data
  async function getFunctionData(params?: FunctionDataParams) {
    const data : `0x${string}` = encodeFunctionData({
      abi: abi,
      functionName: params?.functionName,
      args: params?.args,
    });

    return data;
  }
});
