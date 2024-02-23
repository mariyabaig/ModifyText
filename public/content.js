// Extract text content from the screen
const text = document.body.innerText;

// Send the extracted text to the background script
chrome.runtime.sendMessage({ text: text });
