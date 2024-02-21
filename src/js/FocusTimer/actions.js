import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
    sounds.buttonPressAudio.play()


}

export function setTimer() {
el.minutes.setAttribute('contenteditable', true)
el.minutes.focus()
sounds.buttonPressAudio.play()


}

export function stopTimer() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.stopTimer.play()
}
