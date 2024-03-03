document.addEventListener("DOMContentLoaded", function () {
  // Send a message to the content script to check if any element on the page is a text input element
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
          tabs[0].id,
          { command: "checkAnyTextInputElement" },
          function (response) {
              if (chrome.runtime.lastError) {
                  console.error(chrome.runtime.lastError.message);
              } else if (response !== undefined) {
                  console.log("Is there any text input element on the page?", response.hasTextInputElement);
              } else {
                  console.error("No response received from content script");
              }
          }
      );
  });
});
