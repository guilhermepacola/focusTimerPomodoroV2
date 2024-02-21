import state from "./state.js"
import { controls, sounds } from "./elements.js"
import * as el from "./elements.js"
import * as music from "./music.js"
import * as timer from "./timer.js"
import * as actions from "./actions.js"

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
    let alertDisplayed = false; // Variável para controlar se o alerta já foi exibido

    function onBlurHandler(event) {
        if (alertDisplayed) return; // Se o alerta já foi exibido, saia da função

        let time = parseInt(event.currentTarget.textContent);
        if (time === 0 || isNaN(time)) {
            alert("Por favor, digite um tempo válido maior que zero.");
            alertDisplayed = true; // Define a variável como true após exibir o alerta
            return;
        }
        time = time > 60 ? 60 : time;

        state.minutes = time;

        timer.updateDisplay();
        el.minutes.removeAttribute('contenteditable');
    }

    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = "";
        alertDisplayed = false; // Reseta a variável quando o campo ganha foco
    });

    el.minutes.onkeypress = (event) => /\d/.test(event.key);
    el.minutes.addEventListener('blur', onBlurHandler);
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




