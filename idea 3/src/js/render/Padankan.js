import { shuffle } from "../utils/helper.js"

export function renderPadankan(data) {
	let items = data.content.items;
	let shuffledAnswers = shuffle(items);

	return `
		<div class="grid-2 w-100 gap-3 p-2 padankan-game">

			<div class="left">
				<h3>Soalan</h3>

				<div class="left-content">
					${items.map((item, index) => `
						<button
							type="button"
							class="soft-box boxSoalan"
							data-index="${index}"
							data-answer="${item.answer}"
						>
							<h1>
								${item.content.question}
							</h1>
						</button>
					`).join("")}
				</div>
			</div>

			<div class="right">
				<h3>Jawapan</h3>

				<div class="right-content">
					${shuffledAnswers.map(item => `
						<button
							type="button"
							class="soft-box boxJawapan"
							data-value="${item.answer}"
						>
							<h1>${item.answer}</h1>
						</button>
					`).join("")}
				</div>
			</div>

		</div>
	`;
}
