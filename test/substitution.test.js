const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution()", () => {
  describe("errors", () => {
    it("should return false if no alphabet argument is given", () => {
      const input = "thinkful";
      const alphabet = undefined;
      const actual = substitution(input, alphabet, (encode = true));
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the alphabet has any duplicate letters", () => {
      const input = "thinkful";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the length of the alphabet is less than 26", () => {
      const input = "thinkful";
      const alphabet = "short";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  describe("encoding", () => {
    it("should return correct transposed string from input using alphabet", () => {
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const input = "you are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "YouAreAnExcellentSpy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = "elpxhmxfmbymwwmfjdne";
      expect(actual).to.equal(expected);
    });
    it("should work with special characters", () => {
      const input = "message";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, (encode = true));
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding", () => {
    it("should return correct transposed string from input using standard alphabet", () => {
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = false));
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
      const input = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = false));
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "elpxhmxfmbymwwmfjdne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, (encode = false));
      const expected = "youareanexcellentspy";
      expect(actual).to.equal(expected);
    });
    it("should work with special characters", () => {
      const input = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, (encode = false));
      const expected = "message";
      expect(actual).to.equal(expected);
    });
  });
});
