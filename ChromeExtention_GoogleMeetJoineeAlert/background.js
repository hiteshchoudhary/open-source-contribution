chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "people_joined") {
        sendNotification("" + sender.tab.id, message.txt); // We are casting this to string as notificationId is expected to be a string while sender.tab.id is an integer.
    }
});


function sendNotification(notificationId, message) {
    chrome.notifications.create(notificationId, {
        type: "basic",
        title: "A user joined the call",
        message: message,
        iconUrl: "./success.png"
    });
}