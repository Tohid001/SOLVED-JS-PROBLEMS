//Problem Definition: A snail climbs up 7 feet each day and slips back 2 feet at night. How many days will it take the snail to get out of the of a well with the given depth?

var days = 0;

var distancePassed = 0;

function output(depth, climbUp, climbDown) {
  while (distancePassed < depth) {
    if (distancePassed + climbUp >= depth) {
      days += 1;
      distancePassed += climbUp;
    } else {
      distancePassed += climbUp - climbDown;
      days += 1;
    }
  }

  return days;
}
console.log(output(39, 7, 2));
