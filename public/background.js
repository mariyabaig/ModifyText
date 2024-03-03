
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
console.log("HI, THIS IS BACKGROUND.JS")
    if (message && message.text) {
      
        console.log("Text from the screen:", message.text);
    }
});
