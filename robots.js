const orientations = ['N', 'E', 'S', 'W'] //the directions of a compass always go North, then East, then South, then West.

const runRobot = (x, y, orientation,commands, scents, maxX, maxY) =>{ // defining the machine what to look for
let currentX = x; //get the initial x co-ordinate
let currentY = y; //get the initial y coordinate
let currentIndex = orientations.indexOf(orientation);//To make it work, it needs the inputs (X-coordinate, a Y-coordinate, and a starting direction string like 'E')

for (let i = 0; i < commands.length; i++){//get current point
    let command = commands [i]; //get the command
if (command === 'R') { // if index goes beyond array, then reset to North
    currentIndex = currentIndex + 1; //move orientation to +1
if(currentIndex > 3) currentIndex = 0;// if more than 3 in array, back to N
  
}else if (command === 'L')  {// left
    currentIndex = currentIndex - 1; //move orientation to -1 
if(currentIndex < 0 ) currentIndex = 3; //if less than 0, return to 3
}
else if (command === 'F'){ // to move forward

// Create the scent text for current spot and direction
let currentPositionWithDirection = `${currentX},${currentY},${orientations[currentIndex]}`;

  if (scents.includes(currentPositionWithDirection)) {
    continue; // skips this 'F' command and goes to the next command in the loop
  }

    let nextX = currentX;
    let nextY = currentY;

    if(orientations[currentIndex] ==='N') nextY = currentY + 1;//figure out if it's North
    if(orientations[currentIndex] ==='S') nextY = currentY - 1;//South
    if(orientations[currentIndex] ==='E') nextX = currentX + 1;//East
    if(orientations[currentIndex] ==='W') nextX = currentX - 1;//or West

    if (nextX > maxX || nextX < 0 || nextY > maxY || nextY < 0) { //if next position is out of bounds
        scents.push(currentPositionWithDirection); // save this spot to the scents array so future robots stay safe
        return `${currentX} ${currentY} ${orientations[currentIndex]} LOST`;//mark as lost
    }

   // Save the new coordinates back to currentX and currentY so the robot moves!
  currentX = nextX;
  currentY = nextY;

}
}

return `${currentX} ${currentY} ${orientations[currentIndex]}`;
};
module.exports = { runRobot };
