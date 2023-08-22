import { chains } from "../../Client/chains";
import { Registry } from "../../Registry/Registry";

import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { goerli } from "viem/chains";
import { config } from "dotenv";
import { TransactionData } from "../../Common/types";
import { CreateProfileArgs, Profile } from "../../Registry/types";
config();

const client = createWalletClient({
  chain: goerli,
  transport: http(),
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

const testGetAlloOwner = async () => {
  const registry = new Registry({ chain: chains.goerli });

  const profile: Profile = await registry.getProfileById(
    "0xF0E7CB0E1455C389165FE3EB251C994BDA127924843A1178504FCD54BB069A60"
  );
  console.log(profile);
};

testGetAlloOwner();


const testCreateOwner = async (): Promise<void> => {
  const registry = new Registry({ chain: chains.goerli });

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

  const hash = await client.sendTransaction({
    data: txData.data,
    account,
    to: txData.to,
    value: BigInt(txData.value),
  });

  console.log(`Transaction hash: ${hash}`);

}

// testCreateOwner();