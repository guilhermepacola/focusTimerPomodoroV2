import { campFireSound, coffeeShopSound, florestSound, rainingSound, buttonPressAudio } from "./sounds.js"
import state from "./state.js"
import { florest, raining, coffeeShop, campFire } from "./elements.js"




export function toggleFlorestMusic() {
    buttonPressAudio.play()

    florestSound.play()
    florestSound.loop = true
    let selected = florest.classList.contains('clicked')

    if (selected) {
        florestSound.pause()
    }

    florest.classList.toggle('clicked')
}

export function toggleRainMusic() {
    buttonPressAudio.play()

    rainingSound.play()
    rainingSound.loop = true
    let selected = raining.classList.contains('clicked')

    if (selected) {
        rainingSound.pause()
    }

    raining.classList.toggle('clicked')
}


export function toggleCoffeeShopMusic() {
    buttonPressAudio.play()

    coffeeShopSound.play()
    coffeeShopSound.loop = true
    let selected = coffeeShop.classList.contains('clicked')

    if (selected) {
        coffeeShopSound.pause()
    }

    coffeeShop.classList.toggle('clicked')
}

export function toggleCampFireMusic() {
    buttonPressAudio.play()

    campFireSound.play()
    campFireSound.loop = true
    let selected = campFire.classList.contains('clicked')

    if (selected) {
        campFireSound.pause()
    }

    campFire.classList.toggle('clicked')

}