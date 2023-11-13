// import { Chain, defineChain } from "viem";

// import { ChainConfig, ChainFormatters } from "viem/dist/types/types/chain";
// import { Assign } from "viem/dist/types/types/utils";
// import { celoAlfajores, goerli, optimism, optimismGoerli, sepolia } from 'viem/chains'
// import { pgnSepolia, /* pgn */ } from "./customChains";

// export type SupportedChain = Record<
//   string,
//   Assign<Chain, ChainConfig<ChainFormatters>>
// >;

// export const chains: SupportedChain = {
//   goerli: goerli,
//   sepolia: sepolia,
//   optimismGoerli: optimismGoerli,
//   celoAlfajores: celoAlfajores,

//   // custom chains
//   pgnSepolia: defineChain(pgnSepolia, {
//     fees: optimism.fees,
//     formatters: optimism.formatters,
//   }),
//   // pgn: defineChain(pgn),
// };
