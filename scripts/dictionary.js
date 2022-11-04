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
//             console.log(result, typeof(result));
//         });
//     }
// );

chrome.contextMenus.onClicked.addListener((info, tab) => {    
    chrome.windows.create({
      width: 200,
      height: 400,
      top: 140,
      left: 1000,
      type: "popup",
      url: "templates/defn.html"
    });

    chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
        if (msg.ready) {
            console.log("Fire away!");
            sendResponse({"text" : info.selectionText});
        }
    });
});










