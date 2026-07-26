export function renderSum(data){
	return `
		<div class="content grid-5">
			<h1 class="eqn text-center redLine">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah2">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1 class="pecah text-center arraowDorn">${data.content.pelengkap}</h1>
			<h1></h1>
			<h1 class="pecah text-center arraowDownRight">${data.content.baki}</h1>
			<h1></h1>
			<h1 class="hasil text-center eqn">${data.content.nums[0] + data.content.pelengkap}</h1>
			<h1 class="text-center col-span-2">+</h1>
			<h1 class="eqn text-center">${data.content.baki}</h1>
			<h1 class="ans text-center tempatKosong">=</h1>
		</div>

			<div class="options grid-3">
				${data.options.map(option => `
					<div class="option soft-box btnAns">
						<h2>${option}</h2>
					</div>`).join('')}
			</div>
	`
}