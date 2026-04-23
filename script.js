import initializeKeyEvents from "./modules/keyEvents.js"
import state from "./modules/state.js"
import { eraseCanvas } from "./modules/handlePlane.js"
import { renderCanvas, renderPanel } from "./modules/ui.js"
import { handleCompletedRow, haveLost, initForms, newForm } from "./modules/utilities.js"
import { initPlane, renderPlane } from "./modules/plane.js"

//Functions
function init() {
    console.log("Initializing")
    renderCanvas()
    initPlane()
    initForms()
    initializeKeyEvents()
    renderPanel()

    requestAnimationFrame(main)
}


function main(time = 0) {
    if (state.lose) {
        haveLost()
    } else {

        const pause = (state.pause && state.debugging) ? true : false
        state.canPause = pause
        if (!state.canPause) {

            eraseCanvas()
            // paintMap()
            const actualForm = state.actualForm
            handleCompletedRow()

            renderPlane()
            actualForm.render()


            const deltaTime = time - state.lastTime
            state.lastTime = time
            state.dropCounter += deltaTime


            if (state.dropCounter >= state.dropInterval) {
                actualForm.goDown()
                actualForm.checkBelow()
                if (!actualForm.active) {
                    newForm()
                }
                state.dropCounter = 0
            }
        }
    }

    requestAnimationFrame(main)
}

//Init
document.addEventListener("DOMContentLoaded", init)
