import state from "./state.js"
import { BoxS, heihgtInBoxs, widthInBoxs } from "./config.js"
import { renderCell } from "./utilities.js"

export function initPlane(){
    for(let Y=0; Y<heihgtInBoxs; Y++){
        state.plane[Y]=[]
        for(let X=0; X<widthInBoxs; X++){
            state.plane[Y][X]=0
        }
    }
}

export function renderPlane(){
    const plane=state.plane
    const rows=plane.length
    const columns=plane[0].length

    for(let y=0;y<rows;y++){
        for(let x=0;x<columns;x++){
            const color=plane[y][x]
            if(color!==0)renderCell(x*BoxS,y*BoxS,color)
        }
    }
}

export const planeCustomized=[
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
]