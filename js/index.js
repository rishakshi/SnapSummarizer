document.getElementById("cancelButton").addEventListener("click", function () {
    // Close the popup window
    window.close();
});

document.getElementById("summ").addEventListener("click", async function () {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const result = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractPageContent,
        args: [tab.id]
    });

    const extractedContent = result[0].result;
    chrome.runtime.sendMessage({ content: extractedContent });
});

function extractPageContent(tabId) {
    const allContent = document.documentElement.innerHTML;
    chrome.runtime.sendMessage({ tabId: tabId, content: allContent });
    // console.log(allContent);
    return allContent;
}

var pageContent;
pageContent = extractPageContent();
console.log(pageContent);
