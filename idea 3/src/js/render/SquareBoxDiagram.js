export function renderSquareBoxDiagram(data) {
	return `
		<div class="content grid-5 gap-1">
			${Array.from({ length: data.content.numberOfBox })
				.map(() => `<div class="box"></div>`).join("")
			}


		</div>


		<div class="options grid-3">
			${data.options.map(option => `
				<div class="option soft-box btnAns">
					<h2>${option}</h2>
				</div>`).join('')}
		</div>
	`
}