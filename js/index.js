// import "./addRequire.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
global.require = require;

document.getElementById("cancelButton").addEventListener("click", function () {
    // Close the popup window
    window.close();
});

// import { load } from '../node_modules/cheerio';
// document.getElementById("summ").addEventListener("click", async function () {
//     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     const result = await chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: extractPageContent,
//         args: [tab.id]
//     });

//     const extractedContent = result[0].result;
//     chrome.runtime.sendMessage({ content: extractedContent });
// });

// function extractPageContent(tabId) {
//     const allContent = document.documentElement.innerHTML;
//     chrome.runtime.sendMessage({ tabId: tabId, content: allContent });
//     // console.log(allContent);
//     return allContent;
// }

const axios = require('../node_modules/axios');
const cheerio = require('../node_modules/cheerio');

export let pageContent = 'ABC';

document.getElementById("summ").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        const url = activeTab.url;

        scrapeData(url);
    });
});

function scrapeData(url) {
    axios.get(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            const scrapedData = [];
            // Modify this selector according to your target HTML structure
            $('body *').each((index, element) => {
                scrapedData.push($(element).text());
            });

            const output = scrapedData.join("\n");
            pageContent = output;
            // document.getElementById("output").textContent = output;
            // return output;
        })
        .catch(error => {
            console.error('Error fetching webpage:', error);
        });
}

console.log(pageContent);