export function renderTrueFalse(data){
	return `
		<div class="content grid-5">
			<h1>${data.content.nums[0]}</h1>
			<h1>+</h1>
			<h1>${data.content.nums[1]}</h1>
			<h1>=</h1>
			<h1>${data.content.nums[2]}</h1>
		</div>

		<div class="options grid-2">
			<div class="option soft-box btnAns">
				<h2>True</h2>
			</div>
			<div class="option soft-box btnAns">
				<h2>False</h2>
			</div>
		</div>
	`
}