// ===== One liners for each photo =====
const lines = {
  "photo1.jpg": "The day our story quietly began.",
  "photo2.jpg": "Two strangers, one unexpected comfort.",
  "photo3.jpg": "This moment still feels warm.",
  "photo4.jpg": "Smiles we didn’t know we needed.",
  "photo5.jpg": "A memory that never fades.",
  "photo6.jpg": "With you, even silence feels safe.",
  "photo7.jpg": "This is what comfort looks like.",
  "photo8.jpg": "Little moments, lifelong memories.",
  "photo9.jpg": "Happiness looks exactly like this.",
  "photo10.jpg": "You make ordinary days special.",
  "photo11.jpg": "A memory I would relive a thousand times.",
  "photo12.jpg": "Your presence is my favorite place.",
  "photo13.jpg": "Some photos hold more feelings than words.",
  "photo14.jpg": "And this… is where my heart stayed."
};

// ===== Perfect Heart Positions (14) =====
const positions = [
  [50,8],

  [30,20],[70,20],

  [18,35],[42,35],[58,35],[82,35],

  [25,55],[50,55],[75,55],

  [35,75],[65,75],

  [45,92],[55,92]
];

const timeline = document.getElementById("heartTimeline");

// ===== Create Polaroids =====
for(let i=1;i<=14;i++){
    const div = document.createElement("div");
    div.className = "polaroid";
    div.style.left = positions[i-1][0] + "%";
    div.style.top = positions[i-1][1] + "%";

    div.innerHTML = `<img src="images/photo${i}.jpg">`;

    div.onclick = () => showMemory(`photo${i}.jpg`);

    timeline.appendChild(div);
}

// ===== Popup Memory Function =====
function showMemory(file){
    const view = document.getElementById("memoryView");
    view.classList.remove("hidden");

    view.innerHTML = `
        <div class="memoryCard">
            <img src="images/${file}">
            <div class="memoryText">${lines[file]}</div>
            <button class="closeBtn" onclick="closeMemory()">Close</button>
        </div>
    `;
}

function closeMemory(){
    document.getElementById("memoryView").classList.add("hidden");
}
