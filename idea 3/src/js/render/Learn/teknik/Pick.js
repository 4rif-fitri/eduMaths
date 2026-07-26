export function renderLearnPick(data){
	return `
		<div class="content grid-3">
			<h1 class="eqn text-center yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center">${data.content.nums[1]}</h1>
		</div>
	`
}