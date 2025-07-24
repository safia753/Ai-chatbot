const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  // Display user message
  addMessage(message, 'user');

  // Auto reply after short delay
  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, 'bot');
  }, 500);

  userInput.value = '';
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const lower = input.toLowerCase();

  if (lower.includes('hello') || lower.includes('hi')) return 'Hello! How can I help you?';
  if (lower.includes('your name')) return "I'm ChatBot AI!";
  if (lower.includes('help')) return 'Sure! Ask me anything.';
  if (lower.includes('bye')) return 'Goodbye! Have a great day.';
  
  // Default reply
  return "I'm just a simple bot. Try saying 'hello', 'help', or 'bye'.";
}

function deleteChat() {
  chatBox.innerHTML = '';
}
