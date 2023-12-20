"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const Registry_1 = require("../../Registry/Registry");
const utils_1 = require("../utils/utils");
const address = "0xAEc621EC8D9dE4B524f4864791171045d6BBBe27";
exports.metadata = {
    protocol: BigInt(1),
    pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
};
jest.mock("viem", () => (Object.assign(Object.assign({}, jest.requireActual("viem")), { create: jest.fn(() => { }), getContract: jest.fn(() => {
        return {
            read: {
                ALLO_OWNER: jest.fn(() => (0, utils_1.makeAddress)("ALLO_OWNER")),
                DEFAULT_ADMIN_ROLE: jest.fn(() => (0, utils_1.makeBytes32)("DEFAULT_ADMIN_ROLE")),
                NATIVE: jest.fn(() => (0, utils_1.NATIVE)()),
                anchorToProfileId: jest.fn(([anchor]) => (0, utils_1.makeBytes32)(anchor)),
                getProfileByAnchor: jest.fn(([anchor]) => (0, utils_1.makeBytes32)(anchor)),
                getProfileById: jest.fn(([profileId]) => (0, utils_1.makeBytes32)(profileId)),
                getRoleAdmin: jest.fn(([role]) => (0, utils_1.makeBytes32)(role)),
                hasRole: jest.fn(() => true),
                isMemberOfProfile: jest.fn(() => true),
                isOwnerOfProfile: jest.fn(() => true),
                isOwnerOrMemberOfProfile: jest.fn(() => true),
                profileIdToPendingOwner: jest.fn(() => (0, utils_1.makeBytes32)("profileId")),
            },
        };
    }) })));
describe("Registry", () => {
    let registry;
    beforeEach(() => {
        registry = new Registry_1.Registry({ chain: 5 });
    });
    // Test cases for view functions
    describe("View Functions", () => {
        it("should get ALLO_OWNER", () => __awaiter(void 0, void 0, void 0, function* () {
            const allowOwner = yield registry.getAlloOwner();
            expect(allowOwner).toEqual((0, utils_1.makeAddress)("ALLO_OWNER"));
        }));
        it("should get DEFAULT_ADMIN_ROLE", () => __awaiter(void 0, void 0, void 0, function* () {
            const defaultAdminRole = yield registry.getDefaultAdminRole();
            expect(defaultAdminRole).toEqual((0, utils_1.makeBytes32)("DEFAULT_ADMIN_ROLE"));
        }));
        it("should get NATIVE", () => __awaiter(void 0, void 0, void 0, function* () {
            const native = yield registry.getNative();
            expect(native).toEqual((0, utils_1.NATIVE)());
        }));
        it("should get anchorToProfileId", () => __awaiter(void 0, void 0, void 0, function* () {
            const anchor = (0, utils_1.makeAddress)("anchor");
            const anchorToProfileId = yield registry.getAnchorToProfileId(anchor);
            expect(anchorToProfileId).toEqual((0, utils_1.makeBytes32)(anchor));
        }));
        it("should get profile by anchor", () => __awaiter(void 0, void 0, void 0, function* () {
            const anchor = (0, utils_1.makeAddress)("anchor");
            const profile = yield registry.getProfileByAnchor(anchor);
            expect(profile).toEqual((0, utils_1.makeBytes32)(anchor));
        }));
        it("should get profile by id", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const profile = yield registry.getProfileById(profileId);
            expect(profile).toEqual((0, utils_1.makeBytes32)(profileId));
        }));
        it("should get the admin role", () => __awaiter(void 0, void 0, void 0, function* () {
            const adminRole = yield registry.getRoleAdmin("role");
            expect(adminRole).toEqual((0, utils_1.makeBytes32)("role"));
        }));
        it("should check if an account has a role", () => __awaiter(void 0, void 0, void 0, function* () {
            const hasRole = yield registry.hasRole({
                role: "role",
                account: (0, utils_1.makeAddress)("account"),
            });
            expect(hasRole).toEqual(true);
        }));
        it("should check if an account is a owner of a profile", () => __awaiter(void 0, void 0, void 0, function* () {
            const isOwner = yield registry.isOwnerOfProfile({
                profileId: (0, utils_1.makeBytes32)("profileId"),
                account: (0, utils_1.makeAddress)("account"),
            });
            expect(isOwner).toEqual(true);
        }));
        it("should check if an account is a member or an owner of a profile", () => __awaiter(void 0, void 0, void 0, function* () {
            const isOwnerOrMember = yield registry.isOwnerOrMemberOfProfile({
                profileId: (0, utils_1.makeBytes32)("profileId"),
                account: (0, utils_1.makeAddress)("account"),
            });
            expect(isOwnerOrMember).toEqual(true);
        }));
        it("should get the pending owner for a profile id", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = yield registry.profileIdToPendingOwner((0, utils_1.makeBytes32)("pendingOwner"));
            expect(profileId).toEqual((0, utils_1.makeBytes32)("profileId"));
        }));
    });
    // Test cases for write functions
    describe("Write Functions", () => {
        // Test cases for write functions
        it("should create a profile", () => __awaiter(void 0, void 0, void 0, function* () {
            const nonce = 1;
            const name = "my secret profile";
            const metatdata = {
                protocol: BigInt(1),
                pointer: "bafybeia4khbew3r2mkflyn7nzlvfzcb3qpfeftz5ivpzfwn77ollj47gqi",
            };
            const owner = (0, utils_1.makeAddress)("owner");
            const members = [(0, utils_1.makeAddress)("member1"), (0, utils_1.makeAddress)("member2")];
            const tx = yield registry.createProfile({
                nonce,
                name,
                metadata: metatdata,
                owner,
                members,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should accept profile ownership", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const tx = registry.acceptProfileOwnership(profileId);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should accept profile ownership", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const tx = yield registry.acceptProfileOwnership(profileId);
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should add a member to a profile", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const members = [(0, utils_1.makeAddress)("member1"), (0, utils_1.makeAddress)("member2")];
            const tx = yield registry.addMembers({
                profileId,
                members,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should remove a member from a profile", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const members = [(0, utils_1.makeAddress)("member1"), (0, utils_1.makeAddress)("member2")];
            const tx = registry.removeMembers({
                profileId,
                members,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update profile metadata", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const tx = registry.updateProfileMetadata({
                profileId,
                metadata: exports.metadata,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update profile name", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const name = "my secret profile updated";
            const tx = registry.updateProfileName({
                profileId,
                name,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
        it("should update profile pending owner", () => __awaiter(void 0, void 0, void 0, function* () {
            const profileId = (0, utils_1.makeBytes32)("profileId");
            const pendingOwner = (0, utils_1.makeAddress)("pendingOwner");
            const tx = registry.updateProfilePendingOwner({
                profileId,
                account: pendingOwner,
            });
            expect(tx).toEqual({
                to: address,
                data: tx.data,
                value: "0",
            });
        }));
    });
});
