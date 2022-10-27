const { rgbaModifier } = require("../katas/rgbaModifier/rgbaModifier");

describe("rgbaModifier()", () => {
  it("returns a string containing the modified values and opacity", () => {
    expect(rgbaModifier("rgba(100,100,100,1)", 50, 0.5)).toBe(
      "rgba(150,150,150,0.5)"
    );
  });
  it("returns a string containing the modified values and opacity", () => {
    expect(rgbaModifier("rgba(100,100,100,1)", -50, 0.5)).toBe(
      "rgba(50,50,50,0.5)"
    );
  });
  it("The returned string can never be more than 255", () => {
    expect(rgbaModifier("rgba(100,100,100,1)", 300, 0.5)).toBe(
      "rgba(255,255,255,0.5)"
    );
  });
});
