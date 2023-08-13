function main() {
  const container1 = document.querySelector(".body__container-1");
  const container2 = document.querySelector(".body__container-2");

  container1.style.display = "none";

  container2.style.transform =
    "translateY(-18.5vh) translateX(-55vw) scale(0.5)";

  container2.style.display = "block";
  container2.style["z-index"] = "1";

  container2.getBoundingClientRect();

  requestAnimationFrame(() => {
    container2.style.transform = "translateY(0) translateX(0) scale(1)";
    container2.style.opacity = "1";
  });
}

function refrash() {
  const container1 = document.querySelector(".body__container-1");
  const container2 = document.querySelector(".body__container-2");

  container2.style.display = "none";

  container1.style.transform = "translateY(19.0vh) translateX(55vw) scale(2)";
  container1.style.display = "block";

  container1.getBoundingClientRect();

  requestAnimationFrame(() => {
    container1.style.transform = "translateY(0vh) translateX(0vw) scale(1)";
  });
}

document.querySelector(".body__container-1").addEventListener("click", main);
document.querySelector(".body__container-2").addEventListener("click", refrash);