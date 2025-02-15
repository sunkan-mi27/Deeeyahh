document.addEventListener("DOMContentLoaded", function () {
  const mainMessage = document.getElementById("main-message");
  const surpriseMessage = document.getElementById("surprise-message");
  const surpriseBtn = document.getElementById("surprise-btn");
  const backBtn = document.getElementById("back-btn");

  surpriseBtn.addEventListener("click", function () {
    mainMessage.style.display = "none";
    surpriseMessage.style.display = "block";
  });

  backBtn.addEventListener("click", function () {
    mainMessage.style.display = "block";
    surpriseMessage.style.display = "none";
  });
});



const creatHeart = () => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.querySelector("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove;
  }, 3000);
};

setInterval(creatHeart, 300);

function revealSurprise() {
  let surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");
}
