
import { BoxS, canvasHeight, canvasWidth, initDropInterval, widthInBoxs } from "./config.js"
import Form from "./form.js"
import form from "./graphicsForms.js"
import state from "./state.js"
import { initPlane } from "./plane.js"

export function randomInt(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

export function randomForm() {
    const ranNum = randomInt(form.length)
    return form[ranNum]
}

export function pauseButtonPressed() {
    const pauseState = state.pause
    if (pauseState == true) {
        state.pause = false
    } else {
        state.pause = true
    }
}



export function restart() {
    state.pause = false
    state.points = 0
    state.nextForm = null
    state.actualForm = null
    state.coordForms = []
    state.plane = []
    state.timestamp = 0
    state.dropCounter = 0
    state.dropInterval = initDropInterval
    state.lastTime = 0

    initPlane()
    initForms()
}

export function initForms() {
    const form1 = new Form
    state.actualForm = form1
}

export function newForm() {
    const lastForm = state.actualForm
    modifyPlane(lastForm)
    state.actualForm = new Form
}

export function calcBelowCells(schema) {
    const belowCells = []
    const columns = schema.length
    const rows = schema[0].length

    for (let column = 0; column < columns; column++) {
        let first = true
        let inferior
        for (let row = 0; row < rows; row++) {
            if (schema[row][column] === 0) continue
            const cell = { "x": column, "y": row }
            if (first) {
                inferior = cell
                first = false
            } else {
                if (cell.y > inferior.y) {
                    inferior = cell
                }
            }
        }
        if (inferior) belowCells.push(inferior)
    }
    return belowCells
}

export function isTouchingGround(form) {
    const cells = form.belowCells
    const posX = form.x / BoxS
    const posY = form.y / BoxS
    const table = state.plane
    for (const cell of cells) {
        const cellX = cell.x
        const cellY = cell.y
        if (table[posY + cellY + 1][cellX + posX] != 0) return true
    }
    return false
}

export function modifyPlane(form) {
    const posX = form.x
    const posY = form.y
    const schema = form.schema

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const cellX = x * BoxS
            const cellY = y * BoxS

            const totalX = (posX + cellX) / BoxS
            const totalY = (posY + cellY) / BoxS

            const val = schema[y][x]
            const isValid = val != 0 ? true : false
            if (isValid) state.plane[totalY][totalX] = form.color
        }
    }
}

export function isRowComplete() {
    const plane = state.plane
    const columns = plane[0].length
    const lastColumnIndex = columns - 1
    const rows = plane.length

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (plane[row][column] === 0) {
                break
            } else {
                if (column === lastColumnIndex) return row
            }
        }
    }
}

export function handleCompletedRow() {
    const row = isRowComplete()
    if (row) deleteRow(row)
}

export function deleteRow(row) {
    state.plane.splice(row, 1)
    state.plane.unshift(new Array(widthInBoxs).fill(0))
    handleCompletedRow()
}

export function renderCell(initX, initY, color, lineBorder = 1) {
    state.ctx.save()

    const primaryColor = color.primaryColor
    const secondaryColor = color.secondaryColor
    const thirdColor = color.thirdColor

    const halfL = lineBorder / 2

    const x = initX
    const y = initY + halfL

    state.ctx.fillStyle = primaryColor

    state.ctx.fillRect(initX, initY, BoxS, BoxS)


    state.ctx.lineWidth = lineBorder

    state.ctx.strokeStyle = secondaryColor

    state.ctx.beginPath()   //Up
    state.ctx.moveTo(x, y)
    state.ctx.lineTo(x + BoxS, y)
    state.ctx.stroke()

    state.ctx.beginPath() //Left
    state.ctx.moveTo(x, y)
    state.ctx.lineTo(x, y + BoxS)
    state.ctx.stroke()


    state.ctx.strokeStyle = thirdColor

    state.ctx.beginPath()   //Down
    state.ctx.moveTo(x, y + BoxS)
    state.ctx.lineTo(x + BoxS, y + BoxS - 2 * (halfL))
    state.ctx.stroke()


    state.ctx.beginPath()   //Right
    state.ctx.moveTo(x + BoxS, y)
    state.ctx.lineTo(x + BoxS, y + BoxS)
    state.ctx.stroke()

    state.ctx.restore()
}
export function canMove(where, form) {

    let whereToSeeInX
    if (where === "right") {
        whereToSeeInX = 1
    } else if (where === "left") {
        whereToSeeInX = -1
    } else if(where==="nowhere"){
        whereToSeeInX=0
    } else {
        console.error("invalid 'where' in function 'canMoveHoriz'")
    }

    const table = state.plane
    const schema = form.schema
    const posXInBoxs = form.x / BoxS
    const posYInBoxs = form.y / BoxS

    for (let schemaY = 0; schemaY < schema.length; schemaY++) {
        for (let schemaX = 0; schemaX < schema[0].length; schemaX++) {
            const schemaCellVal = schema[schemaY][schemaX]

            if (schemaCellVal === 2 || whereToSeeInX==0 && schemaCellVal!=0) {
                const posX = posXInBoxs + schemaX + whereToSeeInX
                const posY = posYInBoxs + schemaY
                const tableCellVal = table[posY][posX]
                if (tableCellVal != 0) {    //Hay un bloque
                    return false
                }

                if(posX>state.plane[0].length-1 || posX<0||posY>state.plane.length-1){    //Está fuera del plano
                    console.log(posX, schema[0].length-1)
                    return false
                }

            }

        }
    }

    return true
}

export function haveLost(){
    const text="Press 'R' to restart"
    const fontSize=30
    const centerX=Math.floor(canvasWidth/2)
    const centerY=Math.floor(canvasHeight/2)

    state.ctx.save()

    state.ctx.fillStyle="#5f5e5885"
    state.ctx.fillRect(0,0,canvasWidth,canvasHeight)

    state.ctx.fillStyle="#d6d46c"
    state.ctx.font = `${fontSize}px sans-serif`
    state.ctx.textAlign="center"
    state.ctx.textBaseLine="middle"

    state.ctx.fillText(text,centerX,centerY)

    state.ctx.restore()
}