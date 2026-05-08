import {BoxS, canvasHeight, canvasWidth} from "./config.js"
import {calcBelowCells, canMove, isTouchingGround, randomForm, renderCell} from "./utilities.js"
import state from "./state.js"
import { rotateMusicEffect } from "./music.js"


function borderBoxes(schema){
    let lastBox,bestRightBox,bestLeftBox,bestBottomBox
    for(let y=0;y<4;y++){
        for(let x=0;x<4;x++){
            const actualBox={"value":schema[y][x],"x":x,"y":y}
            if(actualBox.value===0)continue   //If it's empty skip
            if(lastBox){
                if(actualBox.x>bestRightBox.x)bestRightBox=actualBox
                if(actualBox.x<bestLeftBox.x)bestLeftBox=actualBox
                if(actualBox.y>bestBottomBox.y)bestBottomBox=actualBox
            } else {
                lastBox=actualBox
                bestRightBox=actualBox
                bestLeftBox=actualBox
                bestBottomBox=actualBox
            }

        }
    }
    return [bestLeftBox,bestBottomBox,bestRightBox]
}

class Form{
    constructor(){
        this.x=Math.floor(canvasWidth/2/BoxS)*BoxS-(2*BoxS)
        this.y=0
        this.form=randomForm()
        this.color=this.form.color
        this.name=this.form.name
        this.rotatePos=0
        this.maxNumOfRotatePos=this.form.positions.length
        this.schema=this.form.positions[0]
        this.active=true
        this.calcBorders()
        this.lockDown=false
        this.checkIfLose()

    }

    goDown(){
        this.checkBelow()
        const y=this.y
        if(this.y<canvasHeight-BoxS - this.bottomBorder*BoxS && this.active && !state.canPause){
            this.y += BoxS

        }
    }

    goRight(){
        const x=this.x+(BoxS*this.rightBorder)
        if(x<canvasWidth-BoxS && this.active && !state.canPause && canMove("right", this))this.x+=BoxS
    }

    goLeft(){
        const x=this.x+(BoxS*this.leftBorder)
        if(x>0 && this.active && !state.canPause && canMove("left",this))this.x-=BoxS
    }

    render(){
        const lineBorder=1.5
        for(let y=0; y<4; y++){
            for(let x=0; x<4; x++){
                const block=this.schema[y][x]
                if(block===0){continue}
                renderCell(this.x+(x*BoxS), this.y+(y*BoxS), this.color, lineBorder)
            }
        }
    }

    checkBelow(){
        if(this.bottomBorder*BoxS+this.y==canvasHeight-BoxS || isTouchingGround(this)){
            this.active=false
        } else {
            this.active=true
        }
    }

    calcBorders(){
        this.borders=(borderBoxes(this.schema))
        this.rightBorder=this.borders[2].x
        this.bottomBorder=this.borders[1].y
        this.leftBorder=this.borders[0].x
        this.belowCells=calcBelowCells(this.schema)
        }

    rotate(){
        rotateMusicEffect()
        if(this.rotatePos < this.maxNumOfRotatePos -1){
            this.rotatePos++
            this.schema=this.form.positions[this.rotatePos]

            if(!canMove("nowhere", this)){
                this.rotatePos--
            }


        } else {
            this.rotatePos=0
        }

        this.schema=this.form.positions[this.rotatePos]
        this.calcBorders()
    }

    checkIfLose(){
        if(!canMove("nowhere",this)){
            state.lose=true
        }
    }
}

export default Form