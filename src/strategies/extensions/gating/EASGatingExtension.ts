import { BaseStrategy } from "../../BaseStrategy";

export class EASGatingExtension extends BaseStrategy {
  // Read functions
  public async getEAS(): Promise<`0x${string}`> {
    this.checkStrategy();
    const eas = await this.contract.read.eas();
    return eas;
  }

  private checkStrategy(): void {
    if (!this.contract) {
      throw new Error(
        "EASGatingExtension: No strategy address provided. Please call `setContract` first."
      );
    }
  }
}
