document.addEventListener("DOMContentLoaded", function () {
  var processButton = document.getElementById("processButton");
  var outputDiv = document.getElementById("output");

  processButton.addEventListener("click", function () {
    // Logic to process text goes here
    // You can use chrome.tabs.query() or chrome.tabs.sendMessage() to communicate with content scripts
    // Example:
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "process" },
        function (response) {
          outputDiv.innerHTML = response.result;
        }
      );
    });
  });
});
