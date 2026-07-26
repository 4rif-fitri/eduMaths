import { renderPopupDone } from "../render/components/PopupDone.js";

export function updateContent(element,text){
	element.textContent = text
}

export function showCorrect(ui) {
	ui.btnCheck.classList.add("hidden")
	ui.btnContinue.classList.remove("hidden")
	
	ui.footer.classList.add("soft-betul")
	ui.btnContinue.classList.add("betul")
	ui.textFooter.classList.remove("hidden")
	ui.textFooter.classList.add("textBetul")
	ui.textFooter.textContent = "BETUL"

}

export function showWrong(ui) {
	ui.btnCheck.classList.add("hidden")
	ui.btnContinue.classList.remove("hidden")

	ui.btnContinue.textContent = "RETRY"

	ui.footer.classList.add("soft-salah")
	ui.btnContinue.classList.add("salah")
	ui.textFooter.classList.remove("hidden")
	ui.textFooter.classList.add("textSalah")
	ui.textFooter.textContent = "SALAH"

}

export function resetContentFooter(ui) {
	ui.btnCheck.classList.remove("hidden")
	ui.btnContinue.classList.add("hidden")

	ui.btnContinue.textContent = "CONTINUE"

	ui.footer.classList.remove("soft-salah", "soft-betul")
	ui.btnContinue.classList.remove("salah","betul")
	ui.textFooter.classList.add("hidden")
	ui.textFooter.classList.remove("textSalah","textBetul")

}

export function showPopUpDone(){
	
	if (!document.querySelector(".containerPopUp")) {

		let div = document.createElement("div")
		div.classList.add("containerPopUp")
		div.innerHTML = renderPopupDone()
		document.querySelector(".container").appendChild(div)

		document.querySelector(".btnExit").addEventListener("click", () => {
			window.location.href = "./index.html";
		});
	}

}

export function shuffle(data) {
	let result = [...data];

	for (let i = result.length - 1; i > 0; i--) {
		let randomIndex = Math.floor(
			Math.random() * (i + 1)
		);

		[result[i], result[randomIndex]] = [
			result[randomIndex],
			result[i]
		];
	}

	return result;
}

export function showMessagee(
	ui,
	message,
	status = "normal"
) {
	ui.dialog.textContent = message;

	ui.dialog.classList.remove(
		"textBetul",
		"textSalah"
	);

	if (status === "correct") {
		ui.dialog.classList.add(
			"textBetul"
		);
	}

	if (status === "wrong") {
		ui.dialog.classList.add(
			"textSalah"
		);
	}
}