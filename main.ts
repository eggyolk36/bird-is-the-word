input.onButtonPressed(Button.A, function () {
    eagleschiefs += 1
    player1smelly += 1
    basic.clearScreen()
    basic.showString("A")
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
input.onButtonPressed(Button.AB, function () {
    eagleschiefs += 1
    howdoyoulosetothecincinnatibengals += 1
    basic.clearScreen()
    basic.showString("T")
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
input.onButtonPressed(Button.B, function () {
    eagleschiefs += 1
    player2smelly += 1
    basic.clearScreen()
    basic.showString("B")
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    howdoyoulosetothecincinnatibengals = 0
    player1smelly = 0
    player2smelly = 0
    eagleschiefs = 0
    OLED.writeStringNewLine("you played the game now time to reset dingleberry")
    basic.pause(2000)
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
function whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA: " + player1smelly)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB: " + player2smelly)
    OLED.newLine()
    OLED.writeStringNewLine("Draws: " + howdoyoulosetothecincinnatibengals)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:  " + eagleschiefs)
}
let player2smelly = 0
let player1smelly = 0
let howdoyoulosetothecincinnatibengals = 0
let eagleschiefs = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Would you like to play a GAME?")
eagleschiefs = 0
howdoyoulosetothecincinnatibengals = 0
player1smelly = 0
player2smelly = 0
whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
