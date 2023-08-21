import { chains } from "../Client/chains";
import { Allo } from "../Allo/Allo";

import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { goerli } from "viem/chains";
import { config } from "dotenv";
import { TransactionData } from "../Common/types";

config();

const client = createWalletClient({
  chain: goerli,
  transport: http(),
});

// const account = privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`);
