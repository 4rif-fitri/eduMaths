export function renderLearnBaki(data){
	return `
		<div class="content grid-5">
			<h1 class="eqn text-center yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah2">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.pelengkap}</h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.baki}</h1>
		</div>
	`
}