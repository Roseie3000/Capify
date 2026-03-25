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
    let p = document.createElement("p");
    p.innerText = caption;
    output.appendChild(p);
  });
}
