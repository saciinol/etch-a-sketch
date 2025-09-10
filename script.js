const container = document.querySelector("#container");
let sides = 16;

function createGrid(side) {
	container.innerHTML = "";
	const area = side * side;

	function createDiv() {
		const div = document.createElement("div");
		div.classList.add("box");

		div.style.flex = `0 0 calc(${100 / side}%)`;

		container.appendChild(div);

		div.addEventListener("mouseenter", () => {
			const r = Math.floor(Math.random() * 256);
			const g = Math.floor(Math.random() * 256);
			const b = Math.floor(Math.random() * 256);

			div.style.backgroundColor = `rgb(${r} ${g} ${b})`;
		});

		div.addEventListener("mouseleave", () => {
			div.style.backgroundColor = "white";
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
