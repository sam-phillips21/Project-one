// console.log('js is linked and working')
//function moves player and allows mountianeer
//function to generate cracks in play board
//function for collision detection of player and crack in ice
//function to remove a life if player falls in ice
//step one: move player
//step two: generate cracks
//step three: loop cracks
// space bar starts game

const canvas = document.getElementById('canvas');
const movement = document.getElementById('movement');
const status = document.getElementById('status');
const ctx = canvas.getContext('2d');

const ice = [
    {
        x: 40,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 80,
        y: 0,
        width: 10,
        height: 60,
    }, 
     {
        x: 110,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 160,
        y: 0,
        width: 10,
        height: 60,
    },
    {
        x: 180,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 220,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 250,
        y: 0,
        width: 10,
        height: 90,
    },
    {
        x: 60,
        y: 50,
        width: 10,
        height: 75
    },
    {
        x: 140,
        y: 40,
        width: 10,
        height: 100
    },
    {
        x: 120,
        y: 80,
        width: 10,
        height: 75
    },
    {
        x: 180,
        y: 100,
        width: 10,
        height: 50
    },
    {
        x: 220,
        y: 100,
        width: 10,
        height: 75
    },
    {
        x: 260,
        y: 100,
        width: 10,
        height: 75
    },
    {
        x: 40,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 80,
        y: 0,
        width: 10,
        height: 60,
    }, 
     {
        x: 110,
        y: 0,
        width: 10,
        height: 75,
    },
    {
        x: 160,
        y: 0,
        width: 10,
        height: 60,
    },
    
 ]
class Mtneer {
    constructor(x, y, color, width, height, alive) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.width = width,
        this.height = height,
        this.alive = true,
        this.speed = 15,
        this.direction = {
            up: false,
            down: false,
            left: false,
            right: false,
        },
        this.setDirection = function (key) {

            if (['w', 'a', 's', 'd']) {
                if (event.key == 'w') {this.direction.up = true}       
            }
        }, 
        this.drawMtneer = () => {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
const mtneerSam = new Mtneer(10, 65, 'red', 2, 2, true)

const listenForKeysFunction = (character) => {
        document.addEventListener('keydown', (event) => {
        let keypress = event.key
        if (keypress == 'w') { character.y -= 3 }
        if (keypress == 'a') { character.x -= 3 }
        if (keypress == 's') { character.y += 3 }
        if (keypress == 'd') { character.x += 3 }  
  })
}
listenForKeysFunction(mtneerSam)
const drawIce = (ice) => {
   for (let i = 0; i < ice.length; i++) {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(ice[i].x, ice[i].y, ice[i].width, ice[i].height)
   }
    
}
const moveLeft = (ice) => {
    ice.forEach((i) => {
        i.x = i.x - 1
    })  
}
const collisionDetection = () => {
   
    ice.forEach((i) => {
        if( mtneerSam.x < i.width + i.height
            && mtneerSam.x + mtneerSam.width > i.x
            && mtneerSam.y < i.y + i.height
            && mtneerSam.y + mtneerSam.height > i.y) {
                mtneerSam.alive = false 
                pauseGameLoop()
            }
    
    })
    
}
const gameLoop = () => {
    // console.log('this is running')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // drawMtneer(mtneer);
    drawIce(ice)
    moveLeft(ice)
    mtneerSam.drawMtneer()
    collisionDetection()

}
const pauseGameLoop = () => {
    if (mtneerSam.alive == false)
    setTimeout(gameLoop)
    ctx.font = "30px Arial";
    ctx.strokeText("you have fallen in the crack!", 10, 50);
}

setInterval(gameLoop,500) //16.6 60fps, 


let reset = ((pauseGameLoop) => {
    resetButton()
    })
    document.addEventListener('DOMContentLoaded', resetButton)
    resetBtn.addEventListener('click', reset)