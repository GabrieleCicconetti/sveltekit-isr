import { json } from '@sveltejs/kit';

export async function POST({ request, cookies, fetch, ...event }) {
	const data = await request.json();
	console.log(event.getClientAddress());
	// const res = await fetch('/', {
	// 	headers: {
	// 		'x-prerender-revalidate': 'vOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERuvOINkES15fLSseVSSERu'
	// 	}
	// });

	return json({}, { status: 200 });
}
