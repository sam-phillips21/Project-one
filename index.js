// console.log('js is linked and working')
//function moves player and allows mountianeer
//function to generate cracks in play board
//function for collision detection of player and crack in ice
//function to remove a life if player falls in ice
//function ?math.random? to generate cracks in ice
// function to loop play board
//?function to speed up play board: maybe due to hypothermia, player must move faster through the ice.
//timer function= time played = points earned
//function to make player reset after death; while score remains
//function to high score board with three user inputs that logs screen and submit highscore button
//Ten plus functions to make the game work.
//step one: move player
//step two: generate cracks
//step three: loop cracks
// space bar starts game

const canvas = document.getElementById('canvas');
const movement = document.getElementById('movement');
const status = document.getElementById('status');
const ctx = canvas.getContext('2d');
// canvas.setAttribute('width', getComputedStyle(game)['width']);
// canvas.setAttribute('height', getComputedStyle(game)['height']);

// let mtneer  = ctx.fillStyle = "red" //make class, game loop fucntion, call methods of class in loop
// ctx.fillRect(10, 65, 5, 5); //this is what we want to draw to do,
// x = true
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
    }
    
 ]

  
// class iceField {
//     constructor(x, y, width, height) {
//         this.x = x,
//         this.y = y,
//         this.width = width,
//         this.height = height,
//         this.render = function () {
//             ctx.fillStyle = this.color
//             ctx.fillRect(this.x, this.y, this.width, this.height)
//         }
//     }
// }
const mtneer = {
    x: 10,
    y: 65,
}

const drawMtneer = (mtneer) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(mtneer.x, mtneer.y, 5, 5);
}

// class newMtneer {
//     constructor(x, y, color, width, height) {
//         this.x = x,
//         this.y = y,
//         this.color = color,
//         this.width = width,
//         this.height = height,
//         this.alive = true,
//         this.speed = 15,
//         this.direction = {
//             up: false,
//             down: false,
//             left: false,
//             right: false,
//         },
//         this.setDirection = function (key) {
//             console.log('key was pressed', key)
           
        
//     }
// }
// }


const moveMtneer = () => {
    document.addEventListener('keypress', (e) => {
     if (['w', 'a', 's', 'd']) {
      moveMtneer.setDirection(e.key)
      if (key() == 'w') { this.direction.up = true }
      if (key() == 'a') { this.direction.left = true }
      if (key() == 's') { this.direction.down = true }
      if (key() == 'd') { this.direction.right = true }
    //   console.log(moveMtneer)
    }
  })
}

moveMtneer()

        // console.log(moveMtneer)
        // document.addEventListener('keypress', (event) => {
        //     console.log(event)
        // })



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

const gameLoop = () => {
    // console.log('this is running')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawMtneer(mtneer);
    drawIce(ice);
    moveLeft(ice)
    // mtneer.render()
    // mtneer.moveMtneer()
    

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
    
