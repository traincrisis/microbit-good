input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C C C C C C C C ", 120)
        music.playMelody("D D D D D D D D ", 120)
        music.playMelody("E E E E E E E E ", 120)
        music.playMelody("F F F F F F F F ", 120)
        music.playMelody("G G G G G G G G ", 120)
        music.playMelody("A A A A A A A A ", 120)
        music.playMelody("B B B B B B B B ", 120)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    }
})
if (0 == 0) {
    basic.showIcon(IconNames.Yes)
} else if (false) {
    basic.showIcon(IconNames.No)
}
