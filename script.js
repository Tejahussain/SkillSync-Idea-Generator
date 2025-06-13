function generateIdea() {
  const skills = document.getElementById("skills").value.trim();
  const time = document.getElementById("time").value;
  const type = document.getElementById("type").value;

  if (!skills) {
    alert("Please enter your skills first! 🧠");
    return;
  }

  const ideasByType = {
    "Fun": [
      `🎉 Create a random emoji generator with ${skills}!`,
      `🎮 Make a rock-paper-scissors game using ${skills}.`,
      `🤣 Build a joke app using an API with ${skills}.`
    ],
    "Creative": [
      `🎨 Design a poster-making app with ${skills}.`,
      `🖌️ Build a pixel art maker using ${skills}.`,
      `📷 Make a meme captioning tool with ${skills}.`
    ],
    "Resume-worthy": [
      `💼 Build a personal portfolio using ${skills}.`,
      `📊 Create a stats dashboard using ${skills}.`,
      `📚 Make a blog or article site with ${skills}.`
    ],
    "One-day build": [
      `⚡ Make a colorful to-do app using ${skills}.`,
      `🕒 Build a countdown timer with ${skills}.`,
      `📋 Simple notes app using ${skills} and localStorage.`
    ],
    "Mini Game": [
      `🎮 Number guessing game using ${skills}.`,
      `🐍 Snake or tic-tac-toe game using ${skills}.`,
      `🧩 Mini quiz game with scores using ${skills}.`
    ],
    "Useful Tool": [
      `🛠️ Unit converter with ${skills}.`,
      `🔐 Password generator using ${skills}.`,
      `📅 Birthday reminder with local save using ${skills}.`
    ],
    "AI-based": [
      `🤖 Prompt idea generator using GenAI + ${skills}.`,
      `🎙️ Voice-to-text tool using Web APIs and ${skills}.`,
      `🧠 Story/prompt generator with ${skills}.`
    ],
    "For Beginners": [
      `🐣 Calculator using just ${skills}.`,
      `📦 Box color changer on click using ${skills}.`,
      `🔢 Multiplication table maker with ${skills}.`
    ],
    "For Portfolio": [
      `📁 Resume site with ${skills}.`,
      `🖼️ Image gallery using CSS grid and ${skills}.`,
      `📝 Contact form storing info locally with ${skills}.`
    ],
    "Fun + Learning": [
      `📚 Flashcard app using ${skills}.`,
      `💡 Coding challenge generator with ${skills}.`,
      `🧠 Typing speed test using ${skills}.`
    ]
  };

  const ideas = ideasByType[type] || [`🔧 Build something fun using ${skills}!`];
  const randomIndex = Math.floor(Math.random() * ideas.length);
  const selectedIdea = ideas[randomIndex];

  document.getElementById("resultArea").innerHTML = `
    <div>
      <h3>🧠 Your Custom Project Idea</h3>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Idea:</strong> ${selectedIdea}</p>
      <p>✨ Tip: Add your own twist or emojis!</p>
    </div>
  `;
}

function saveIdea() {
  const resultDiv = document.getElementById("resultArea");
  if (!resultDiv.innerText.trim()) {
    alert("No idea to save yet! 🤷‍♂️");
    return;
  }

  const text = resultDiv.innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = "MyProjectIdea.txt";
  link.href = url;
  link.click();
}

function copyIdea() {
  const text = document.getElementById("resultArea").innerText;
  if (!text.trim()) {
    alert("No idea to copy! 😅");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    alert("📋 Idea copied to clipboard!");
  });
}

// 🎤 Voice Input Feature
function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser doesn't support speech input.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript;
    document.getElementById("skills").value = speechResult;
  };

  recognition.onerror = function () {
    alert("🎤 Couldn't catch that. Try again!");
  };
}
