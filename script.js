const photos = [
  "images/photo1.jpg","images/photo2.jpg","images/photo3.jpg",
  "images/photo4.jpg","images/photo5.jpg","images/photo6.jpg",
  "images/photo7.jpg","images/photo8.jpg","images/photo9.jpg",
  "images/photo10.jpg","images/photo11.jpg","images/photo12.jpg",
  "images/photo13.jpg","images/photo14.jpg"
];

// Heart positions
const positions = [
  [45,5],[30,15],[60,15],[20,30],[75,30],
  [15,50],[85,50],[25,65],[70,65],
  [35,80],[60,80],[45,92],[52,92],[38,92]
];

const timeline = document.getElementById("heartTimeline");

photos.forEach((src,i)=>{
  const div = document.createElement("div");
  div.className="polaroid";
  div.style.left = positions[i][0] + "%";
  div.style.top = positions[i][1] + "%";

  div.innerHTML = `<img src="${src}">`;

  div.onclick = ()=> showMemory(src);

  timeline.appendChild(div);
});

function showMemory(src){
  const view = document.getElementById("memoryView");
  view.classList.remove("hidden");
  view.innerHTML = `
    <img src="${src}" style="width:60%;border-radius:10px;margin-bottom:20px;">
    <p>This memory still makes me smile. — Utsav</p>
    <button onclick="closeMemory()">Close</button>
  `;
}

function closeMemory(){
  document.getElementById("memoryView").classList.add("hidden");
}
