function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 馬卡龍色背景（淡粉或薄荷可調）
  background(255, 228, 225);

  // 臉部
  fill(255, 225, 150); // 淺黃色
  stroke(0);
  strokeWeight(4);
  ellipse(width/2, height/2, 300, 300);

  // 眼睛
  fill(0);
  noStroke();
  ellipse(width/2 - 60, height/2 - 40, 30, 30);
  ellipse(width/2 + 60, height/2 - 40, 30, 30);

  // 微笑
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(width/2, height/2 + 20, 150, 100, 0, PI);

  // 粉紅腮紅
  noStroke();
  fill(255, 182, 193, 180);
  ellipse(width/2 - 80, height/2 + 20, 50, 30);
  ellipse(width/2 + 80, height/2 + 20, 50, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}