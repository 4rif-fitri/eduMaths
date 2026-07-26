
export function setupPick(callback, canPick) {
	
	let elementPicked = null;
	let pickedElement = document.querySelectorAll(".eqn");

	pickedElement.forEach(btn => {

		btn.addEventListener("click", (e) => {
			if (!canPick()) return;
			
			if (elementPicked == e.target) {
				e.target.classList.remove("higlight");
				elementPicked = null;
				callback(null);
				return;
			}

			pickedElement.forEach(bt => bt.classList.remove("higlight"));

			btn.classList.add("higlight");
			elementPicked = e.target;

			let value = Number(btn.textContent);
			callback(value);
		});

	});

}