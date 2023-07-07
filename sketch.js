let myFont;
/* 
let noiseVal;
let noiseScale = 0.02;

let xSpeed = [];
let ySpeed = [];

let t;

let x = [];
let y = [];

let yoff = 20;

let yL;

let count = 9;

let bColor = 0; */

 let flag = true;

let palette = [[225, 220, 255], [205,208, 239], [194, 227, 248], [203, 203, 231], [84, 189, 240], [143, 200, 239], [197, 237, 252], [211, 210, 234], [246, 240, 252], [133, 214, 242]];

let xPos;
let yPos;

let xPos2;
let yPos2;

let amount;
let distance;

let counter;
let song;
let timeVal;
let bpm;
let quarternote;
let randomInt;
let measure;

let bx1;
let bx2;
let by1;
let by2;
let ax1;
let ay1;
let ax2;
let ay2;
let bSpeed1;
let bSpeed2
let lColorSpeed;
let stopper;
let lineColor;

let txPos;
let tyPos;

function preload() {
    myFont = loadFont('./resources/Silk\ Serif\ ExtraLight.otf');
    soundFormats('mp3');
    song = loadSound('./resources/everything-goes-on.wav');
}

function setup() {
    let cnv = createCanvas(900, 600);
    cnv.mousePressed(canvasPressed);
    frameRate(10)
    img = loadImage('./resources/pngegg.png');
    img2 = loadImage('./resources/image.png');

    /* amount = 30;

    distance = width / amount;

    t = 0.01
    yL = height;
    for (let i = 0; i < count; i++) {
        x[i] = i  + random(i, width);
        if (x[i - 1] - x[i] <= 80) {
            x[i] = i  + random(i, width) - 40;
        }
        y[i] = randomGaussian(height - 20, yoff);
        
        t += 0.001
        ySpeed[i] = random(2, 5);
        
        
    } */

    bpm = 160
    quarterNote = Math.floor(60000 / bpm);
    timeVal = quarterNote;
    counter = 0;
    measure = 32;
    setInterval(() => {
        /* randomInt = random(0, 10);
        console.log(randomInt);
        if (randomInt <= 2) {
        }
            timeVal = quarterNote / 32;
        if (counter >= 16 && timeVal === quarterNote) {
            timeVal = quarterNote / 2; 
            //console.log(timeVal);
            counter = 0;
        } else if (counter >= 16 && timeVal !== quarterNote){
            timeVal = quarterNote;
            //console.log(timeVal);
            counter = 0;
        }
        counter++
        flag = !flag;
        xPos2 = random(width / 8, width * 0.875 - 300);
        yPos2 = random(height / 4, height * 0.75 - 200); */
        
        //console.log(timeVal);


    }, 250)
    bx1 = 0;
    bx2 = width;
    by1 = height;
    by2 = 0;
    ax1 = bx1;
    ay1 = by1;
    ax2 = width / 2;
    ay2 = by2;
    bSpeed1 = 4;
    bSpeed2 = -4;
    stopper = true;
    lColorSpeed = 1;
    lineColor = 0;
}



