const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {
  describe("encoding", () => {
    it("should return correct string of numbers for given input", () => {
      const input = "abc";
      const actual = polybius(input, (encode = true));
      const expected = "112131";
      expect(actual).to.equal(expected);
    });
    it("should always return an output that is a string", () => {
      const input = "abc";
      const actual = polybius(input, (encode = true));
      expect(actual).to.be.a("string");
    });
    it("should ignore capital letters", () => {
      const input = "ABC";
      const actual = polybius(input, (encode = true));
      const expected = "112131";
      expect(actual).to.equal(expected);
    });
    it("should keep spaces", () => {
      const input = "a b c";
      const actual = polybius(input, (encode = true));
      const expected = "11 21 31";
      expect(actual).to.equal(expected);
    });
    it("should return 42 in the result string for both i and j", () => {
      const input = "ij";
      const actual = polybius(input, (encode = true));
      const expected = "4242";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should return false if length of input string without spaces is odd", () => {
      const input = "44324233521254134";
      const actual = polybius(input, (encode = false));
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return correct string for given input", () => {
      const input = "3251131343";
      const actual = polybius(input, (encode = false));
      const expected = "hello";
      expect(actual).to.equal(expected);
    });
    it("should always return an output that is a string", () => {
      const input = "123478";
      const actual = polybius(input, (encode = false));
      expect(actual).to.be.a("string");
    });
    it("should keep spaces", () => {
      const input = "3251131343 2543241341";
      const actual = polybius(input, (encode = false));
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
    it("should return (i/j) in the result string for 42", () => {
      const input = "42";
      const actual = polybius(input, (encode = false));
      const expected = "(i/j)";
      expect(actual).to.equal(expected);
    });
  });
});
