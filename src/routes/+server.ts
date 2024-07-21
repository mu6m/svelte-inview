import { json } from '@sveltejs/kit';

export async function POST({ request }: any) {
	const { page } = await request.json();
	let posts: number[] = [];
	let idx = 1;
	for (let post of posts) {
		post = page + idx;
		idx += 1;
	}
	return json({ posts });
}
