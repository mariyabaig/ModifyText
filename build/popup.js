document.addEventListener("DOMContentLoaded", function () {
  var processButton = document.getElementById("processButton");

  processButton.addEventListener("click", function () {
    console.log("Process button clicked");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("Tabs:", tabs);

      chrome.tabs.sendMessage(
        tabs[0].id,
        { command: "grabHTML" },
        function (response) {
          console.log("Response from content script:", response);

          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else if (response && response.htmlContent) {
            console.log("HTML content of the webpage:", response.htmlContent);
          } else {
            console.error("Unexpected response:", response);
          }
        }
      );
    });
  });
});
