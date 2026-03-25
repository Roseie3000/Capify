function generateCaptions() {
  let topic = document.getElementById("topic").value;

  let starters = [
    "Obsessed with",
    "Can’t get enough of",
    "Living for",
    "Dreaming about",
    "Forever loving",
    "Lowkey addicted to",
    "Currently vibing with"
  ];

  let endings = ["✨", "🔥", "💫", "💖", "😎", "🌙", "⚡"];

  let vibes = [
    "aesthetic",
    "iconic",
    "trendy",
    "bold",
    "chill",
    "luxury",
    "minimal",
    "soft",
    "powerful"
  ];

  let output = document.getElementById("output");
  output.innerHTML = "";

  let captionsSet = new Set();

  while (captionsSet.size < 15) {
    let randomStarter = starters[Math.floor(Math.random() * starters.length)];
    let randomEnding = endings[Math.floor(Math.random() * endings.length)];
    let randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

    let caption = `${randomStarter} ${topic} vibes – keeping it ${randomVibe} ${randomEnding}`;

    captionsSet.add(caption);
  }

  captionsSet.forEach(caption => {
    let div = document.createElement("div");
    div.className = "caption-box";

    let text = document.createElement("p");
    text.innerText = caption;

    let button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-btn";

    button.onclick = function () {
      navigator.clipboard.writeText(caption);
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 1500);
    };

    div.appendChild(text);
    div.appendChild(button);
    output.appendChild(div);
  });
}
