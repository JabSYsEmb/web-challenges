function insertElement(node, loc) {
  if (!(loc instanceof HTMLElement)) return;
  loc.append(node);
  return node;
}

function createElement() {
  const el = document.createElement("div");
  el.innerHTML = `<p>Attention:<br />I couldn't find the parent 
                  component immediatly thus I took approximately 
                  2 seconds executing js scripts and looking around.
                  </p>`;
  el.classList.add("no-border");
  el.classList.add("js-div");

  return el;
}

console.log("Start executing main.js");
(async () => {
  let h1 = document.getElementById("insertContent");

  if (!h1) {
    await new Promise((resolve) => {
      const id = setInterval(() => {
        h1 = document.getElementById("insertContent");
        if (h1) {
          resolve();
          clearInterval(id);
        }
      }, 2000);
    });
  }

  const insertedNode = insertElement(createElement(), h1);

  insertedNode.classList.add("inserted");

  const img = document.querySelector("img");

  img.src =
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&dpr=1&s=none";
})();
