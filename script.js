const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const calendarLink = document.querySelector(".calendar-link");

yesBtn.addEventListener("click", () => {
    console.log("dsadasd");
    question.innerHTML = "Увидимся с тобой 29.11";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    yesBtn.classList.add("is-hidden");
    calendarLink.classList.remove("is-hidden");
});

const btnGroup = document.querySelector(".btn-group");

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});