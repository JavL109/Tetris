import { pauseButtonPressed, restart } from "./utilities.js"
import state from "./state.js"

function initializeKeyEvents(){
document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "ArrowUp":
            if(state.actualForm)state.actualForm.rotate()
            break
        case "ArrowDown":
            if(state.actualForm)state.actualForm.goDown()
            break
        case "ArrowLeft":
            if(state.actualForm)state.actualForm.goLeft()
            break
        case "ArrowRight":
            if(state.actualForm)state.actualForm.goRight()
            break

        case "r":
            restart()
            state.lose=false
            break
        }
        
        if(e.key === " ")pauseButtonPressed()
})}

export default initializeKeyEvents