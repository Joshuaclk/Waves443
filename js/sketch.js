let t = 6; 

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5container");
    noStroke();
    fill(1, 199, 255);
}

function draw() {
    background(17, 0, 147);
  
  
    for (let x = 0; x <= width; x = x + 1) {
      for (let y = 0; y <= height; y = y +70) {
        
       xAngle = map(mouseX, 0, width, 3 * PI, 5 * PI, true);
       yAngle = map(mouseY, 0, height, -8 * PI, 20 * PI, true);
    
       angle = xAngle * (x / width) + yAngle * (y / height);
         myX = x + 2 * cos(25 * PI * t + angle);
         myY = y + 25 * sin(2 * PI * t + angle);
  
        ellipse(myX, myY, 10);
      }
    }
  
    t = t + 0.01;
  }