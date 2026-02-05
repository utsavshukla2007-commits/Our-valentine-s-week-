const messages = {
  "photo1.jpg": "The day our story quietly began.",
  "photo2.jpg": "A moment I wish I could relive forever.",
  "photo3.jpg": "Two smiles, one memory.",
  "photo4.jpg": "Where comfort found its place.",
  "photo5.jpg": "This felt like home.",
  "photo6.jpg": "With you, even silence feels warm.",
  "photo7.jpg": "This is what comfort looks like.",
  "photo8.jpg": "Little moments, lifelong memories.",
  "photo9.jpg": "Happiness looks exactly like this.",
  "photo10.jpg": "You make ordinary days feel special.",
  "photo11.jpg": "A memory I would relive a thousand times.",
  "photo12.jpg": "Your presence is my favorite place.",
  "photo13.jpg": "Some photos hold more feelings than words.",
  "photo14.jpg": "And this… is where my heart stayed."
};

const positions = [
  [45,5],[30,15],[60,15],
  [20,30],[75,30],
  [15,50],[85,50],
  [25,65],[70,65],
  [35,80],[60,80],
  [45,92],[52,92],[38,92]
];

const timeline = document.getElementById("heartTimeline");

for(let i=1;i<=14;i++){
  const div = document.createElement("div");
  div.className = "polaroid";
  div.style.left = positions[i-1][0] + "%";
  div.style.top = positions[i-1][1] + "%";

  div.innerHTML = '<img src="images/photo' + i + '.jpg">';
  div.onclick = () => showMemory('photo' + i + '.jpg');

  timeline.appendChild(div);
}

function showMemory(file){
  const view = document.getElementById("memoryView");
  view.classList.remove("hidden");
  view.innerHTML = `
    <div class="popup">
      <img src="images/${file}">
      <p>${messages[file]}</p>
      <button onclick="closeMemory()">Close</button>
    </div>
  `;
}

function closeMemory(){
  document.getElementById("memoryView").classList.add("hidden");
}
