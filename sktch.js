function setup() {
    createCanvas(800, 800);
    background("white");
  }
  
  function draw() {
    fill("blue");
    
    if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
  }