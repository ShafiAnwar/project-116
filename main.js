//project 116 starts here

noseX=0;
nosey=0;
    function preload(){
joker_hat=loadImage('https://i.postimg.cc/Gh1PwTFt/joker-s-hat.png');
    }
    function setup(){
        canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400)
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
    }
    function draw(){
      image(video,0,0,400,400)
      image(joker_hat,noseX,nosey,100,100);
    }
function modelLoaded(){
  console.log("Model Loaded!!!!!");
}
function gotPose(result){
  if(result.length>0){
console.log(result);
console.log(result[0].pose.nose.x);
console.log(result[0].pose.nose.y);
noseX=result[0].pose.nose.x-30;
nosey=result[0].pose.nose.y-100;


  }
}





function take_snapshot(){
  save("student_png");
}
