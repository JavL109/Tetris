import { BoxS, canvasWidth, canvasHeight, heihgtInBoxs, widthInBoxs} from "./config.js"
import { planeCustomized } from "./plane.js"
import state from "./state.js"

export function eraseCanvas(){
    const canvas=state.canvas
    canvas.width=canvasWidth
    canvas.height=canvasHeight
}

export function paintMap(){
    const ctx=state.ctx
    ctx.fillStyle="#aa8f8f"
    for(let BoxY=0;BoxY<heihgtInBoxs;BoxY++){
        ctx.fillRect(0,BoxY*BoxS,BoxS,BoxS)
        ctx.fillRect(canvasWidth-BoxS,BoxY*BoxS,BoxS,BoxS)
    }

    for(let BoxX=0;BoxX<widthInBoxs;BoxX++){
        ctx.fillRect(BoxX*BoxS,heihgtInBoxs*BoxS-BoxS,BoxS,BoxS)
    }
}

export function paintMapCustom(){
    const ctx=state.ctx
    const columns=planeCustomized[0].length
    const filas=planeCustomized.length
    for(let BoxY=0;BoxY<filas;BoxY++){
        for(let BoxX=0;BoxX<columns;BoxX++){
            ctx.fillStyle="black"
            if(planeCustomized[BoxY][BoxX]===1){
                ctx.fillRect(BoxX*BoxS,BoxY*BoxS,BoxS,BoxS)
            }
        }
    }
}