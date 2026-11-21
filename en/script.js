


let textInput;

function setup() {
  createCanvas(400, 300);
  background(0);
  textInput = createInput('Hi');
  let button = createButton('reply');
  button.mousePressed(runGemini);
}

async function runGemini() {
  let reply = await requestGemini(textInput.value());
  background(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  noStroke();
  text(reply + '😻', 0, 0, width, height);
}

async function requestGemini(prompt) {
  // let prompt = 'A story about a cat with a hat on.';
  let response = await fetch('/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });
  let data = await response.json();
  return data.text;
}
