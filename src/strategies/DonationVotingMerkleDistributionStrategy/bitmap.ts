import {
  Chain,
  ContractFunctionConfig,
  MulticallParameters,
  PublicClient,
  Transport,
} from "viem";
import { ApplicationStatus, ReviewRecipient } from "./types";

export type ReviewRecipientDetailed = ReviewRecipient & {
  index: number;
  rowIndex: number;
  colIndex: number;
};

export async function _updateStatuses(
  client: PublicClient<Transport, Chain>,
  contract: any,
  recipients: ReviewRecipient[],
): Promise<ApplicationStatus[]> {
  const multicall: any = [];

  // get all the status indexes
  recipients.forEach((recipient: ReviewRecipient) => {
    multicall.push({
      ...contract,
      functionName: "recipientToStatusIndexes",
      args: [recipient.recipientId],
    });
  });

  const results = await client.multicall(
    multicall as MulticallParameters<ContractFunctionConfig[], true>,
  );

  const recipientsWithIndex: ReviewRecipientDetailed[] = [];

  // add the indexes to each recipient
  results.forEach((res: any, index: number) => {
    const recipient: ReviewRecipientDetailed = {
      ...recipients[index],
      index: res.result,
      rowIndex: Math.floor(res.result / 64),
      colIndex: (res.result % 64) * 4,
    };

    recipientsWithIndex.push(recipient);
  });

  // Group recipients by rowIndex
  const groupedRecipients: Record<number, ReviewRecipientDetailed[]> = {};

  recipientsWithIndex.forEach((recipient) => {
    const { rowIndex } = recipient;

    if (!groupedRecipients[rowIndex]) {
      groupedRecipients[rowIndex] = [];
    }

    groupedRecipients[rowIndex].push(recipient);
  });

  const applicationStatuses: ApplicationStatus[] = [];

  // calculate the new row for each rowIndex and each recipient status
  for (const rowIndex in groupedRecipients) {
    const recipients: ReviewRecipientDetailed[] = groupedRecipients[rowIndex];
    let row: number = await contract.read.statusesBitMap(rowIndex);

    recipients.forEach((recipient) => {
      const newRow: number = row & ~(15 << recipient.colIndex);
      const statusRow: number =
        newRow | (recipient.status << recipient.colIndex);
      row = statusRow;
    });

    applicationStatuses.push({
      index: BigInt(rowIndex),
      statusRow: BigInt(row),
    });
  }

  return applicationStatuses;
}

// 0x0000000000000000000000000000000000000000000000000000000000000000
// \const results = await publicClient.multicall({
//   contracts: [
//     {
//       ...wagmiContract,
//       functionName: 'totalSupply',
//     },
//     {
//       ...wagmiContract,
//       functionName: 'ownerOf',
//       args: [69420n]
//     },
//     {
//       ...wagmiContract,
//       functionName: 'mint'
//     }
//   ]
// })
