// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Message received in content script:", message);
    
    // Check if the message contains the command to grab HTML content
    if (message && message.command === "grabHTML") {
        console.log("Command to grab HTML content received");

        // Extract HTML content from the entire webpage
        const htmlContent = document.documentElement.outerHTML;
        
        console.log("HTML content extracted from the webpage:", htmlContent);

        // Send the HTML content back to the popup script
        sendResponse({ htmlContent: htmlContent });
    } else {
        console.log("Unexpected message received:", message);
    }
});
