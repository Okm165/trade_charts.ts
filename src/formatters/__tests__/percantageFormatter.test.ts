import { PercentageFormatter } from "formatters/percentageFormatter";

describe("dateFormatter testing", () => {
  test("date conversions", () => {
    expect(new PercentageFormatter().format(12)).toEqual("12.00%");
    expect(new PercentageFormatter().format(91.234)).toEqual("91.23%");
    expect(new PercentageFormatter().format(23.24)).toEqual("23.24%");
    expect(new PercentageFormatter().format(1.2)).toEqual("1.20%");
  });
});
