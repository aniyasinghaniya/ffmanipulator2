var smallbig="";
lwristx=0;
rwristx=0;
noseX=0;
noseY=0;
var diff=30;
function preload(){
    smallbig=loadImage('https://i.postimg.cc/L4cxRBB0/painting.png');

}
function setup(){
    canvas=createCanvas(600,275);
    canvas.position(600,);
    video=createCapture(VIDEO);
    video.position(0,245);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    alert("THE MAGIC BOX JUST ARRIVED");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwristx=results[0].pose.leftWrist.x;
        rwristx=results[0].pose.rightWrist.x;
        noseX=results[0].pose.nose.x-300;
        noseY=results[0].pose.nose.y-150;
        diff=lwristx-rwristx;
        
    }else{
        alert("A MONSTER ERROR OCCURED");
    }

}
function draw(){
    background('lime');
   textSize(diff);
    document.getElementById("handw").innerHTML=diff;
    fill('blue');
    text('MADHAV',noseX,noseY);
}
