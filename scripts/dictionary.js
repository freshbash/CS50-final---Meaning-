chrome.contextMenus.create(
    {
        id: "foo",
        title: "click",
        contexts: ["selection"]
    }
);

chrome.contextMenus.onClicked.addListener(
    function(clickData){
        console.log(clickData.selectionText);
    }
);
