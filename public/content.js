
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    
    if (message && message.command === "grabText") {
       
        const text = document.body.innerText;
       
        sendResponse({ text: text });
    }
});
