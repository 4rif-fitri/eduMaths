function shuffle(data) {
	const result = [...data];

	for (let i = result.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(
			Math.random() * (i + 1)
		);

		[result[i], result[randomIndex]] = [
			result[randomIndex],
			result[i]
		];
	}

	return result;
}

function createDeck(items) {
	const deck = items.flatMap(
		(item, index) => {
			const pairId = `pair-${index}`;

			return [
				{
					cardId:
						`${pairId}-question`,

					pairId,

					value:
						item.content.question
				},
				{
					cardId:
						`${pairId}-answer`,

					pairId,

					value:
						item.answer
				}
			];
		}
	);

	return shuffle(deck);
}

function renderMemoryGame(data) {
	const items =
		data.content.items;

	const cardIcon =
		data.content.cardIcon ?? "📗";

	const deck =
		createDeck(items);

	return `
		<div class="memory-container grid-4">

			${deck.map(card => `
				<button
					type="button"
					class="card"
					data-card-id="${card.cardId}"
					data-pair-id="${card.pairId}"
				>
					<div class="innerCard">

						<div class="back">
							<h3>${card.value}</h3>
						</div>

						<div class="front">
							<h1>${cardIcon}</h1>
						</div>

					</div>
				</button>
			`).join("")}

		</div>
	`;
}

export function mountMemoryGame({
	root,
	data,
	ui,
	complete
}) {
	const state = {
		firstCard: null,
		secondCard: null,

		isLocked: false,
		isComplete: false,

		matchedPairs: 0,
		attempts: 0,

		timeoutId: null
	};

	const items =
		data.content.items;

	const totalPairs =
		items.length;

	// Render component
	root.innerHTML =
		renderMemoryGame(data);

	ui.showMessage(data.text);

	ui.updateSubProgress(
		0,
		totalPairs,
		0
	);

	function flipCard(card) {
		card.classList.add(
			"flip",
			"flipped"
		);

		const innerCard =
			card.querySelector(
				".innerCard"
			);

		innerCard.style.transform =
			"rotateY(180deg)";
	}

	function unflipCard(card) {
		if (!card) return;

		card.classList.remove(
			"flip",
			"flipped"
		);

		const innerCard =
			card.querySelector(
				".innerCard"
			);

		innerCard.style.transform =
			"rotateY(0deg)";
	}

	function resetTurn() {
		state.firstCard = null;
		state.secondCard = null;
		state.isLocked = false;
	}

	function handleCorrectPair(
		firstCard,
		secondCard
	) {
		firstCard.classList.add(
			"matched"
		);

		secondCard.classList.add(
			"matched"
		);

		firstCard.disabled = true;
		secondCard.disabled = true;

		state.matchedPairs++;

		ui.showMessage(
			"Betul! Pasangan yang sama ditemui.",
			"correct"
		);

		ui.updateSubProgress(
			state.matchedPairs,
			totalPairs,
			state.attempts
		);

		resetTurn();

		if (
			state.matchedPairs === totalPairs
		) {
			finishComponent();
		}
	}

	function handleWrongPair(
		firstCard,
		secondCard
	) {
		ui.showMessage(
			"Bukan pasangan yang sama. Cuba lagi!",
			"wrong"
		);

		state.timeoutId = setTimeout(() => {
			unflipCard(firstCard);
			unflipCard(secondCard);

			resetTurn();

			ui.showMessage(data.text);
		}, 800);
	}

	function checkCards() {
		state.attempts++;
		state.isLocked = true;

		/*
			Simpan reference sekarang supaya tidak
			hilang semasa setTimeout berjalan.
		*/

		const firstCard =
			state.firstCard;

		const secondCard =
			state.secondCard;

		const firstPairId =
			firstCard.dataset.pairId;

		const secondPairId =
			secondCard.dataset.pairId;

		const isSamePair =
			firstPairId === secondPairId;

		ui.updateSubProgress(
			state.matchedPairs,
			totalPairs,
			state.attempts
		);

		if (isSamePair) {
			state.timeoutId = setTimeout(() => {
				handleCorrectPair(
					firstCard,
					secondCard
				);
			}, 400);

			return;
		}

		handleWrongPair(
			firstCard,
			secondCard
		);
	}

	function handleCardClick(event) {
		if (
			state.isLocked ||
			state.isComplete
		) {
			return;
		}

		const card =
			event.target.closest(".card");

		if (
			!card ||
			!root.contains(card)
		) {
			return;
		}

		if (
			card === state.firstCard ||
			card.classList.contains("matched") ||
			card.disabled
		) {
			return;
		}

		flipCard(card);

		if (!state.firstCard) {
			state.firstCard = card;

			ui.showMessage(
				"Pilih satu lagi kad."
			);

			return;
		}

		state.secondCard = card;

		checkCards();
	}

	function finishComponent() {
		if (state.isComplete) {
			return;
		}

		state.isComplete = true;
		state.isLocked = true;

		ui.updateSubProgress(
			totalPairs,
			totalPairs,
			state.attempts
		);

		ui.showMessage(
			`Tahniah! Semua pasangan ditemui ` +
			`dalam ${state.attempts} percubaan.`,
			"correct"
		);

		complete({
			id: data.id,
			type: data.type,

			matchedPairs:
				state.matchedPairs,

			totalPairs,

			attempts:
				state.attempts
		});
	}

	root.addEventListener(
		"click",
		handleCardClick
	);

	return function cleanup() {
		root.removeEventListener(
			"click",
			handleCardClick
		);

		clearTimeout(state.timeoutId);
	};
}