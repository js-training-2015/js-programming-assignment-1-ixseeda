QUnit.test('solution1()', function ( assert ) 
{
  assert.throws(function() { solution1('ggg', 4, 3); }, "Some of the function inputs are not valid numbers: passedDistance ggg, totalDistance 4, velocity 3", "First input invalid");
  assert.throws(function() { solution1(1, 'three', 5); }, "Some of the function inputs are not valid numbers: passedDistance 1, totalDistance three, velocity 5", "Second input invalid");
  assert.throws(function() { solution1(5, 6, 'gfg'); }, "Some of the function inputs are not valid numbers: passedDistance 5, totalDistance 6, velocity gfg", "Third input invalid");
  assert.equal(solution1(0, 0, 3), 0, "Both distances are 0s");
  assert.throws(function() { solution1(6, 1, 4); }, "Total distance: 1 cannot be less than passedDistance: 6", "Total distance less than passed");
  assert.equal(solution1(10, 10, 4), 0, "Total distance equals passed distance");
  assert.throws(function() { solution1(-2, 3, 2); }, "Passed distance should be a positive number, but is: -2", "Passed distance is invalid");
  assert.throws(function() {solution1(2, -3, 2); }, "Total distance should be a positive number, but is: -3", "Total distance is invalid");
  assert.throws(function() { solution1(4, 5, 0); }, "Velocity should not be zero", "Velocity is invalid (0)");
  assert.throws(function() { solution1(4, 5, -10); }, "Velocity should be a positive number, but is: -10", "Velocity is invalid (negative)");
  assert.equal(solution1('10', '11', '1'), 1, "String arguments are cast to numbers (integer)");
  assert.ok((solution1(4, 5, 2) - 0.5) < 0.0001, "Real number result");
  assert.ok((solution1(45.22, 77.498, 1.36) - 23.733) < 0.001, "Real number result (more accuracy)");
  assert.equal(solution1("2.5", "4.5", 1), 2, "String arguments are cast to numbers (real)");
});

QUnit.test('solution2()', function ( assert ) 
{
  assert.throws(function() { solution2('55,555', 68) }, "One of the input numbers is incorrect: first number 55,555, second number 68", "First input invalid");
  assert.throws(function() { solution2(99, 'dfgdfg') }, "One of the input numbers is incorrect: first number 99, second number dfgdfg", "Second input invalid");
  assert.throws(function() { solution2(67, 1) }, "First number: 67 must be less than the second number: 1", "Invalid interval");
  assert.throws(function() { solution2(100, 100) }, "First number: 100 must be less than the second number: 100", "Same arguments");
  assert.equal(solution2(-10, 10), 15, "Test between equal numbers with different signs");
  assert.equal(solution2(2, 7), 7, "Test between two positive numbers");
  assert.equal(solution2(-7, -2), 7, "Test between two negative numbers");
  assert.equal(solution2(-7, 2), 7, "Test between two numbers with different signs, abs(negative) is greater");
  assert.equal(solution2(-7, 8), 15, "Test between two numbers with different signs, abs(positive) is greater");
  assert.equal(solution2(-2, 0), 1, "Test with negative/zero interval");
  assert.equal(solution2(0, 6), 7, "Test with zero/positive interval"); 
});
