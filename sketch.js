
function setup() {
  createCanvas(400, 400);
  background("white");
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fireBrush(mouseX, mouseY);
  }
}

  function fireBrush(x, y) {
    x = mouseX + random(-20, 20);
    y = mouseY + random(-20, 20);
    
    let diameter = random(10, 30);
    let red = random(200, 255);
    let green = 0;
    let blue = 0;
    let opacity = random(100);
    /*let randomX = mouseX + random(-20, 20);
    let randomY = mouseY + random(-20, 20);*/
    
    diameter = random(10, 30);
    red = random(200, 255);
    green = 0;
    blue = 0;
    opacity = random(100);
    if (diameter < 20) {
      green =0;
      opacity =random(10, 40);
    } else {
      green =random(100,200);
      opacity =random(40,70);
    }
    fill(random(200, 255), green, blue, opacity);
    circle(x, y, diameter);
    
}