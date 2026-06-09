const { runRobot } = require('./robots');

test('running manual robot turning tests', () => {
    // Test spinning right 4 times from North
    runRobot(1, 1, 'N', 'RRRR');

    // Test spinning left 1 time from North (should wrap around to West)
    runRobot(1, 1, 'N', 'L');
});