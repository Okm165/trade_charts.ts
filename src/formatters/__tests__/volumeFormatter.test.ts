import { VolumeFormatter } from "formatters/volumeFormatter";

describe("dateFormatter testing", () => {
  test("date conversions", () => {
    expect(new VolumeFormatter(2).format(12)).toEqual("12");
    expect(new VolumeFormatter(2).format(91.234)).toEqual("91.23");
    expect(new VolumeFormatter(2).format(23.24)).toEqual("23.24");
    expect(new VolumeFormatter(2).format(1.2)).toEqual("1.2");
    expect(new VolumeFormatter(2).format(100.2)).toEqual("100.2");
    expect(new VolumeFormatter(2).format(100.329)).toEqual("100.33");
    expect(new VolumeFormatter(2).format(100.112)).toEqual("100.11");
    expect(new VolumeFormatter(2).format(1000.112)).toEqual("1K");
    expect(new VolumeFormatter(2).format(1010.112)).toEqual("1.01K");
    expect(new VolumeFormatter(2).format(1510.112)).toEqual("1.51K");
    expect(new VolumeFormatter(2).format(1589.112)).toEqual("1.59K");
    expect(new VolumeFormatter(2).format(1599.112)).toEqual("1.6K");
    expect(new VolumeFormatter(2).format(159900.112)).toEqual("159.9K");
    expect(new VolumeFormatter(2).format(1259900.112)).toEqual("1.26M");
    expect(new VolumeFormatter(2).format(125200.112)).toEqual("125.2K");
    expect(new VolumeFormatter(2).format(12005200.112)).toEqual("12.01M");
    expect(new VolumeFormatter(2).format(12505200.112)).toEqual("12.51M");
    expect(new VolumeFormatter(2).format(1258405200.112)).toEqual("1.26B");
    expect(new VolumeFormatter(2).format(10258405200.112)).toEqual("10.26B");
  });
});
