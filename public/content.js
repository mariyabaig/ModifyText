// Listen for messages from the popup script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command === "checkAnyTextInputElement") {
        // Check if any element on the page is a text input element
        const hasTextInputElement = checkAnyTextInputElement();
        // Send the result back to the popup script
        sendResponse({ hasTextInputElement: hasTextInputElement });
    }
    // Return true to indicate that sendResponse will be called asynchronously
    return true;
});

// Function to check if any element on the page is a text input element
function checkAnyTextInputElement() {
    const allElements = document.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        if (element.tagName === 'TEXTAREA' || (element.tagName === 'INPUT' && element.type === 'text')) {
            console.log("Found a text input element:", element);
            return true;
        }
    }
    console.log("No text input element found on the page");
    return false;
}
