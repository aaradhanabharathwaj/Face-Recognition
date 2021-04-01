Webcam.set({
    height: 300,
    width: 400,
    image_format:'png',
    png_quality:1000
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function click_image(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture" src="'+data_uri+'"/>';
        })
    }
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oQZTquJDU/model.json",modelLoaded);
    function modelLoaded(){
        console.log("modelLoaded");    
    }
function identify(){
    img=document.getElementById("capture");
    classifier.classify(img, gotResult);    
}
function gotResult(error,results){
    if (error){
        console.error(error);
            }
            else{
                console.log(results);
                document.getElementById("result_face").innerHTML=results[0].label;
                document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
            }
}