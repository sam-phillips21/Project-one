
//function moves player
//function to generate cracks in play board
//function for collision detection of player and crack in ice
// function to loop play board
//timer function= time played = points earned
//step one: move player
//step two: generate cracks
//step three: loop cracks


const canvas = document.getElementById('canvas');
const movement = document.getElementById('movement');
const status = document.getElementById('status');
const ctx = canvas.getContext('2d');
let contact = false







// class Ice { 
//     constructor(x, y, color, width, height) {
//         this.x = x,
//         this.y = y,
//         this.color = color,
//         this.width = width,
//         this. alive = false
//         this.generateIce = {
//             if ( this.x <= 260, this.y <= 0, this.width = 10, this.height <= 100)
// const newCracks:new Ice(x, y, color, width, height)
//             console.log(Ice)
//             // if ( ice = 0, ice.x = 10 + ice.y <= 40)
//             // if ( ice = 0, ice.width =1 0 + ice.height <= 40)
            
//         }

//     }
// }
// newIce = { this.x && this.y && this.width && this.height }

       
//         console.log(newIce)
//         let generateIce = newIce++
const coordinateArray = [
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

    
 ]

//  class Ice {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
   
//  }

 class IceField {
    constructor() {
        this.iceField = coordinateArray;
    }
    addIce(x, y, width, height) {
    
    this.iceField.forEach((i) => {
    this.iceField.push(i)
    
    })
    console.log(this.iceField)
 }
 drawIce() {
    
    this.iceField.forEach((i) => {
    ctx.fillStyle = 'lightblue';
       ctx.fillRect(i.x, i.y , i.width, i.height)
})
 }
moveLeft() {
    this.iceField.forEach((i) => {
        (i.x = i.x-1);
    });
}
// allIce() {
//     return this.IceField;
// }
 }
 
let iceField = new IceField();
// coordinateArray.forEach((c) => {
//     iceField.addIce(c.x, c.y, c.w, c.h)
// })
// iceField.allIce()

// iceField.allIce.forEach(ice => ice.drawIce())

// iceField.moveLeft ()

// class iceField { //
//     constructor(x, y, width, height) {
//         this.x = x,
//         this.y = y,
//         this.width = width,
//         this.height = height, 
        
//             this.drawIce = () => {
//             ctx.fillStyle = 'lightblue'
//             ctx.fillRect(this.x, this.y, this.width, this.height)
//          }
//          this.moveLeft = () => {
//             this.x = this.x -1 
//            // shift or unsift to remove from the array based on position when x becomes negative 
//          }
//     }  
// }
// const mtneer = {
//     x: 10,
//     y: 65,
// }

// const drawMtneer = (mtneer) => {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(mtneer.x, mtneer.y, 5, 5);
// }

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
            // setInterval(drawMtneer, 1);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // setInterval(draw, 1);
            // this.drawMtneer();
            // clearInterval(interval);
            // requestAnimationFrame(this.drawMtneer);
            


        }

        // this.unDrawMtneer = () => {

        //     clearRect
        // }
    }
}
const mtneerSam = new Mtneer(10, 65, 'red', 2, 2, true)
    console.log(mtneerSam)

const listenForKeysFunction = (character) => {
        // console.log('inception')
        document.addEventListener('keydown', (event) => {
        // console.log(event.key)
        let keypress = event.key
        if (keypress == 'w') { character.y -= 3 }
        if (keypress == 'a') { character.x -= 3 }
        if (keypress == 's') { character.y += 3 }
        if (keypress == 'd') { character.x += 3 }   
  })
}
listenForKeysFunction(mtneerSam)
// let gameIce = []
// makes new ice object and  pushes it into game ice
//this allows us to dynamically edit the game ice pieces in play and in our game loop easily call all of the necessary class methods for our game. 
//i may want to call this function a Lot. but i need game loop to do it in a way that makes sense. to accomplish this, i should consider adding a counter outside of the game loop that increments with every loop of the game that we can run checks against to generate ice.
// const generateIce = () => { //add params to create diffrent ice pieces for game loop
//     gameIce.push (new iceField (40, 0, 10, 75))
    
    // gameIce.push (new iceField (80, 0, 10, 60))
    // setInterval(generateIce, 10000)
    // gameIce.push (new iceField (110, 0, 10, 75))
    // setInterval(generateIce, 15000)
    // gameIce.push (new iceField (160, 0, 10, 60))
    // setInterval(generateIce, 20000)
    // gameIce.push (new iceField (180, 0, 10, 75))
    // setInterval(generateIce, 25000)
    // gameIce.push (new iceField (220, 0, 10, 75))
    // setInterval(generateIce, 30000)
    // gameIce.push (new iceField (250, 0, 10, 90))
    // setInterval(generateIce, 35000)
    // gameIce.push (new iceField (60, 0, 10, 75))
    // setInterval(generateIce, 40000)
    // gameIce.push (new iceField (140, 50, 10, 75))
    // setInterval(generateIce, 45000)
    // gameIce.push (new iceField (120, 80, 10, 75))
    // setInterval(generateIce, 50000)
    // gameIce.push (new iceField (180, 100, 10, 50))
    // setInterval(generateIce, 55000)
    // gameIce.push (new iceField (220, 100, 10, 75))
    // setInterval(generateIce, 60000)
    // gameIce.push (new iceField (260, 0, 10, 75))
    // setInterval(generateIce, 65000)

    
    

