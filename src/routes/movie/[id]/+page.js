import { PUBLIC_API_KEY } from '$env/static/public'
export async function load({ params }) {
	const { id } = params;
	const res = await fetch(`https://www.omdbapi.com/?apikey=${PUBLIC_API_KEY}&i=${id}`);
	const data = await res.json();
	if (res.ok) {
		return {
			props: { movie: data }
		};
	}
}
