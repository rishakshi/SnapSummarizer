const allContent = document.documentElement.outerHTML;
chrome.runtime.sendMessage({ content: allContent });