// }

// generateIce ()


// new iceField (80, 0, 10, 60)
//add arguments here
//    for (let i = 0; i < ice.length; i++) {
//     ctx.fillStyle = 'lightblue';
//     ctx.fillRect(ice[i].x, ice[i].y, ice[i].width, ice[i].height)

// }
   
// const moveLeft = (ice) => {
//     ice.forEach((i) => {
//         i.x = i.x - 1
//     })  
// }

const collisionDetection = () => {
    
   // run collision detection for each time mtneer sam moves. mtneer sam might draw himself each time he moves to avoid random collisions 
    iceField.iceField.forEach((i) => {
        while( mtneerSam.x < i.width + i.height
            && mtneerSam.x + mtneerSam.width > i.x
            && mtneerSam.y < i.y + i.height
            && mtneerSam.y + mtneerSam.height > i.y) {
                mtneerSam.alive = false 
                contact = true
                
                // clearInterval(gameLoop)
                pauseGameLoop()
            }
                // while (contact === true ){ 
                //     console.log( 'contact')
                //  } 
                    
    })
    
}
// iceField.addIce()
const gameLoop = () => {
    // console.log('this is running')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // // moveLeft(ice)
    // gameIce.forEach((hole) => {
    //     hole.moveLeft() 
    //     hole.drawIce()
        
    // } )
    mtneerSam.drawMtneer()
  iceField.drawIce()
    iceField.moveLeft()
      collisionDetection()
      ctx.font = "10px Arial";
      ctx.strokeText("You have fallen to you death", 10, 50);
   
    // mtneer.render()
    // mtneer.moveMtneer()
    
// 
}
// idea is to make game loop stop if mtneer falls in the ice.
const pauseGameLoop = () => {
    if (mtneerSam.alive == false)
    clearInterval(gameLoop)
    ctx.font = "10px Arial";
    ctx.strokeText("You have fallen to you death", 10, 50);
}

setInterval(gameLoop,500) //16.6 60fps, 




// const ice =
// ctx.fillStyle = "lightBlue"
//top lines of ice
// ctx.fillRect(40, 0, 10, 75)
// ctx.fillRect(80, 0, 10, 60)
// ctx.fillRect(110, 0, 10, 75)
// ctx.fillRect(160, 0, 10, 60)
// ctx.fillRect(180, 0, 10, 75)
// ctx.fillRect(220, 0, 10, 75)
// ctx.fillRect(250, 0, 10, 90)
// //bottom ice
// ctx.fillRect(60, 50, 10, 75)
// ctx.fillRect(140, 40, 10, 100)
// ctx.fillRect(120, 80, 10, 75)
// ctx.fillRect(180, 100, 10, 50)
// ctx.fillRect(220, 100, 10, 75)
// ctx.fillRect(260, 100, 10, 75)


// class ice {
//     constructor(x, y, width, height) {
//         this.x = x,
//         this.y = y,
//         this.width = width,
//         this.height = height,
    
    
// ctxArray = ['ctx.fillRect(40, 0, 10, 1000)', 'ctx.fillRect(80, 0, 10, 60)', 'ctx.fillRect(110, 0, 10, 75)', 'ctx.fillRect(160, 0, 10, 60)' , 'ctx.fillRect(180, 0, 10, 75), 'ctx.fillRect(220, 0, 10, 75)', 'ctx.fillRect(250, 0, 10, 90)', 'ctx.fillRect(60, 50, 10, 75)', 'ctx.fillRect(140, 40, 10, 100)' , 'ctx.fillRect(120, 80, 10, 75)', 'ctx.fillRect(180, 100, 10, 50)', 'ctx.fillRect(220, 100, 10, 75)', 'ctx.fillRect(260, 100, 10, 75)']





 
//this is main game loop. use set interval. 
// first thing loop does: clear the board.
//2. calculate new positions of everything
//3. detect collisions
//4. handle other game logic
//5. draw positions 
//6. 
// let randomIce = (iceOne) => {
//     return Math.floor.fillRect(Math.random() * iceOne)
// }

//             this.render = function () {
//                 ctx.fillStyle = this.color
//                 ctx.fillRect(this.x, this.y, this.width, this.height)
//             }
    
