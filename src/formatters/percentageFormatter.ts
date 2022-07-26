import { PriceFormatter } from "formatters/priceFormatter";

export class PercentageFormatter extends PriceFormatter {
  public constructor(priceScale = 100) {
    super(priceScale);
  }

  public override format(price: number): string {
    return `${super.format(price)}%`;
  }
}
