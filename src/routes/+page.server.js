

/**
 * @type {{name: {first: string, last: string}}}
 */
export async function load(ev) {
	const res = await fetch('https://randomuser.me/api');
	const data = await res.json();
	// console.log(data);
	return data.results[0];
}

