function preload(){
    
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is loadsed");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        lwristx = results[0].pose.leftWrist.x;
        rwristx = results[0].pose.rightWrist.x;
        diference = floor(lwristx - rwristx);
        console.log("left wrist x is "+lwristx+",spelling is wrong right wrist x is"+rwristx+", the difference of the is "+diference);

    }
}

function draw(){
    background("#2e378f");
     fill('red');
     stroke('red');
     square(nosex,nosey,diference);
     document.getElementById("output").innerHTML = "width and height is "+diference+"px";
}