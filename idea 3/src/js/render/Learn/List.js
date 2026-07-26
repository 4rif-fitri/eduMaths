export function renderLearnList(data) {
	return `
          ${data.content.items.map(text => {
		return `<h1>${text}</h1>`;
	}).join("")}
     `;
}