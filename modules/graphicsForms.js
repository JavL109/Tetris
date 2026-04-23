export const colors=[
    {"primaryColor":"#f52525","secondaryColor":"#9a2828","thirdColor":"#e86664"},   //red
    {"primaryColor":"#2851c2","secondaryColor":"#193277","thirdColor":"#8495c3"},   //blue
    {"primaryColor":"#08a422","secondaryColor":"#067419","thirdColor":"#85ae8b"},  //green
    {"primaryColor":"#dcd819","secondaryColor":"#79770f","thirdColor":"#d1d09e"},   //yellow
    {"primaryColor":"#c11bc1","secondaryColor":"#610e61","thirdColor":"#b762b7"}, //violet
    {"primaryColor":"#d26b17","secondaryColor":"#4d2809","thirdColor":"#cbac91"},   //orange
    {"primaryColor":"#5fd6e6","secondaryColor":"#2b636b","thirdColor":"#a1ccd0"},    //cian
    {"primaryColor":"#b5e94d","secondaryColor":"#556d24","thirdColor":"#d3e4ab"},   //yellow-green
]

let lastColorPos=colors.length-1

function getColor(){
    const color=colors[lastColorPos]
    lastColorPos-=1
    if(lastColorPos<0)lastColorPos=colors.length-1
    return color
}

const graphicsForms=[
    { "name": "formLine", "color":getColor(),"positions": [          //|
        [                   
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
        ],
        [
            [0,0,0,0],
            [2,1,1,2],
            [0,0,0,0],
            [0,0,0,0],
        ]
    ]},

    { "name": "formO", "color":getColor(),"positions": [          //O
        [
            [0,0,0,0],
            [0,2,2,0],
            [0,2,2,0],
            [0,0,0,0],
        ],
    ]},

    { "name": "formZ", "color":getColor(),"positions": [          //Z      
        [
            [0,0,0,0],
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,2,2,0],
            [0,0,2,2],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,0,2,0],
            [0,2,2,0],
            [0,2,0,0],
        ],    
    ]},

    { "name": "formZMirror", "color":getColor(),"positions": [          //Z espejo
        [
            [0,0,0,0],
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,2,0,0],
            [0,2,2,0],
            [0,0,2,0],
        ],    
    ]},

    { "name": "formL", "color":getColor(),"positions": [          //L
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,2,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [2,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
        ],
        [
            [0,0,0,0],
            [0,0,0,2],
            [1,1,1,2],
            [0,0,0,0],
        ],    
    ]},

    { "name": "formJ", "color":getColor(),"positions": [          //J
        [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,1,1,0],
        ],
        [
            [0,0,0,0],
            [1,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
        ],
        [
            [0,1,1,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
        ],
        [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,1],
            [0,0,0,0],
        ],    
    ]},

    { "name": "formShortT", "color":getColor(),"positions": [          //T corta
        [
            [0,0,0,0],
            [2,1,2,0],
            [0,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,0,2,0],
            [0,2,1,2],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
        ],    
    ]},

    { "name": "formT", "color":getColor(),"positions": [          //T
        [
            [2,1,2,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [2,1,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,2,1,2],
        ],
        [
            [0,2,0,0],
            [0,2,1,2],
            [0,2,0,0],
            [0,0,0,0],
        ],    
    ]}
]

export default graphicsForms

/*

|
O
Z
Z^-1
L
J
T corta
T

*/

/*Numbers Codes
0=No pintar
1=Normal
2=izquierda
3=abajo
4=derecha
5=izquierda abajo
6=derecha abajo
7=todos

*/