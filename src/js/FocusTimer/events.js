import state from "./state.js"
import { controls, sounds } from "./elements.js"
import * as el from "./elements.js"
import * as music from "./music.js"
import * as actions from "./actions.js"
import * as timer from "./timer.js"

export function registerControls() {

    controls.addEventListener('click', (event) => {

        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()

    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress =(event) => /\d/ .test(event.key)
    el.minutes.addEventListener('blur', (event) =>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0
        
        timer.updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}


export function playMusic() {
    sounds.addEventListener('click', (event) => {
        let currentMusic = event.target.dataset.music

        if (typeof music[currentMusic] != "function") {
            return;
        }
        music[currentMusic]()
    })

}

