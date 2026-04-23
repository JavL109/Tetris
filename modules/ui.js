import state from "./state.js";
import { canvasWidth, canvasHeight } from "./config.js";

export function renderPanel(){
    const div=document.getElementById("info-panel")

    if(!div){
        console.error("No 'info-panel' detected in DOM")
        return
    }

    const height=canvasHeight+"px"
    const width=Math.floor(canvasWidth/2)+"px"
    const border="2px solid black"
    const backgroundColor="#9a9191"


    div.style.width=width
    div.style.height=height
    // div.style.border=border
    div.style.backgroundColor=backgroundColor
}

export function renderCanvas(){
    const cnv=document.getElementById("cnv")
    const ctx=cnv.getContext("2d")

    state.canvas=cnv
    state.ctx=ctx

    cnv.style.width = canvasWidth + "px"
    cnv.style.height = canvasHeight + "px"
}