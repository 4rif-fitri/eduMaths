export function renderQuizz(data){
	return `
		<div class="split">
			<section>
				<div class="lineEqn grid-7">
					<h1>5</h1>
					<h1>+</h1>
					<h1>5</h1>
					<h1>+</h1>
					<h1>5</h1>
					<h1>=</h1>
					<h1 class="eqn"></h1>
				</div>
			</section>

			<section class="timerBar">
				<div class="timerLineBart">

				</div>
			</section>

			<section class="numpadContainer">
				<div class="numpadWrapper">
					<button class="soft-box">7</button>
					<button class="soft-box">8</button>
					<button class="soft-box">9</button>
					<button class="soft-box">4</button>
					<button class="soft-box">5</button>
					<button class="soft-box">6</button>
					<button class="soft-box">1</button>
					<button class="soft-box">2</button>
					<button class="soft-box">3</button>
					<button class="soft-box">0</button>
					<button class="soft-box btnDel"
						style="width: 100%; height: 100%;">DEL</button>
					<button class="soft-box btnContinue "
						style="width: 100%; height: 100%;">NEXT</button>
					<button class="soft-box btnCheck hidden"
						style="width: 100%; height: 100%;">CHECK</button>
				</div>
			</section>
		</div>
	`
}