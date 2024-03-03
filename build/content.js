chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Message received in content script:", message);
    // Check if the message contains the command to grab text
    if (message && message.command === "grabText") {
        // Extract text content from the screen
        const text = document.body.innerText;
        console.log("Text extracted from the screen:", text);
        // Send the extracted text back to the popup script
        sendResponse({ text: text });
    }
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
});
