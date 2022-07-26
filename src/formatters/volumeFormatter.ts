import { IPriceFormatter } from "formatters/priceFormatter";

export class VolumeFormatter implements IPriceFormatter {
  private readonly _precision: number;

  public constructor(precision: number) {
    this._precision = precision;
  }

  public format(vol: number): string {
    let sign = "";
    if (vol < 0) {
      sign = "-";
      vol = -vol;
    }

    if (vol < 995) {
      return sign + this._formatNumber(vol);
    } else if (vol < 999995) {
      return sign + this._formatNumber(vol / 1000) + "K";
    } else if (vol < 999999995) {
      vol = 1000 * Math.round(vol / 1000);
      return sign + this._formatNumber(vol / 1000000) + "M";
    } else {
      vol = 1000000 * Math.round(vol / 1000000);
      return sign + this._formatNumber(vol / 1000000000) + "B";
    }
  }

  private _formatNumber(value: number): string {
    const priceScale = Math.pow(10, this._precision);
    value = Math.round(value * priceScale) / priceScale;
    if (value >= 1e-15 && value < 1) {
      value = 0;
    }
    return String(value);
  }
}
