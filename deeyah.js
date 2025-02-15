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
