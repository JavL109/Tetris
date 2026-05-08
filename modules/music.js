import { musicRoutes } from "./config.js"
import { musicAndEffects } from "./state.js"

export function initMusic(){
    const urlBackground=musicRoutes.backgroundMusic
    const backgroundMusic=new Audio(urlBackground)
    musicAndEffects.backgroundMusic=backgroundMusic
    
    const urlCompleteRow=musicRoutes.completeRowEffect
    const completeRowEffect=new Audio(urlCompleteRow)
    musicAndEffects.completeRowEffect=completeRowEffect
    
    const urlRotate=musicRoutes.rotateEffect
    const rotateEffect=new Audio(urlRotate)
    musicAndEffects.rotateEffect=rotateEffect

    musicAndEffects.backgroundMusic.play()
    musicAndEffects.backgroundMusic.volume=0.3
    musicAndEffects.backgroundMusic.loop = true
    musicAndEffects.backgroundMusic.autoplay = true
    musicAndEffects.backgroundMusic.controls = true
}

export function completeRowMusicEffect(){
    const effect=musicAndEffects.completeRowEffect
    playMusic(effect)
}

export function rotateMusicEffect(){
    const effect = musicAndEffects.rotateEffect
    playMusic(effect)
    
}

export function playMusic(music){
    const clone=music.cloneNode()
    clone.play()
    clone.onended=()=>{clone.remove}
}