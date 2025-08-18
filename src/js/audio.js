window.onload = function () {
  const loader = document.getElementById("loader");
  const welcome = document.getElementById("welcome");
  const btnOke = document.getElementById("btnOke");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("music");

  setTimeout(() => {
    loader.classList.add("opacity-0");
    loader.classList.add("pointer-events-none");

    welcome.classList.remove("opacity-0");
    welcome.classList.remove("pointer-events-none");
  }, 2000);

  btnOke.addEventListener("click", function () {
    welcome.style.display = "none";
    mainContent.classList.remove("hidden");
    music.play();
  });
};
