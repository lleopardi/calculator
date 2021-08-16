import operations from "./ArithmeticOperations";

test("should test arithmetic operations", () => {
  const sum = operations["+"];
  expect(sum(1, 2)).toBe(3);

  const subtract = operations["-"];
  expect(subtract(2, 2)).toBe(0);

  const multiply = operations["*"];
  expect(multiply(2, 2)).toBe(4);

  const divide = operations["/"];
  expect(divide(2, 2)).toBe(1);
  expect(divide(2, 0)).toBe("cannot divide with zero");

  const modulus = operations["%"];
  expect(modulus(2, 2)).toBe(0);
  expect(modulus(2, 0)).toBe("cannot divide with zero");

});
