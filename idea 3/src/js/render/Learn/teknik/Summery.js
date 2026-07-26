export function renderLearnSummery(data){
	return `
		<div class="content grid-5">
			<h1 class="text-center yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="text-center">${data.content.nums[1]}</h1>
			<h1 class=" text-center">=</h1>
			<h1 class="eqn text-center ans">${data.content.jumlah}</h1>
		</div>
	`
}