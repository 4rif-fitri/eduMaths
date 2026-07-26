import { shuffle } from "../../utils/helper.js";
import { renderPadankan } from "../../render/Padankan.js"

export function mountPadankan({root,data,ui,complete}) {

	let state = {
		selectedQuestion: null,
		selectedAnswer: null,
		matchedPairs: 0,
		attempts: 0,
		isLocked: false,
		isComplete: false,
		timeoutId: null
	};

	let items = data.content.items;
	let totalPairs = items.length;

	root.innerHTML = renderPadankan(data);

	ui.showMessage(data.text);
	ui.updateSubProgress(0, totalPairs, 0);

	function resetSelection() {
		state.selectedQuestion = null;
		state.selectedAnswer = null;
		state.isLocked = false;
	}

	function selectQuestion(element) {
		state.selectedQuestion?.classList.remove("selected");

		state.selectedQuestion = element;
		element.classList.add("selected");

		// ui.showMessage("Sekarang pilih jawapan yang betul");

		checkPair();
	}

	function selectAnswer(element) {
		state.selectedAnswer?.classList.remove(
			"selected"
		);

		state.selectedAnswer = element;
		element.classList.add("selected");

		// if (!state.selectedQuestion) {
		// 	ui.showMessage("Sila pilih satu soalan dahulu");
		// }

		checkPair();
	}

	function checkPair() {
		let question = state.selectedQuestion;
		let answer = state.selectedAnswer;

		if (!question || !answer) return;
		if (state.isLocked) return;

		state.isLocked = true;
		state.attempts++;

		let correctAnswer = Number(question.dataset.answer);
		let selectedAnswer = Number(answer.dataset.value);

		if (correctAnswer === selectedAnswer) {
			handleCorrect(question, answer);
		} else {
			handleWrong(question, answer);
		}
	}

	function handleCorrect(question, answer) {
		question.classList.remove("selected");
		answer.classList.remove("selected");

		question.classList.add("matched");
		answer.classList.add("matched");

		question.disabled = true;
		answer.disabled = true;

		state.matchedPairs++;

		// ui.showMessage(
		// 	"Betul! Pasangan berjaya dipadankan.",
		// 	"correct"
		// );

		ui.updateSubProgress(
			state.matchedPairs,
			totalPairs,
			state.attempts
		);

		resetSelection();

		if (state.matchedPairs === totalPairs) {
			finishComponent();
		}
	}

	function handleWrong(question, answer) {
		question.classList.add("wrong");
		answer.classList.add("wrong");

		ui.showMessage("Pasangan salah. Cuba lagi!","wrong");

		ui.updateSubProgress(
			state.matchedPairs,
			totalPairs,
			state.attempts
		);

		state.timeoutId = setTimeout(() => {
			question.classList.remove("selected","wrong");
			answer.classList.remove("selected","wrong");

			resetSelection();

			ui.showMessage(data.text);
		}, 700);
	}

	function finishComponent() {
		if (state.isComplete) return;

		state.isComplete = true;
		state.isLocked = true;

		ui.showMessage(`Semua pasangan berjaya ditemui dalam ` + `${state.attempts} percubaan.`, "correct");

		complete({
			matchedPairs: state.matchedPairs,
			totalPairs,
			attempts: state.attempts
		});
	}

	function handleClick(event) {
		if (state.isLocked || state.isComplete) return

		let question = event.target.closest(".boxSoalan");

		let answer = event.target.closest(".boxJawapan");

		if (question && root.contains(question) && !question.disabled) {
			selectQuestion(question);
			return;
		}

		if (answer && root.contains(answer) && !answer.disabled) {
			selectAnswer(answer);
		}
	}

	root.addEventListener("click", handleClick);
	
	return function cleanup() {
		root.removeEventListener("click",handleClick);
		clearTimeout(state.timeoutId);
	};
}