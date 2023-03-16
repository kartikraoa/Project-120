prediction_1 = ""
prediction_2 = ""

Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
  });
}
console.log('mal5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o3BtF6qq1/model.json',modelLoaded);
function modelLoaded(){
  console.log('Model Loaded!');
}
function speak(){
  var synth=window.speechSynthesis;
  speak_data_1="The First prediction is"+prediction_1;
  speak_data_2="And the second prediction is "+prediction_2;
  var utterThis=newSpeechSynthesisUtterance(speak_data+speak_data_2);
  synth.speak(utterThis);
}