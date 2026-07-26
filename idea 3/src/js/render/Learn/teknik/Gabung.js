export function renderLearnGabung(data){
	return `
		<div class="content grid-4">
			<h1 class="eqn text-center redLine yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah2">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1></h1>
			<h1 class="pecah text-center arraowDorn">${data.content.pelengkap}</h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.baki}</h1>
			<h1 class="hasil eqn">${data.content.pelengkap + data.content.nums[0]}</h1>
		</div>
	`
}