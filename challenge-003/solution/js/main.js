function insertElement(node, loc) {
  if (!(loc instanceof HTMLElement)) return;
  loc.append(node);
  return node;
}

function createElement() {
  const el = document.createElement("div");
  el.innerHTML = `<p>This has been added afterwards`;
  el.classList.add("js-div");

  return el;
}

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
    }).then();
  }

  const insertedNode = insertElement(createElement(), h1);

  insertedNode.classList.add("inserted");

  const img = document.querySelector("img");

  img.src =
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&dpr=1&s=none";



  // 2 sec delays
  // let idx = 0;
  // while (idx <= 3_200 * 1_000_000) {
  //   idx += 1;
  // }

})();
