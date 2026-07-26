export function setupClickBtn(callback, canPick) {
	let elementPicked
	let btnAns = document.querySelectorAll(".option")

	btnAns.forEach(b =>{
		b.addEventListener("click", e => {
			if (!canPick()) return;
			
			if (elementPicked == e.target) {
				e.target.classList.remove("higlight");
				elementPicked = null;
				callback(null);
				return;
			}
			btnAns.forEach(bt => bt.classList.remove("higlight"));
			elementPicked = e.target;
			
			elementPicked.classList.add("higlight");
			// mybe numbeer or string
			let value = (b.querySelector("h2").textContent);
			
			callback(value);
		})
	})
}
