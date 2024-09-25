let btn = document.querySelector("#btn");
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = 'hi-IN'; // Hindi with GB accent

    // Corrected the case of speechSynthesis
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let time = new Date();
    let hour = time.getHours();
    if(hour>=0 && hour<12){
        speak("Good Morning Sir");
    }
    else if(hour>=12 && hour<16){
        speak("Good Afternoon Sir");
    }
    else{
        speak("Good Evening Sir");
    }

}

// window.addEventListener('load',()=>{
//     wishMe();
// })

let speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechrecognition();
recognition.onresult=(event)=>{
    let currrentIndex=event.resultIndex;
    let transcript = event.results[currrentIndex][0].transcript;
    content.innerText=transcript;
    // console.log(event);
    takeCommand(transcript);
}

btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display="block"
})

function takeCommand(message) {
    if (message.toLowerCase().includes("Hello") || message.toLowerCase().includes("hii")) {
        speak("Hello Sir, How can I help you?");
    }
    else if(message.toLowerCase().includes("who are you")){
        speak("I am virtual assistant , created by Rajesh sir");
    }
    else if(message.toLowerCase().includes("open youtube")){
        speak("Opening youtube");
        window.open("https://www.youtube.com", "_blank");
    }
    else if(message.toLowerCase().includes("open google")){
        speak("Opening google");
        window.open("https://www.google.com", "_blank");
    }
    else if(message.toLowerCase().includes("open instagram")){
        speak("Opening instagram");
        window.open("https://www.instagram.com", "_blank");
    }
    else if(message.toLowerCase().includes("open facebook")){
        speak("Opening facebook");
        window.open("https://www.facebook.com", "_blank");
    }
    else if(message.toLowerCase().includes("open whatsapp")){
        speak("Opening whatsapp");
        window.open("https://www.whatsapp.com", "_blank");
    }
    else if(message.toLowerCase().includes("open linkedin")){
        speak("Opening linkedin");
        window.open("https://www.linkedin.com", "_blank");
    }
    else if(message.toLowerCase().includes("open calculator")){
        speak("Opening calculator");
        window.open("calculator://");
    }
    else if(message.toLowerCase().includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time);
    }
    else if(message.toLowerCase().includes("day")){
        let day = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(day);
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("shifra","")|| message.replace("shipra","")}`)
        window.open(`https://www.google.com/search?q=${message.replace("shifra","")|| message.replace("shipra","")}`)
    }
}
