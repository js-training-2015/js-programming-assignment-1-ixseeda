function solution1(passedDistance, totalDistance, velocity)
{
  function validateInputs(passedDistance, totalDistance, velocity)
  {
    if( isNaN(passedDistance) ||
      isNaN(totalDistance) ||
      isNaN(velocity) )
    {
      throw "Some of the function inputs are not valid numbers: passedDistance " + passedDistance + 
        ", totalDistance " + totalDistance + ", velocity " + velocity;
    }
    checkForNegative(passedDistance, "Passed distance");
    checkForNegative(totalDistance, "Total distance");
    checkForNegative(velocity, "Velocity");
    if (totalDistance < passedDistance)
    {
      throw "Total distance: " + totalDistance + " cannot be less than passedDistance: " + passedDistance;
    }
    if (velocity == 0)
    {
      throw "Velocity should not be zero";
    }
  }

  function checkForNegative(numberToCheck, tag)
  {
    if (numberToCheck < 0)
    {
      throw tag + " should be a positive number, but is: " + numberToCheck;
    }
  }
  
  validateInputs(passedDistance, totalDistance, velocity);
  return (totalDistance - passedDistance) / velocity;
}

function solution2(number1, number2)
{
  function calculate(number1, number2)
  {
    console.log("Entering calculate");
    var initialXor = number1 ^ number2;
    var result = 1;
    while (initialXor)
    {
      initialXor >>= 1;
      result <<= 1;
    }
    return --result;
  }
  
  function calculateForZeroBasedInterval(number)
  {
    return number >= 0 ? calculate(0, number) : calculate(number, -1);
  }
  
  if (isNaN(number1) || isNaN(number2))
  {
    throw "One of the input numbers is incorrect: first number " + number1 + ", second number " + number2;
  }
  if (number1 >= number2)
  {
    throw "First number: " + number1 + " must be less than the second number: " + number2;
  }
  if (number1 < 0 && number2 >= 0)
  {
    return Math.abs(number1) > Math.abs(number2) ?
      calculateForZeroBasedInterval(number1) :
      calculateForZeroBasedInterval(number2);
  }
  return calculate(number1, number2);
  
}