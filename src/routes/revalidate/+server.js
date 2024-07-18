import { json } from '@sveltejs/kit';

export async function POST({ request, cookies, fetch }) {
	const data = await request.json();
	console.log(data);
	const res = await fetch('/', {
		headers: {
			'x-prerender-revalidate': 'vOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERu'
		}
	});

	return json({}, { status: 200 });
}
