chrome.contextMenus.create(
    {
        id: "foo",
        title: "Search %s",
        contexts: ["selection"]
    }
);

// chrome.contextMenus.onClicked.addListener(
//     function(clickData){
//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${clickData.selectionText}`)
//         .then((response) => response.json())
//         .then((result) => {
//             console.log(result);
//         });
//     }
// );

chrome.contextMenus.onClicked.addListener((info, tab) => {
    // Service worker cannot access the DOM, so alert() isn't available.
    //  alert("Hello");
    chrome.windows.create({
      width: 350,
      height: 250,
      top: 140,
      left: 1000,
      type: "popup",
      url: "alert.html"
    });
    console.log("Hello");
    // chrome.runtime.sendMessage({"defn": "hola"});
});










