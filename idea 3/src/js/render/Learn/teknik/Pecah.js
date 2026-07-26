export function renderLearnPecah(data){
	return `
		<div class="content grid-3">
			<h1 class="eqn text-center yellow">${data.content.nums[0]}</h1>
			<h1 class="text-center">+</h1>
			<h1 class="eqn text-center garisPecah1">${data.content.nums[1]}</h1>
			<h1></h1>
			<h1 class="pecah text-center">${data.content.pelengkap}</h1>
		</div>
	`
}