function draw() {
    
    let lineColor = Math.floor(Math.random() * palette.length)
    let weight = 2;
    //let n  = map(noise(t), 0, 1, 0, 200);
    background(palette[lineColor], 60)
    /* if (Math.floor(frameCount) === 111) {
        background(0);
        flag = !flag;
        palette[lineColor] = 0;
        weight = 1;
        txPos = width / 3 - 150;
        tyPos = height / 4;
        noLoop();
    } */

    
   /*  for (let xpp = 0; xpp < width; xpp++) {
        for (let ypp = 0; ypp < height; ypp++) {
            pointColor = Math.floor(Math.random() * palette.length)
            fill(pointColor)
            ellipse(20, 20, xpp * 20, ypp * 20)
        }
    } */
    randomInt = random(0, 10);

    if (counter === bpm / measure) {
        change();
        //background(palette[lineColor], 10)
    } 
    if (counter > bpm / measure) {
        counter = 0;
        //background(palette[lineColor], 10)
    }
    counter++
    if (flag) {
        noFillRect();
        font();
        image(img2, parseFloat(xPos), 250, 300, 200);
    } else if (!flag) {
        fillRect();
        wFont();
        image(img, xPos, height / 2, 300, 200);
    }
    
    
    noFill();
    strokeWeight(weight)
    stroke(palette[lineColor]);
    if (stopper) {
        lineColor++;
    } else {
        lineColor--;
    }

    if (lineColor === 255) {
        stopper = false;
    }
    if (lineColor === -1) {
        stopper = true;
    }
    //console.log(lineColor);

    bezier(bx1, by1, ax1, ay1, ax2, ay2, bx2, by2);

    by1 -= bSpeed1;
    by2 -= bSpeed2;

    // console.log(by1);
    // console.log(by2);
    if (by1 < 0 || by1 > height) {
        bSpeed1 = bSpeed1 * -1;
    }
    if (by2 < 0 || by2 > height) {
        bSpeed2 = bSpeed2 * -1;
    }
    /* if (ay1 > 0 - height|| ay1 > height) {
        bSpeed1 = bSpeed1 * -1;
    }
    if (ay2 < 0  || ay2 > height) {
        bSpeed2 = bSpeed2 * -1;
    } */

    //perlinShapes()
}

function font() {
    stroke(255);
    strokeWeight(0.3)
    //noStroke()
    fill(255)
    textAlign(CENTER);
    textFont(myFont);
    textSize(22.5);
    text(`" d o n \' t   t r y   t o   m a k e   y o u r s e l f   r e m e m b e r . "`, width / 2, height / 2);
    text(`" 自 分 に 思 い 出 さ せ よ う と し な い で く だ さ い "`, txPos + 140, tyPos + 100);
    text(Math.floor(frameCount /* / (bpm / measure) */) * 2, width / 2, height / 3)
}

function wFont() {
   
    noStroke()
    fill(0)
    textAlign(CENTER);
    textFont(myFont);
    textSize(22.5);
    text(`" d o n \' t   t r y   t o   m a k e   y o u r s e l f   r e m e m b e r . "`, width / 2, height / 2);
    text(`" 自 分 に 思 い 出 さ せ よ う と し な い で く だ さ い "`, txPos + 140, tyPos + 100);
    text(Math.floor(frameCount /* / (bpm / measure) */), width / 2, height / 3)
    
}
function noFillRect() {
    strokeWeight(0.3)
    stroke(255);
    fill(0);

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

function canvasPressed() {
    song.play();
}

const change = () => {
    flag = !flag;
    xPos = random(width / 8, width * 0.875 - 300);
    yPos = random(height / 4, height * 0.75 - 200);
    txPos = random(width / 8, width * 0.875 - 300);
    tyPos = random(height / 4, height * 0.75 - 300);
}

const perlinShapes = () => {
    for (let i = 0; i < count; i++) {
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
        
        
    }

    let previousX = 0;
    beginShape();
    let xoff = 0;
    for (let a = 0; a < width; a++) {
        stroke(palette[7])
        strokeWeight(2.5)
        noFill()
        // line(previousX + a * distance, n, previousX, n);
        // previousX = a * distance + previousX
        let yV = noise(xoff) * n + n;
        vertex(a, yV);
        xoff += 0.008
        t += 0.000005;
    }
    endShape();

    beginShape();
    xoff = 0;
    for (let a = 0; a < width; a++) {
        stroke(palette[7])
        strokeWeight(2.5)
        noFill()
        // line(previousX + a * distance, n, previousX, n);
        // previousX = a * distance + previousX
        let yV = noise(xoff) * n;
        vertex(a, yV + 5);
        xoff += 0.005
        t += 0.000009;
    }
    endShape();
}