# 🚀 **Project Highlight: Chat Application 🗨️🍵**

## 📝 Project Description

This Chat Application allows users to communicate in real-time with each other. It features a WebSocket server to handle client connections, real-time message exchanges, and user authentication. The chat interface is designed with CSS to be user-friendly and visually appealing.

## 🎯 Features

- **Real-time Communication:** Messages are sent and received instantly using WebSocket connections.
- **User Authentication:** Users can choose a username before joining the chat.
- **Dynamic Chat Interface:** Messages from different users are displayed with unique styles, and animations enhance the user experience.
- **WebSocket Server:** A Node.js server is set up using the `ws` library to manage client connections and handle message broadcasting.

## 🛠️ Technologies Used

- **Node.js:** Backend server to create the WebSocket server.
- **WebSockets (`ws` library):** To handle real-time communication between clients and the server.
- **HTML/CSS:** For structuring and styling the chat interface.
- **JavaScript:** For managing WebSocket connections, handling messages, and controlling UI interactions.

## 🚀 Getting Started

Follow these instructions to run the chat application on your local machine.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. [Download Node.js](https://nodejs.org/)

## 🍴 Forking the Repository

If you'd like to contribute to this project or customize it for your own use, follow these steps to fork the repository:

### Step 1: Fork the Repository

1. Navigate to the [Chat Application repository](https://github.com/ChinmayKaitade/30Days-JavaScript-Challenge/tree/main/Day-26_Project-03_Chat_Application/Project-03%20Chat%20Application) on GitHub.
2. Click the **Fork** button in the top-right corner of the page.
3. This will create a copy of the repository under your own GitHub account.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ChinmayKaitade/Day-26_Project-03_Chat_Application.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Project-03 Chat Application
   ```

3. **Install the necessary dependencies:**

   ```bash
   npm install ws
   ```

## Running the Application

**Initialize project with npm**

```bash
   npm init -y
```

1. **Start the WebSocket server:**

   ```bash
   node server.js
   ```

   This will install all the necessary dependencies for both the client and server.

   The server will run on http://localhost:8080.

2. **Open `index.html` in your browser**:

   - Use any browser to open the `index.html` file, and your chat application will be up and running!

3. **Open another terminal and Install `wscat` globally (if you haven't already):**

   ```bash
      npm install -g wscat
   ```

   **and after that run:**

   ```bash
      wscat -c ws://localhost:8080
   ```

## Usage

1. **Enter your username** to join the chat.
2. **Type a message** in the input area and press Enter or click the Send button.
3. **See messages** appear in the chat window in real-time, with usernames displayed alongside their messages.

## 📸 Sample Video Link

Here’s a video demonstration of the project:

<video width="640" height="360" controls>
  <source src="./Chat Application.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 🤝 Contributing

Feel free to fork this repository and contribute by submitting a pull request. For any issues, please open a ticket.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📩 Lets Connect

<a href="https://www.linkedin.com/in/chinmay-sharad-kaitade/" target="blank"><img align="center" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="Chinmay'sLinkedinHandle" title="LinkedIn"/></a> | <a href="https://www.instagram.com/chinmaykaitade_hunter/" target="blank"><img align="center" src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Chinmay'sInstagramHandle" title="Instagram"/></a> | <a href="https://x.com/chinmaydotcom" target="blank"><img align="center" src="https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white" alt="Chinmay'sXHandle" title="X"/></a>
