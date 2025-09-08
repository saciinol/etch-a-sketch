const container = document.querySelector("#container");

function createDiv() {
   const div = document.createElement("div");
	div.classList.add("box");
	container.appendChild(div);

   div.addEventListener("mouseenter", () => {
      div.classList.add("box-hover");
   })

   div.addEventListener("mouseleave", () => {
      div.classList.remove("box-hover");
   })
}

for (let i = 0; i < 256; i++) {
   createDiv();
}

