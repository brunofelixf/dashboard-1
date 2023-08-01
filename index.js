let scale = 0;
const cards = Array.from(document.getElementsByClassName("card"));
const inner = document.querySelector(".inner");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function slideAndScale() {
	cards.map((card, i) => {
		card.setAttribute("data-scale", i + scale);
		inner.style.transform = "translateX(" + scale * 8.5 + "em)";
	});
}

(function init() {
	slideAndScale();
	cards.map((card, i) => {
		card.textContent = i;
		card.addEventListener("click", () => {
			const id = card.getAttribute("data-scale");
			if (id !== 2) {
				scale -= id - 2;
				slideAndScale();
			}
		}, false);
	});
	
	nextBtn.addEventListener("click", () => {
		if (cards[cards.length -1].getAttribute("data-scale") != 2) {
			scale--;
		}
		slideAndScale();
	}, false);
	prevBtn.addEventListener("click", () => {
		if (cards[0].getAttribute("data-scale") < 2) {
			scale++;
		}
		slideAndScale();
	}, false);
})();