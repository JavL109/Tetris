import initializeKeyEvents from "./modules/keyEvents.js"
import state from "./modules/state.js"
import { eraseCanvas } from "./modules/handlePlane.js"
import { renderCanvas, renderPanel, renderPanelInfo } from "./modules/ui.js"
import { handleCompletedRow, haveLost, initForms, newForm } from "./modules/utilities.js"
import { initPlane, renderPlane } from "./modules/plane.js"
import { initMusic } from "./modules/music.js"

//Functions
function init() {
    console.log("Initializing")
    renderCanvas()
    initPlane()
    initForms()
    initializeKeyEvents()
    renderPanel()
    initMusic()

    requestAnimationFrame(main)
}


function main(time = 0) {
    renderPanelInfo()

    if (state.lose) {
        haveLost()
    } else {

        const pause = (state.pause && state.debugging) ? true : false
        state.canPause = pause
        if (!state.canPause) {
            state.totalTime+=1/60

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
