const loginContainer = document.getElementById('loginContainer');
const chatContainer = document.getElementById('chatContainer');
const usernameInput = document.getElementById('usernameInput');
const loginButton = document.getElementById('loginButton');
const msgList = document.getElementById('msgList');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

let socket;
let username;

loginButton.addEventListener('click', login);

function login() {
    username = usernameInput.value.trim();
    if (username) {
        //* WebSocket connection
        socket = new WebSocket('ws://localhost:8080');

        socket.addEventListener('open', function (event) {
            console.log('Connected to WebSocket server');
            socket.send(JSON.stringify({ type: 'auth', username: username }));
 
            loginContainer.style.display = 'none';
            chatContainer.style.display = 'block';
        });

        socket.addEventListener('message', function (event) {
            const messageData = JSON.parse(event.data);
            if (messageData.type === 'chat') {
                addMessage(messageData.username, messageData.message, false);
            }
        });

        socket.addEventListener('close', function (event) {
            console.log('Disconnected from WebSocket server');
        });
    }
}

function addMessage(username, message, isSent) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isSent ? 'sent' : 'received');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    msgList.appendChild(messageElement);
    msgList.scrollTop = msgList.scrollHeight;
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message && socket.readyState === WebSocket.OPEN) {
        const messageData = {
            type: 'chat',
            message: message
        };
        socket.send(JSON.stringify(messageData));
        addMessage(username, message, true);
        messageInput.value = '';
    }
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});