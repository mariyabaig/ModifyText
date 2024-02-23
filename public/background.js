// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message contains text
    if (message && message.text) {
        // Process the text
        console.log("Text from the screen:", message.text);
    }
});
