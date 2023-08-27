document.getElementById("cancelButton").addEventListener("click", function () {
    // Close the popup window
    window.close();
});

import {pageContent} from '../js/index.js'

const content = document.getElementById('content');
// content.innerHTML = window.pageContent;
content.textContent = pageContent;