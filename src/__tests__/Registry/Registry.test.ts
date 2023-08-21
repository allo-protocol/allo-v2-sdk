import { chains } from "../../Client/chains";
import { Registry } from "../../Registry/Registry";
import { NATIVE, makeAddress, makeBytes32 } from "../utils/utils";

jest.mock("viem", () => ({
  ...jest.requireActual("viem"),
  create: jest.fn(() => {}),
  getContract: jest.fn(() => {
    return {
      read: {
        ALLO_OWNER: jest.fn(() => makeAddress("ALLO_OWNER")),
        DEFAULT_ADMIN_ROLE: jest.fn(() => makeBytes32("DEFAULT_ADMIN_ROLE")),
        NATIVE: jest.fn(() => NATIVE()),
        anchorToProfileId: jest.fn(([anchor]: string[]) => makeBytes32(anchor[0])),
        getProfileByAnchor: jest.fn((anchor: string) => makeBytes32(anchor)),
        getProfileById: jest.fn((profileId: string) => makeBytes32(profileId)),
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
      console.log(anchor, makeBytes32(anchor));
      const shhit = makeBytes32(anchor);
      const anchorToProfileId = await registry.getAnchorToProfileId(anchor);
      expect(anchorToProfileId).toEqual(makeBytes32(anchor));
    });

    // ... More view function test cases
  });

  describe("Write Functions", () => {
    // Test cases for write functions
    it("should create a profile", async () => {
      // Implement your test
    });

    it("should accept profile ownership", async () => {
      // Implement your test
    });

    // ... More write function test cases
  });
});
