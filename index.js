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

// let mtneer = ctx.fillStyle = "red"
// ctx.fillRect(10, 65, 5, 5);

let mtneer = {
    x: 10,
    y: 65,
    dx: 5,
    dy: 5,
}

function drawMtneer() {
    ctx.fillRect(mtneer.y, mtneer.x, 0, 0);
    ctx.fillStyle = 'red';
    ctx.fill();

}
drawMtneer()
let iceOne = ctx.fillStyle = "lightBlue"
//top lines of ice
ctx.fillRect(40, 0, 10, 1000)
ctx.fillRect(80, 0, 10, 60)
ctx.fillRect(110, 0, 10, 75)
ctx.fillRect(160, 0, 10, 60)
ctx.fillRect(180, 0, 10, 75)
ctx.fillRect(220, 0, 10, 75)
ctx.fillRect(250, 0, 10, 90)
//bottom ice
ctx.fillRect(60, 50, 10, 75)
ctx.fillRect(140, 40, 10, 100 )
ctx.fillRect(120, 80, 10, 75)
ctx.fillRect(180, 100, 10, 50)
ctx.fillRect(220, 100, 10, 75)
ctx.fillRect(260, 100, 10, 75)

// let randomIce = (iceOne) => {
//     return Math.floor.fillRect(Math.random() * iceOne)
// }

// let moveMtneer = () => {

// }

// mtneer.x += mtneer.dx;
// mtneer.y += mtneer.dy;

        this.setDirection = function (key) {
            if (key.toLowerCase() == '38') { this.direction.up = true }
            if (key.toLowerCase() == '37') { this.direction.left = true }
            if (key.toLowerCase() == '40') { this.direction.down = true }
            if (key.toLowerCase() == '39') { this.direction.right = true }
        },
        this.unsetDirection = function (key) {
            if (key.toLowerCase() == '38') { this.direction.up = false }
            if (key.toLowerCase() == '37') { this.direction.left = false }
            if (key.toLowerCase() == '40') { this.direction.down = false }
            if (key.toLowerCase() == '39') { this.direction.right = false }
        }




        const keyStroke = () => {
        document.addEventListener('press key', (e) => {
            if (['32','38', '37', '40', '39'].includes(e.key))
            mtneer.setDirection(e.key)
        })}
            const keyStrokeRelease = () => {
        document.addEventListener('release key', (e) => {
            if (['32','38', '37', '40', '39'].includes(e.key)) {
                mtneer.unsetDirection(e.key)
            }
        })}

        keyStroke()
        keyStrokeRelease()
//             this.render = function () {
//                 ctx.fillStyle = this.color
//                 ctx.fillRect(this.x, this.y, this.width, this.height)
//             }


            
        
