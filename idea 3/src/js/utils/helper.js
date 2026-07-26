import { renderPopupDone } from "../render/components/PopupDone.js";

export function updateContent(element,text){
	element.textContent = text
}

// export function defaultCheck(picked, data){
// 	return picked == data.answer;
// }

// export function defaultOnCorrect(ui) {
// 	showCorrect(ui);
// };


// export function show(condition, html) {
// 	return condition ? html : "";
// }

// export function avatar() {
// 	return `	<div class="icon">
// 				<div class="circule"></div>
// 			</div>
// 		`
// }

// export function renderText(data) {
// 	return `
// 		${avatar()}
// 		<div>
// 			<div class="dialog">
// 				${data.text}
// 			</div>
// 		</div>`
// }

// export function renderDiagram(data) { //
// 	return `
// 		${avatar()}
// 		<div>
// 			<div class="dialog">
// 				${data.text}
// 			</div>
// 			<div class="bond">

// 				<div class="whole">
// 					<h1>${data.content.whole}</h1>
// 				</div>

// 				<svg class="line-svg" viewBox="0 0 300 180">
// 					<line x1="150" y1="65" x2="75" y2="145" />
// 					<line x1="150" y1="55" x2="225" y2="145" />
// 				</svg>

// 				<div class="parts">
// 					<div class="part">
// 						<h1>${data.content.part1}</h1>
// 					</div>

// 					<div class="part">
// 						<h1>${data.content.part2}</h1>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
// 	`
// }

// export function renderDiagramBox(data) { //
// 	return `
// 		${avatar()}
// 		<div>
// 			<div class="dialog">
// 				<p>${data.text}</p>
// 			</div>
// 			<div class="grid">
// 				${Array.from({ length: data.content.nombor }).map(() => `<div class="box"></div>`).join("")}
// 				${data.content.showAnswer ? Array.from({ length: data.content.pelengkap }).map(() => `<div class="box pop"></div>`).join("") : ""}
// 			</div>
// 		</div>
// 		`
// }

// export function renderList(data) { //
// 	return `
// 		${avatar()}
// 		<div class="dialog">
// 			${data.text}
// 		</div>
// 		<p></p>
// 		<div style="margin: 0 auto;">
// 			${data.content.items.map((text, index) => `<h2>${text}</h2>`).join("")}
// 		</div>`
// }

// export function diagramTerbalik(data) { //
// 	return `
// 		${avatar()}
// 		<div>
// 			<div class="dialog">
// 				${data.text}
// 			</div>
// 			<div class="bond">

// 				<svg class="line-svg invert" viewBox="0 0 300 180">
// 					<line x1="215" y1="80" x2="150" y2="170" />
// 					<line x1="85" y1="80" x2="150" y2="170" />
// 				</svg>

// 				<div class="parts">
// 					<div class="part">
// 						<h1>${data.content.part1}</h1>
// 					</div>

// 					<div class="part">
// 						<h1>${data.content.part2}</h1>
// 					</div>
// 				</div>

// 				<div class="whole">
// 					<h1>${data.content.whole}</h1>
// 				</div>

// 			</div>
// 		</div>
// 		`
// }

// export function speak(text) {

// 	return new Promise(resolve => {

// 		const speech = new SpeechSynthesisUtterance(text);

// 		speech.lang = "id-ID";
// 		speech.rate = "1.1"

// 		speech.onend = () => {
// 			nextBtn.disabled = false;
// 			resolve();
// 		};

// 		speech.onerror = () => {
// 			nextBtn.disabled = false;
// 			resolve();
// 		};

// 		speechSynthesis.speak(speech);

// 	});
// }

// export function renderTeknik(data) { //

// 	if (data.content.step == 9)
// 		return `
// 			${avatar()}

// 			<div>
// 				<div class="dialog">
// 					<p>${data.text}</p>
// 				</div>

// 				<div>
// 					<div class="aaa">
// 						<h1 class="eqn">${data.content.nombor1}</h1>
// 						<h1>+</h1>
// 						<h1 class="eqn">${data.content.nombor2}</h1>
// 						<h1>=</h1>
// 						<h1>${data.content.nombor1 + data.content.nombor2}</h1>
// 					</div >
// 				</div >
// 			</div>
// 			`
// 	else

// 		return `
// 		${avatar()}

// 		<div>
// 			<div class="dialog">
// 				<p>${data.text}</p>
// 			</div>

