export function renderLearnNeeded(data){
	return `
		<div class="content grid-5">
			<h1 class="eqn text-center yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center">${data.content.pelengkap}</h1>
			<h1 class="text-center">=</h1>
			<h1 class="text-center">${data.content.nums[0] + data.content.pelengkap}</h1>
		</div>
	`
}