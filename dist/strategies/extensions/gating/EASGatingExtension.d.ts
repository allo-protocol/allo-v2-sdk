import { BaseStrategy } from "../../BaseStrategy";
export declare class EASGatingExtension extends BaseStrategy {
    getEAS(): Promise<`0x${string}`>;
    private checkStrategy;
}
