export type PayoutSummary = {
    address: `0x${string}`;
    amount: string;
};
export declare enum Status {
    None = 0,
    Pending = 1,
    Accepted = 2,
    Rejected = 3,
    Appealed = 4,
    InReview = 5,
    Canceled = 6
}
