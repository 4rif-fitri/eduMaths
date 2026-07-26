export function setupPickPair10(
	onSelect,
	canInteract
) {
	const root =
		document.querySelector(".output");

	const buttons =
		root.querySelectorAll(".pairNumber");

	let selectedIndices = [];

	function publishSelection() {
		if (selectedIndices.length !== 2) {
			onSelect(null, null);
			return;
		}

		const normalizedIndices =
			[...selectedIndices].sort(
				(a, b) => a - b
			);

		onSelect(normalizedIndices, null);
	}

	function handleClick(event) {
		if (!canInteract()) return;

		const button = event.currentTarget;

		const selectedIndex =
			Number(button.dataset.index);

		const existingPosition =
			selectedIndices.indexOf(
				selectedIndex
			);

		// Tekan semula untuk batalkan pilihan.
		if (existingPosition !== -1) {
			selectedIndices.splice(
				existingPosition,
				1
			);

			button.classList.remove(
				"higlight"
			);

			publishSelection();
			return;
		}

		/*
			Jika sudah pilih dua nombor dan tekan
			nombor ketiga, keluarkan pilihan pertama.
		*/
		if (selectedIndices.length === 2) {
			const removedIndex =
				selectedIndices.shift();

			buttons[removedIndex]
				.classList.remove("higlight");
		}

		selectedIndices.push(selectedIndex);

		button.classList.add("higlight");

		publishSelection();
	}

	buttons.forEach(button => {
		button.addEventListener(
			"click",
			handleClick
		);
	});

	return () => {
		buttons.forEach(button => {
			button.removeEventListener(
				"click",
				handleClick
			);
		});
	};
}

export function checkPair10(
	selectedIndices,
	data
) {
	if (
		!Array.isArray(selectedIndices) ||
		selectedIndices.length !== 2
	) {
		return false;
	}

	const selected =
		[...selectedIndices].sort(
			(a, b) => a - b
		);

	const answer =
		[...data.answer].sort(
			(a, b) => a - b
		);

	return (
		selected[0] === answer[0] &&
		selected[1] === answer[1]
	);
}