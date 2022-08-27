function preload() {

}

function setup() {
canvas= createCanvas(400, 300)
canvas.center();
video= createCapture(VIDEO);
video.hide();

pn= ml5.poseNet(video,modelLoaded)
pn.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model has been loaded');
}

function gotPoses(results) {
 if(results.length > 0)
 {
    console.log(results);
 }
}


function draw() {
    image(video, 0, 0, 400, 300);
}

function snapshot(){
    save("clown-image.png");
}

















