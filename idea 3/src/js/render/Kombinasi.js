export function renderKombinasi(data){
	return `
		<div class="content grid-3">
			<h1></h1>
			<h1 class="eqn text-center garisPecah2">${data.content.whole}</h1>
			<h1></h1>
			<h1 class="pecah text-center circula-ans">${data.content.part[0]}</h1>
			<h1></h1>
			<h1 class="pecah text-center circula-ans">${data.content.part[1]}</h1>
		</div>

		<div class="options grid-3">
			${data.options.map(num => `
				<div class="option soft-box btnAns">
					<h2>${num}</h2>
				</div>
			`).join("")}
		</div>

	`
}