// 			<svg class="line-svg-qwe" viewBox="0 0 300 180">
// 				${data.content.step >= 4 ? '<line x1="150" y1="65" x2="75" y2="145" />' : ''}
// 				${data.content.step >= 5 ? '<line x1="150" y1="55" x2="225" y2="145" />' : ''}
// 			</svg>

			
// 			${data.content.step >= 6 ? '<div class="redLine"></div>' : ''}
			
// 			${data.content.step >= 6 ? '<div class="arraowDorn left">&DownArrow;</div>' : ''}
// 			${data.content.step > 6 ? '<div class="arraowDorn right">&DownArrow;</div>' : ''}

// 			<div>
// 				<div class="aaa">
// 					${data.content.step >= 2 ? `<h1 class="eqn orange">${data.content.nombor1}</h1>` : `<h1 class="eqn">${data.content.nombor1}</h1>`}
// 					${data.content.step != 3 ? `<h1>+</h1>` : `<h1>+</h1>`}
// 					${data.content.step != 3 ? `<h1 class="eqn">${data.content.nombor2}</h1>` : `<h1 class="eqn">${data.content.pelengkap}</h1>`}
// 					${data.content.step < 3 || data.content.step > 3 ? `<h1></h1>` : `<h1>=</h1>`}
// 					${data.content.step < 3 || data.content.step > 3 ? `<h1></h1>` : `<h1>10</h1>`}
// 					${data.content.step >= 4 ? `<h1></h1>` : ``}
// 					${data.content.step >= 4 ? `<h1 class="pecah">${data.content.pelengkap}</h1>` : ``}
// 					${data.content.step >= 5 ? `<h1></h1>` : ``}
// 					${data.content.step >= 5 ? `<h1 class="pecah">${data.content.nombor2 - data.content.pelengkap}</h1>` : ``}
// 					${data.content.step > 5 ? `<h1></h1>` : ``}
// 					${data.content.step > 5 ? `<h1 class="hasil">10</h1>` : ``}
// 					${data.content.step > 7 ? `<h1 class="eql">+</h1>` : `<h1></h1><h1></h1>`}
// 					${data.content.step > 6 ? `<h1 class="hasil">${data.content.nombor2 - data.content.pelengkap}</h1>` : ``}
// 					${data.content.step > 7 ? `<h1 class="jumlah">= ${data.content.nombor2 + data.content.nombor1}</h1>` : ``}
// 				</div >
// 			</div >


// 		</div>
			
// 			`
// }

// export function renderPick(data) {
// 	return `
// 		<div class="icon">
// 			<div class="circule"></div>
// 		</div>
// 		<div>
// 			<div class="dialog">
// 				<p>${data.text}</p>
// 			</div>

// 			<div>
// 				<div class="aaa">
// 					<h1 class="eqn">${data.options[0]}</h1>
// 					<h1>+</h1>
// 					<h1 class="eqn">${data.options[1]}</h1>
// 				</div>
// 			</div>

// 		</div>
// 	`

// }

// export function handlePick(e, data, elementClick) {
// 	console.log({ e, data });

// }
// export function renderNeeded(data) {
// 	return `
// 		<div class="icon">
// 			<div class="circule"></div>
// 		</div>
// 		<div>
// 			<div class="dialog">
// 				<p>${data.text}</p>
// 			</div>

// 			<div class="options">
// 				<div class="option soft-box">
// 					<h2>${data.options[0]}</h2>
// 				</div>
// 				<div class="option soft-box">
// 					<h2>${data.options[1]}</h2>
// 				</div>
// 				<div class="option soft-box">
// 					<h2>${data.options[2]}</h2>
// 				</div>
// 			</div>
// 	</div>
// 	`
// }

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

// export function PopUpDone(){
// 	let div = document.createElement("div")
// 	div.classList.add("containerPopUp")
// 	div.innerHTML = renderPopUpDone()
// 	document.querySelector(".phone").appendChild(div)

// 	document.querySelector(".btnExit").addEventListener('click', function(){
// 		let path = window.location.pathname;
// 		let parts = path.split("/");
// 		let folder = parts[2];

// 		if (folder == "belajar"){
// 			window.location.href = "../../pages/belajar/index.html"
// 		} else if (folder == "latihan"){
// 			window.location.href = "../../pages/latihan/index.html"
// 		}

// 	})

// }

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