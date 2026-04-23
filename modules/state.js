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

    "canvas":null,
    "ctx":null,

    "lose":false

}

export default state