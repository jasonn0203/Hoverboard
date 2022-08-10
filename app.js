const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const box = $$(".square");
const colorList = [
  "#820000",
  "#B9005B",
  "#FF7C7C",
  "#FEE0C0",
  "#2A0944",
  "#3FA796",
  "#FEC260",
];
const playBtn = $(".button");
const audio = $("audio");
var isPlaying = false;
const randomColor = () => {
  return colorList[Math.floor(Math.random() * colorList.length)];
};
const setColor = (box) => {
  const getColor = randomColor();
  box.style.backgroundColor = getColor;
  box.style.boxShadow = `0 0 2px ${getColor}, 0 0 10px ${getColor}`;
};
const removeColor = (box) => {
  box.style.backgroundColor = "#564f4f";
  box.style.boxShadow = `0 0 2px #000`;
};

box.forEach((element) => {
  element.onmouseover = () => {
    setColor(element);
  };
  element.onmouseout = () => {
    removeColor(element);
  };
});

playBtn.onclick = function () {
  if (isPlaying) {
    audio.src = "";
    audio.pause();
    playBtn.innerHTML = "Play Music";
  } else {
    audio.src = "./theme.mp3";
    audio.play();
  }
};
audio.onplaying = function () {
  isPlaying = true;
  playBtn.innerHTML = "Pause";
};
audio.onppause = function () {
  isPlaying = false;
};
