describe("Fizzbuzz", function() {
  var fizzbuzz = new FizzBuzz();

  describe("It should know if it is divisible by", function() {

    it("three", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("five", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe("It should know if it is not divisible by", function() {

    it("three", function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

});