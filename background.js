chrome.tabs.onUpdated.addListener(function () {
    chrome.action.setBadgeText({text:"0"});
    chrome.action.setBadgeBackgroundColor({color: '#9688F1'});
});