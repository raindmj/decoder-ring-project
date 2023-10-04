// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
  describe("errors", () => {
    it("should return false if shift value isn't present", () => {
      const input = "message";
      const expected = false;
      const shift = undefined;
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is equal to 0", () => {
      const input = "message";
      const shift = 0;
      const expected = false;
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is less than -25", () => {
      const input = "message";
      const shift = -30;
      const expected = false;
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should return false if shift value is greater than 25", () => {
      const input = "message";
      const shift = 30;
      const expected = false;
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
  });
  describe("encoding", () => {
    it("should ignore capital letters", () => {
      const input = "BOBtime";
      const shift = 2;
      const expected = "dqdvkog";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet (z shift 2, e.g. z becomes b)", () => {
      const input = "zebra";
      const shift = 2;
      const expected = "bgdtc";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const input = "hi, this is a message.";
      const shift = 1;
      const expected = "ij, uijt jt b nfttbhf.";
      const actual = caesar(input, shift, (encode = true));
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should ignore capital letters", () => {
      const input = "BOBtime";
      const shift = 2;
      const expected = "zmzrgkc";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the beginning of the alphabet (a shifted -2, e.g. a becomes y)", () => {
      const input = "alpha";
      const shift = 2;
      const expected = "yjnfy";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const input = "hi, this is a message.";
      const shift = 1;
      const expected = "gh, sghr hr z ldrrzfd.";
      const actual = caesar(input, shift, (encode = false));
      expect(actual).to.equal(expected);
    });
  });
});
