export type InitializeParamsSuperFluid = {
    useRegistryAnchor: boolean;
    registrationStartTime: bigint;
    registrationEndTime: bigint;
    allocationStartTime: bigint;
    allocationEndTime: bigint;
    metadataRequired: boolean;
    passportDecoder: `0x${string}`;
    superfluidHost: `0x${string}`;
    allocationSuperToken: `0x${string}`;
    minPassportScore: bigint;
    initialSuperAppBalance: bigint;
};
