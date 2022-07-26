import { DateTimeFormatter } from "formatters/dateTimeFormatter";

describe("DateTimeFormatter testing", () => {
  test("dateTime conversions", () => {
    expect(new DateTimeFormatter().format(new Date(Date.parse("December 17, 1995 03:24:12 UTC")))).toEqual(
      "1995-12-17 03:24:12"
    );
    expect(new DateTimeFormatter().format(new Date(Date.parse("November 1, 1995 03:01:33 UTC")))).toEqual(
      "1995-11-01 03:01:33"
    );
    expect(new DateTimeFormatter().format(new Date(Date.parse("May 1, 2000 03:24:54 UTC")))).toEqual(
      "2000-05-01 03:24:54"
    );
  });
});
