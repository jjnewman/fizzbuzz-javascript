describe("Fizzbuzz", function() {
  var fizzbuzz;

  describe("It should know if it is divisible by", function() {

    it("three", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

});