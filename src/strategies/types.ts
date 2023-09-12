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