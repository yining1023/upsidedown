let min = 1;
let max = 2;
let current = max;

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.browserAction.setIcon({ path:"icon" + current + ".png" });
    current++;

    if (current > max) current = min;

    chrome.tabs.sendMessage(tab.id, {
        action: "toggle"
    });
});

chrome.browserAction.setIcon({ path:"icon1.png" });
