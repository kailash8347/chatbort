let chatbotTyping = false;

const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');
const typingIndicator = document.getElementById('typingIndicator');

// Function to simulate typing behavior (show typing animation)
function typingEffect() {
    // Show the typing indicator
    typingIndicator.style.display = 'block';

    // After a delay, display the bot's message and hide typing indicator
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot');
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = "Hello! How can I assist you?"; // Change the bot response here
        messageDiv.appendChild(bubble);
        chatbox.appendChild(messageDiv);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the latest message
    }, 2000); // Simulate typing for 2 seconds (or adjust time)
}

// Function to simulate sending a message
function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        // Display user message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.textContent = message;
        messageDiv.appendChild(bubble);
        chatbox.appendChild(messageDiv);

        userInput.value = '';
        chatbox.scrollTop = chatbox.scrollHeight;

        // Show typing indicator for the bot
        typingEffect(); // This triggers the bot typing animation
    }
}

// Function to check if 'Enter' key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
