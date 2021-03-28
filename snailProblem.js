var days = 0;
var distancePassed = 0;

function output(depth, climbUp, climbDown) {
  while (distancePassed < depth) {
    if (distancePassed + climbUp > depth) {
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
