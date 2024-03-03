// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message contains the command to grab HTML content
    if (message && message.command === "grabHTML") {
        // Extract HTML content from the entire webpage
        const htmlContent = document.documentElement.outerHTML;
        // Send the HTML content back to the popup script
        sendResponse({ htmlContent: htmlContent });
    }
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
});
