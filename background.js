chrome.storage.onChanged.addListener(function (changes, namespace) {
    chrome.action.setBadgeText({text:"0"});
    chrome.action.setBadgeBackgroundColor({color: '#9688F1'});
});