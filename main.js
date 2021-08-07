Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});


Webcam.attach("#camera");

function take_img(){
    Webcam.snap(function(url){
        document.getElementById("img_taken").innerHTML='<img src="'+url+'" id="object_img"/>';
    }
    );
}

console.log(ml5.version);

model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ELg0jObr/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is ready to use")
}

function identify_img(){
    img=document.getElementById("object_img");
    model.classify(img,result);
}

function result(error,answer){
    if(error){
        console.error(error);
 }
 else{
     console.log(answer);
     document.getElementById("object").innerHTML= answer[0].label;
     document.getElementById("accuracy").innerHTML=answer[0].confidence.toFixed(2);
 }
}