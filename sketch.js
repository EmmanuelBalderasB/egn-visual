let myFont;

let noiseVal;
let noiseScale = 0.02;

let xSpeed = [];
let ySpeed = [];

let t;

let x = [];
let y = [];

let yoff = 20;

let yL;;

let count = 9;

let bColor = 0;

 let flag = true;

let palette = [[225, 220, 255], [205,208, 239], [194, 227, 248], [203, 203, 231], [84, 189, 240], [143, 200, 239], [197, 237, 252], [211, 210, 234], [246, 240, 252], [133, 214, 242]];

let xPos;
let yPos;

let amount;
let distance;

function preload() {
    myFont = loadFont('./resources/Silk\ Serif\ ExtraLight.otf');
}

function setup() {
    createCanvas(900, 600);
    frameRate(60)
    img = loadImage('./resources/pngegg.png');
    img2 = loadImage('./resources/image.png');

    amount = 30;

    distance = width / amount;

    t = 0.005
    yL = height;
    for (let i = 0; i < count; i++) {
        x[i] = i  + random(i, width);
        if (x[i - 1] - x[i] <= 80) {
            x[i] = i  + random(i, width) - 40;
        }
        y[i] = randomGaussian(height - 20, yoff);
        
        t += 0.001
        ySpeed[i] = random(2, 5);
        
        
    }

    setInterval(() => {
        flag = !flag;
        xPos = random(width / 8, width * 0.875 - 300);
        yPos = random(height / 4, height * 0.75 - 200);
        console.log(flag);
    }, 2166)
}

function draw() {
    let n  = map(noise(t), 0, 1, 0, 200);
    background(0)

    if (flag) {
        noFillRect();
        font();
        image(img2, xPos, 250, 300, 200);
    } else if (!flag) {
        fillRect();
        wFont();
        image(img, xPos, height / 2, 300, 200);
    }

    /* if (bColor === 255 && frameCount % 130 === 0) {
        bColor = 0;
    } */
    /* for (let i = 0; i < count; i++) {
        xSpeed[i] = map(noise(t), 0, 1, -2, 2);
        x[i] += xSpeed[i] += 0.02
        y[i] -= ySpeed[i];
        
        if (x[i] < 0 || x[i] > width) {
            xSpeed[i] = xSpeed[i] * -1;
            console.log({negative: xSpeed[i] * -1,
            positive: xSpeed[i]});
        } 
            
        

        if(y[i] < 0) {
            y[i] = height;
        }
        
        x[i] = parseFloat(x[i]);

        strokeWeight(2)
        stroke(palette[i])
        fill(palette[i])
        ellipse(x[i], y[i], 40, 40);
        
        //ySpeed += 0.005
        
        
    } */

   
    strokeWeight(3)
    //left
    stroke(palette[3]);
    let previousX = 0;
    stroke(255)
    strokeWeight(1)
    for (let a = 0; a < width; a++) {
        line(previousX + a * distance, n, previousX + a * distance, n + 30);
        previousX = a * distance + previousX

    }
    t += 0.005;
    yL--;
    
    if(yL < 0) {
        yL = height;
    }

    
}

function font() {
    stroke(255);
    strokeWeight(0.3)
    //noStroke()
    fill(255)
    textAlign(CENTER);
    textFont(myFont);
    textSize(22.5);
    text('s t i l l  h e r e  w i t h  t h e  o n e s  t h a t  i  c a m e  w i t h ', width / 2, height / 2);
}

function wFont() {
   
    noStroke()
    fill(0)
    textAlign(CENTER);
    textFont(myFont);
    textSize(22.5);
    text('s t i l l  h e r e  w i t h  t h e  o n e s  t h a t  i  c a m e  w i t h ', width / 2, height / 2);
}
function noFillRect() {
    strokeWeight(0.3)
    stroke(255);
    noFill();

    beginShape()
    vertex(width / 8, height / 4);
    vertex(width * 0.875, height / 4);
    vertex(width * 0.875, height * 0.75);
    vertex(width / 8, height * 0.75);
    vertex(width / 8, height / 4);
    endShape()
}

function fillRect() {
    noStroke();
    fill(255);
    beginShape()
    vertex(width / 8, height / 4);
    vertex(width * 0.875, height / 4);
    vertex(width * 0.875, height * 0.75);
    vertex(width / 8, height * 0.75);
    vertex(width / 8, height / 4);
    endShape()
}