chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.content) {
      console.log("Received content for tab ", message.content);
    }
  });
  