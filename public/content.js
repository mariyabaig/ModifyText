// content.js

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Find the <div> element with the class "ql-editor"
    var editorDiv = document.querySelector('.ql-editor');
    
    // Check if the editorDiv exists
    if (editorDiv) {
        // Find the <p> element within the editorDiv
        var paragraph = editorDiv.querySelector('p');
        
        // Check if the paragraph exists
        if (paragraph) {
            // Extract the content of the paragraph
            var paragraphContent = paragraph.textContent;
            
            // Log the content of the paragraph to the console
            console.log("Content of the <p> element:", paragraphContent);
        } else {
            console.log("No <p> element found within the editor.");
        }
    } else {
        console.log("No editor element found on the page.");
    }
});
