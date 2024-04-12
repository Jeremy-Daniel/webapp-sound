var model; 


function sound_classifying(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    model = ml5.soundClassifier("https://storage.googleapis.com/tm-model/BZwNmejEc/model.json",modelLoaded);
}

function modelLoaded(){
    model.classify(gotResult);
}
var cat = 0;
var dog = 0;
function gotResult(error, result){
    if (error){
        console.log(error);
    } 
    else{
        console.log(result);
        var random_number_r = Math.floor(Math.random()*255) + 1;
        var random_number_g = Math.floor(Math.random()*255) + 1;
        var random_number_b = Math.floor(Math.random()*255) + 1;
        document.getElementById("sound_name").innerHTML = "I can hear: " + result[0].label;
        document.getElementById("sound_accuracy").innerHTML = "I think this sound is this " + (result[0].confidence*100).toFixed(2) +"% accurate";
        document.getElementById("sound_name").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("sound_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        var img = document.getElementById("sound_image");
        if (result[0].label == "meowing"){
            img.src = "cat.jpeg"   
        }
        else if(result[0].label == "barking"){
            img.src = "dog.jpeg";
    } 
    else if(result[0].label == "mooing"){
        img.src = "cow.jpeg";
    }
    else{
        img.src = "How-Do-Hearing-Aids-Work-1024x585-removebg-preview.png";
    }
}}