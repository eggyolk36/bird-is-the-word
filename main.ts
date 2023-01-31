function whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + player1smelly)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + player2smelly)
    OLED.newLine()
    OLED.writeStringNewLine("Draws: " + howdoyoulosetothecincinnatibengals)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + eagleschiefs)
}
input.onButtonPressed(Button.A, function () {
    eagleschiefs += 1
    player1smelly += 1
    basic.clearScreen()
    basic.showString("A")
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    OLED.clear()
    player1smelly += 1e+54
    OLED.writeStringNewLine("shhhhhh")
    basic.pause(2000)
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
    OLED.clear()
    howdoyoulosetothecincinnatibengals = 0
    player1smelly = 0
    player2smelly = 0
    eagleschiefs = 0
    if (player1smelly > player2smelly) {
        OLED.writeStringNewLine("PLAYER A WINS!")
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        basic.pause(100)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (player1smelly < player2smelly) {
        OLED.writeStringNewLine("PLAYER B WINS!")
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
        basic.pause(100)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (player1smelly == player2smelly) {
        OLED.writeStringNewLine("tied?")
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.pause(100)
    }
    basic.pause(5000)
    OLED.writeStringNewLine("playing again")
    basic.pause(2000)
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    OLED.clear()
    player2smelly += -1
    OLED.writeStringNewLine("shhhhhh")
    basic.pause(2000)
    whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
})
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
basic.pause(1000)
whopperwhopperwhopperwhopperjuniordoubletriplewhopperframegrilledwithperfecttopperscrownofmydayatBKKKKkhaveityourway()
