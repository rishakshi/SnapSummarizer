document.getElementById("cancelButton").addEventListener("click", function () {
    // Close the popup window
    window.close();
});

const content = document.getElementById('content');
content.innerHTML = window.pageContent;
// content.textContent = window.pageContent;