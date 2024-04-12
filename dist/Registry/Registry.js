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
exports.Registry = void 0;
const viem_1 = require("viem");
const Client_1 = require("../Client/Client");
const registry_config_1 = require("./registry.config");
const chains_config_1 = require("../chains.config");
class Registry {
    constructor({ chain, rpc }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.addr = (0, registry_config_1.getAddress)(usedChain);
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.contract = (0, viem_1.getContract)({
            address: this.addr,
            abi: registry_config_1.abi,
            publicClient: this.client,
        });
    }
    address() {
        return this.addr;
    }
    // Read only Functions
    getAlloOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            const owner = yield this.contract.read.ALLO_OWNER();
            return owner;
        });
    }
    getDefaultAdminRole() {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield this.contract.read.DEFAULT_ADMIN_ROLE();
            return admin;
        });
    }
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    getAnchorToProfileId(anchor) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileId = yield this.contract.read.anchorToProfileId([anchor]);
            return profileId;
        });
    }
    getProfileByAnchor(anchor) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.contract.read.getProfileByAnchor([anchor]);
            return profile;
        });
    }
    getProfileById(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.contract.read.getProfileById([profileId]);
            return profile;
        });
    }
    getRoleAdmin(role) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield this.contract.read.getRoleAdmin([role]);
            return admin;
        });
    }
    hasRole({ role, account }) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasRole = yield this.contract.read.hasRole([role, account]);
            return hasRole;
        });
    }
    isMemberOfProfile({ profileId, account, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isMember = yield this.contract.read.isMemberOfProfile([
                profileId,
                account,
            ]);
            return isMember;
        });
    }
    isOwnerOfProfile({ profileId, account, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isOwner = yield this.contract.read.isOwnerOfProfile([
                profileId,
                account,
            ]);
            return isOwner;
        });
    }
    isOwnerOrMemberOfProfile({ profileId, account, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isOwnerOrMember = yield this.contract.read.isOwnerOrMemberOfProfile([
                profileId,
                account,
            ]);
            return isOwnerOrMember;
        });
    }
    profileIdToPendingOwner(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const pendingOwner = yield this.contract.read.profileIdToPendingOwner([
                profileId,
            ]);
            return pendingOwner;
        });
    }
    profilesById(profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.contract.read.profilesById([profileId]);
            return profile;
        });
    }
    // Write functions
    createProfile({ nonce, name, metadata, owner, members, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "createProfile",
            args: [nonce, name, metadata, owner, members],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    acceptProfileOwnership(profileId) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "acceptProfileOwnership",
            args: [profileId],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    addMembers({ profileId, members }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "addMembers",
            args: [profileId, members],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    removeMembers({ profileId, members }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "removeMembers",
            args: [profileId, members],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateProfileMetadata({ profileId, metadata, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "updateProfileMetadata",
            args: [profileId, metadata],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateProfileName({ profileId, name, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
            functionName: "updateProfileName",
            args: [profileId, name],
        });
        return {
            to: this.addr,
            data: data,
            value: "0",
        };
    }
    updateProfilePendingOwner({ profileId, account, }) {
        const data = (0, viem_1.encodeFunctionData)({
            abi: registry_config_1.abi,
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
exports.Registry = Registry;
