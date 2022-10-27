const {
  findMostRepeated,
} = require("../katas/findMostRepeated/findMostRepeated");

describe("binarySearch()", () => {
  it("When passed an empty array, an object is returned with an empty array and repeats as null", () => {
    expect(findMostRepeated([])).toEqual({ elements: [], repeats: null });
  });
  it("When passed an array with one element, an object is returned an array containing the element, and the amount of repeats", () => {
    expect(findMostRepeated(["foo"])).toEqual({
      elements: ["foo"],
      repeats: 1,
    });
  });
  it("When passed an array with multiple elements, an object is returned an array containing the most repeated element, and the amount of repeats", () => {
    expect(findMostRepeated(["foo", "foo", "bar"])).toEqual({
      elements: ["foo"],
      repeats: 2,
    });
  });
  it("When passed an array with multiple elements, an object is returned an array containing the most repeated element, and the amount of repeats", () => {
    expect(findMostRepeated(["foo", "foo", "bar", "bar"])).toEqual({
      elements: ["foo", "bar"],
      repeats: 2,
    });
  });
});
