export function renderGabung(data) {
	return `
		<div class="content grid-4">
			<h1 class="eqn text-center redLine">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah2">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1></h1>
			<h1 class="pecah text-center arraowDorn">${data.content.pelengkap}</h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.baki}</h1>
			<h1 class="hasil eqn"></h1>
		</div>
			<br>
			<br>
			<div class="options grid-3">
				${data.options.map(option => `
					<div class="option soft-box btnAns">
						<h2>${option}</h2>
					</div>`).join('')}
			</div>
	`
}