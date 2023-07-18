var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        if (Content == "Toma mi selfie")
        {
            console.log("tomando selfie---");
            speak();
        }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Tomando tu selfie en 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
        
    }, 5000);
}

Webcam.set({
    witdh: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id="selfie_image1" src="'+ data_uri +'">';
    });
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="'+ data_uri +'">';
    });
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML = '<img id="selfie_image3" src="'+ data_uri +'">';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}