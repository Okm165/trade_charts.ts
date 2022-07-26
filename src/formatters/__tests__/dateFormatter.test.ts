import { DateFormatter } from "formatters/dateFormatter";

describe("DateFormatter testing", () => {
  test("date conversions", () => {
    expect(new DateFormatter().format(new Date("December 17, 1995 03:24:00"))).toEqual("1995-12-17");
    expect(new DateFormatter().format(new Date("November 1, 1995 03:24:00"))).toEqual("1995-11-01");
    expect(new DateFormatter().format(new Date("May 1, 2000 03:24:00"))).toEqual("2000-05-01");
  });
});
