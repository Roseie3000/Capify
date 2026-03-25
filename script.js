function generateCaptions() {
  let topic = document.getElementById("topic").value;

  let captions = [
    `${topic} but make it iconic 🔥`,
    `Obsessed with ${topic} right now 😍`,
    `${topic} vibes only ✨`,
    `Can't get enough of ${topic} 💯`,
    `${topic} is the mood today 😎`
  ];

  let output = document.getElementById("output");
  output.innerHTML = "";

  captions.forEach(caption => {
    let p = document.createElement("p");
    p.innerText = caption;
    output.appendChild(p);
  });
}
