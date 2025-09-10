const container = document.querySelector("#container");
let sides = 16;

function createGrid(side) {
	container.innerHTML = "";
	const area = side * side;

	function createDiv() {
		const div = document.createElement("div");
		div.classList.add("box");

		div.style.flex = `0 0 calc(${100 / side}%)`;

		let hoverCount = 0;
		let r, g, b;

		container.appendChild(div);

		div.addEventListener("mouseenter", () => {
			if (hoverCount === 0) {
				r = Math.floor(Math.random() * 256);
				g = Math.floor(Math.random() * 256);
				b = Math.floor(Math.random() * 256);
			}

			hoverCount++;

			const factor = Math.max(0, 1 - hoverCount * 0.1);

			const newR = Math.floor(r * factor);
			const newG = Math.floor(g * factor);
			const newB = Math.floor(b * factor);

			div.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
		});
	}

	for (let i = 0; i < area; i++) {
		createDiv();
	}
}

createGrid(sides);

const button = document.querySelector("#newGridBtn");
const overlay = document.querySelector("#overlay");
const newGrid = document.querySelector("#newGrid");
const inputSide = document.querySelector("#inputSide");

button.addEventListener("click", () => {
	overlay.classList.add("active");
	inputSide.focus();
});

overlay.addEventListener("click", (e) => {
	if (e.target !== newGrid && e.target !== inputSide) {
		overlay.classList.remove("active");
	}
});

window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		overlay.classList.remove("active");
	}
});

inputSide.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const value = Number(e.target.value);

		if (Number.isInteger(value) && value > 0 && value <= 100) {
			sides = value;
			createGrid(sides);
			overlay.classList.remove("active");
			e.target.value = "";
		}
	}
});
