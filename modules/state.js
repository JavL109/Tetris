import { initDropInterval } from "./config.js"
import { debug } from "./config.js"

const state={
    "pause":false,
    "canPause":null,
    "points":0,
    "nextForm":null,
    "actualForm":null,
    "debugging":debug,
    "coordForms":[],
    "plane":[],

    "timestamp":0,
    "dropCounter":0,
    "dropInterval":initDropInterval,
    "lastTime":0,
    "totalTime":0,

    "canvas":null,
    "ctx":null,

    "lose":false

}

export const htmlElements={
    "canvas":document.getElementById("cnv"),
    "time":document.getElementById("time"),
    "points":document.getElementById("points"),
    "nextForm":document.getElementById("nextForm"),
    "actualForm":document.getElementById("actualForm"),
    "help":document.getElementById("help"),
    "info":document.getElementById("info")
}

export const musicAndEffects={
    "backgroundMusic":null,
    "rotateEffect":null,
    "completeRowEffect":null
}

export default state

