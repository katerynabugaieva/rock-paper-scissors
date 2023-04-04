let room = 0
/**
 * Task 1: rename variable "room" into "hand"
 * 
 * Task 2: extend if-else statement with 3rd condition.
 * 
 * Task 3: change icons for if-else statements with rock (small square), scissors and paper (big square). Hint: check block BASIC
 */
/**
 * bonus task: replace onButtonPressed with shake gesture. Hint: check block INPUTS
 */
input.onButtonPressed(Button.AB, function () {
    room = randint(1, 3)
    if (room == 1) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.House)
    }
    basic.pause(1000)
    basic.clearScreen()
})
