function checkJoinees(mutations) {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            // A child node was added or removed.
            if (document.querySelector('div.U04fid') && document.querySelector('div.U04fid').childElementCount > 0) {
                const name = document.querySelector('div.U04fid > img').getAttribute('title');
                sendMessage(name);
            }
        }
    }
    return false;
}

const observer = new MutationObserver(checkJoinees);
observer.observe(document.body, {
    childList: true,
    delay: 1000
});

function sendMessage(name) {
    const joinee = (name === null ? 'Someone' : name),
        txt = `${joinee} has joined the call!`;

    chrome.runtime.sendMessage({
        txt,
        action: "people_joined",
    });
}