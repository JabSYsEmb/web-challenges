function main() {
  const container1 = document.querySelector(".body__container-1");
  const container2 = document.querySelector(".body__container-2");

  container2.style.transform =
    "translateY(-18.5vh) translateX(-55vw) scale(0.5)";
  container2.style.background = "orange";
  container1.style["z-index"] = "-1";
  container2.style["z-index"] = "1";

  requestAnimationFrame(() => {
    container2.style.display = "block";
    container2.style.transform = "translateY(0) translateX(0) scale(1)";
  });
}

document.querySelector(".body__container-1").addEventListener("click", main);
// main();
