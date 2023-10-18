moustacheX = 0;
moustacheY = 0;
function preload(){
bigode = loadImage('https://i.postimg.cc/2j0NfzFj/moustache-icon-132185.png');
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Modelo iniciado!");
}
function draw(){
    image(video, 0, 0, 300,300)
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(bigode, moustacheX, moustacheY, 30, 30);
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("Bigode x = "+results[0].pose.nose.x);
    console.log("Bigode y = "+results[0].pose.nose.y);
    moustacheX = results[0].pose.nose.x - 15;
    moustacheY = results[0].pose.nose.y + 10;
}
}
function filtro(){
    tintColor = document.getElementById("cor").value;
}

function tiraFoto(){
    save('minhaSelfie.png');
}






