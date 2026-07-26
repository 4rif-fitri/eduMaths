export function renderBaki(data){
	return `
		<div class="content grid-5">
			<h1 class="eqn text-center">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah2">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.pelengkap}</h1>
			<h1></h1>
			<h1 class="pecah text-center tempatKosong"></h1>
		</div>

			<div class="options grid-3">
				${data.options.map(option => `
					<div class="option soft-box btnAns">
						<h2>${option}</h2>
					</div>`).join('')}
			</div>
	`
}