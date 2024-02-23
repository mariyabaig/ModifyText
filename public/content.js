// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message contains the command to grab text
    if (message && message.command === "grabText") {
        // Extract text content from the screen
        const text = document.body.innerText;
        // Send the extracted text back to the popup script
        chrome.runtime.sendMessage({ text: text });
    }
});
