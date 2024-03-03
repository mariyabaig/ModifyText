document.addEventListener("DOMContentLoaded", function () {
  var processButton = document.getElementById("processButton");

  processButton.addEventListener("click", function () {
    // Send a message to the content script to grab text from the screen
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("Tabs:", tabs);
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "grabText" },
        function (response) {
          console.log("Response from content script:", response);
          // Handle the response from the content script
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else if (response && response.text) {
            console.log("Text grabbed from the screen:", response.text);
            // You can update the UI or perform further actions here
          } else {
            console.error("Unexpected response:", response);
          }
        }
      );
    });
  });
});
