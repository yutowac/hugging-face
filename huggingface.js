const fetch = require('node-fetch');
const fs = require('fs');

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/cagliostrolab/animagine-xl-3.0",
		{
			headers: { Authorization: "Bearer API KEY" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	// const result = await response.blob();
	const arrayBuffer = await response.arrayBuffer()
	return Buffer.from(arrayBuffer);
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
	// Use image
	fs.writeFileSync('saved_image.png', response);
	console.log(response);
});
