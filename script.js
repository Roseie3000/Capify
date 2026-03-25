function generateCaptions() {
  let topic = document.getElementById("topic").value;

  let starters = ["Obsessed with", "Can’t get enough of", "Living for", "Dreaming about", "Forever loving"];
  let endings = ["✨", "🔥", "💫", "💖", "😎"];
  let vibes = ["aesthetic", "iconic", "trendy", "bold", "chill", "luxury"];

  let output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    let randomStarter = starters[Math.floor(Math.random() * starters.length)];
    let randomEnding = endings[Math.floor(Math.random() * endings.length)];
    let randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

    let caption = `${randomStarter} ${topic} vibes – keeping it ${randomVibe} ${randomEnding}`;

    let p = document.createElement("p");
    p.innerText = caption;
    output.appendChild(p);
  }
}
