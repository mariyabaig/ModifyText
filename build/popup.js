document.addEventListener("DOMContentLoaded", function () {
  var processButton = document.getElementById("processButton");

  processButton.addEventListener("click", function () {
    // Send a message to the content script to grab text from the screen
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "grabText" },
        function (response) {
          // Handle the response from the content script if needed
          console.log("Text grabbed from the screen:", response.text);
          // You can update the UI or perform further actions here
        }
      );
    });
  });
});
