const buttons = document.getElementById("buttons");
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
  buttons.innerHTML += `<div class="btn">${audio.id}</div>`
});

buttons.childNodes.forEach((div, idx) => {
  div.addEventListener("click", () => {
    audios[idx].play();
  })
});