document.addEventListener("DOMContentLoaded", function() {    
    console.log("sending load request...");
    chrome.runtime.sendMessage({"ready": true}, function(response) {
        console.log("Message received!");
        document.querySelector("#display").innerHTML = response.text;
    });
});
