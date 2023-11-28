// NOTE: The following types are shared by all strategies, so they are defined
//       here. Each strategy will also have its own types.ts file.

export type PayoutSummary = {
  address: `0x${string}`;
  amount: string;
};

export enum Status {
  None,
  Pending,
  Accepted,
  Rejected,
  Appealed,
  InReview,
  Canceled,
}
