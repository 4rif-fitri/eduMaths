function renderNumberButton(number, index) {
	return `
		<button
			type="button"
			class="eqn soft-box pairNumber btnAns"
			data-index="${index}"
			data-value="${number}"
		>
			${number}
		</button>
	`;
}

export function renderPickPair10(data) {
	const { numbers, pair } = data.content;

	return `
		<div class="threeMake10">
			<div class="pickThreeNumbers">
				${numbers
			.map((number, index) => {
				const plus =
					index < numbers.length - 1
						? `<h1>+</h1>`
						: "";

				return `
							${renderNumberButton(
					number,
					index
				)}
							${plus}
						`;
			})
			.join("")}
			</div>

			<div class="pairReveal hidden">
				<h2>
					${pair[0]} + ${pair[1]} = 10
				</h2>

				<div class="tenCircle">
					10
				</div>
			</div>
		</div>
	`;
}

function renderTenPair(firstNumber, secondNumber) {
	return `
		<div class="tenPair">
			<div class="tenPairNumbers">
				<h1 class="eqn">
					${firstNumber}
				</h1>

				<h1>+</h1>

				<h1 class="eqn">
					${secondNumber}
				</h1>
			</div>

			<svg
				class="tenPairLines"
				viewBox="0 0 200 90"
				aria-hidden="true"
			>
				<line
					x1="40"
					y1="5"
					x2="100"
					y2="70"
				/>

				<line
					x1="160"
					y1="5"
					x2="100"
					y2="70"
				/>
			</svg>

			<div class="tenCircle">
				10
			</div>
		</div>
	`;
}

function renderOriginalEquation(data) {
	const {
		numbers,
		pairIndices
	} = data.content;

	const pairStartsAtBeginning =
		pairIndices[0] === 0 &&
		pairIndices[1] === 1;

	if (pairStartsAtBeginning) {
		return `
			${renderTenPair(
			numbers[0],
			numbers[1]
		)}

			<h1 class="worksheetOperator">+</h1>

			<h1 class="eqn worksheetNumber">
				${numbers[2]}
			</h1>
		`;
	}

	return `
		<h1 class="eqn worksheetNumber">
			${numbers[0]}
		</h1>

		<h1 class="worksheetOperator">+</h1>

		${renderTenPair(
		numbers[1],
		numbers[2]
	)}
	`;
}

export function renderSumThree10(data) {
	const {
		remaining,
		total
	} = data.content;

	return `
		<div class="threeMake10">
			<div class="worksheetEquation">
				${renderOriginalEquation(data)}

				<h1 class="worksheetOperator">
					=
				</h1>

				<h1 class="eqn finalThreeAnswer">
					?
				</h1>
			</div>

			<div class="simplifiedEquation">
				<h1 class="eqn">10</h1>
				<h1>+</h1>
				<h1 class="eqn">${remaining}</h1>
				<h1>=</h1>

				<h1 class="eqn simplifiedAnswer">
					?
				</h1>
			</div>
		</div>

		<div class="options grid-3">
			${data.options
			.map(option => `
					<div
						class="option soft-box btnAns"
						data-value="${option}"
					>
						<h2>${option}</h2>
					</div>
				`)
			.join("")}
		</div>
	`;
}