//https://youtu.be/YkPyedMS6s4

// Setting up our canvas
const canvas = template.getElementById('sandbox');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// getContext ('2d') is an object that has all of the drawing props and funcs to draw in 2D
const ctx = canvas.getContext('2d');

// This is how we create our circles
function Circle (x, y, r, c) { //(x-coord, y-coord, radius of arc, color)
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  // Horizontal and Vertical velocity
  this.dx = (Math.random() * 4) + 1; // Gives random velocity
  this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // gives random direction.
  this.dy = (Math.random() * 4) + 1;
  this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2) //CanvasPath.arc(x, y, radius, startAngle, endAngle, counterclockwise?)
    ctx.fill()
  }

  this.animate = function (){
    this.x += this.dx;
    this.y += this.dy;

    // Allows the balls to bounce within confines of the canvas by switching the velocity to a negative value when it hits the edge
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

// Just one Ball
  let ball = new Circle(200, 200, 80, 'red')
  ball.draw()

// Many balls
const balls = []; // randomly generated ball values will be pushed to here
for (let i = 0; i < 20; i++) { // iterative expression
  //Note: Math.random returns a value between 0-1
  let r = Math.floor(Math.random() * 30) + 15; // r = a random number between 15 and 30
  let x = Math.random() * (canvas.width - r * 2) + r; // allows x-coord to be within the canvas area && makes it so that only a full ball will spawn
  let y = Math.random() * (canvas.height - r * 2) + r; // allows y-coord to be within the canvas area 
  let c = 'green'
  balls.push(new Circle(x, y, r, c))
}

// Adds another ball on click event
canvas.addEventListener('click', function (e) {
  let r = Math.floor(Math.random() * 30) + 15;
  balls.push(new Circle(e.clientX, e.clientY, r, 'blue')) // Creates the ball at mouse click coords
})

// This will draw the balls... all of the balls... all of them.
function Update () { 
  ctx.clearRect(0, 0, canvas.width, canvas.height) // Without this the balls will create long tails behind them as they move, this way clears their tails and leaves a solid ball moving. 
  for (let i = 0; i < balls.length; i++){
    // balls[i].draw() -> This will draw a static picture
    balls[i].animate()
  }
  requestAnimationFrame(Update) // This will animate the frames
}

Update()
