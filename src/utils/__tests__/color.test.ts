import {
  AlphaComponent,
  BlueComponent,
  colorStringToRgba,
  applyAlpha,
  GreenComponent,
  RedComponent,
  RGBA,
  rgbaToGrayscale,
} from "../color";

describe("color functions testing", () => {
  test("colorStringToRgba with typing", () => {
    expect(colorStringToRgba("#fb0")).toEqual<RGBA>([
      255 as RedComponent,
      187 as GreenComponent,
      0 as BlueComponent,
      1 as AlphaComponent,
    ]);
  });

  test("colorStringToRgba from shortHex", () => {
    expect(colorStringToRgba("#fb0")).toEqual([255, 187, 0, 1]);
    expect(colorStringToRgba("#f0f")).toEqual([255, 0, 255, 1]);
    expect(colorStringToRgba("#ffa")).toEqual([255, 255, 170, 1]);
    expect(colorStringToRgba("#ffae")).toEqual([255, 255, 170, 0.9333]);
  });

  test("colorStringToRgba from hex", () => {
    expect(colorStringToRgba("#00ff00")).toEqual([0, 255, 0, 1]);
    expect(colorStringToRgba("#336699")).toEqual([51, 102, 153, 1]);
    expect(colorStringToRgba("#336699FA")).toEqual([51, 102, 153, 0.9804]);
  });

  test("colorStringToRgba from rgb", () => {
    expect(colorStringToRgba("rgb(123, 234, 45)")).toEqual([123, 234, 45, 1]);
    expect(colorStringToRgba("rgb(255,234,245)")).toEqual([255, 234, 245, 1]);
    expect(colorStringToRgba("rgb(552,11,245)")).toEqual([255, 11, 245, 1]);
    expect(colorStringToRgba("rgb(552,11,-123)")).toEqual([255, 11, 0, 1]);
  });

  test("colorStringToRgba from rgba", () => {
    expect(colorStringToRgba("rgba(123, 234, 45, 1)")).toEqual([123, 234, 45, 1]);
    expect(colorStringToRgba("rgba(255,234,245,0.1)")).toEqual([255, 234, 245, 0.1]);
    expect(colorStringToRgba("rgba(5312,11,245,5)")).toEqual([255, 11, 245, 1]);
    expect(colorStringToRgba("rgba(5312,11,245,700)")).toEqual([255, 11, 245, 1]);
  });

  test("rgbaToGrayscale", () => {
    expect(rgbaToGrayscale([134, 144, 124, 1] as RGBA)).toBeCloseTo(139.73);
    expect(rgbaToGrayscale([255, 234, 245, 0.1] as RGBA)).toBeCloseTo(239.43);
    expect(rgbaToGrayscale([255, 1, 24, 0.1] as RGBA)).toBeCloseTo(54.17);
    expect(rgbaToGrayscale([354, 33, 245, 1.1] as RGBA)).toBeCloseTo(121.05);
  });

  test("applyAlpha", () => {
    expect(applyAlpha("rgb(123, 234, 45)", 12)).toEqual("rgba(123, 234, 45, 1)");
    expect(applyAlpha("rgb(123, 234, 45)", 0.43)).toEqual("rgba(123, 234, 45, 0.43)");
    expect(applyAlpha("rgba(123, 234, 45, 0.12)", 5)).toEqual("rgba(123, 234, 45, 0.6)");
    expect(applyAlpha("rgba(123, 234, 45, 0.90)", 5)).toEqual("rgba(123, 234, 45, 1)");
  });

  test("colorStringToRgba color names", () => {
    //test just sample no point in testing all of them
    expect(colorStringToRgba("khaki")).toEqual([240, 230, 140, 1]);
    expect(colorStringToRgba("azure")).toEqual([240, 255, 255, 1]);
    expect(colorStringToRgba("aliceblue")).toEqual([240, 248, 255, 1]);
  });
});
