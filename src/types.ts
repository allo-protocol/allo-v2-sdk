export type TransactionData = {
  to: `0x${string}`;
  data: `0x${string}`;
  value: string;
};

export type Metadata = {
  protocol: number;
  pointer: string;
}