const { runRobot } = require('./robots');

// Define the upper-right coordinates of the grid map boundary
const maxX = 5;
const maxY = 3;

// Set up the shared global memory array to track scents dropped by lost robots
const scents = [];

console.log('--- STARTING MARTIAN ROBOTS SIMULATION ---');

const robot1 = runRobot(1, 1, 'E', 'RFRFRFRF', scents, maxX, maxY);
console.log('Robot 1 Output:', robot1);

const robot2 = runRobot(4, 2, 'N', 'FRRFLLFFRRFLL', scents, maxX, maxY);
console.log('Robot 2 Output:', robot2);

const robot3 = runRobot(4, 3, 'W', 'LFLLLRRRFLFL', scents, maxX, maxY);
console.log('Robot 3 Output:', robot3);

console.log('--- SIMULATION OVER ---');