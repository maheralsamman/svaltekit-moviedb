import { PUBLIC_API_KEY } from '$env/static/public'
export async function load({ params }) {
	const { id } = params;
	console.log(id);
	const key = import.meta.env.APIKey
	const res = await fetch(`https://www.omdbapi.com/?apikey=${PUBLIC_API_KEY}&s=${id}`);
	//const res = await fetch("https://www.omdbapi.com/?apikey=df88b29a&s=man")
	const data = await res.json();
	if (res.ok) {
		return {
			props: { searchedMovie: data }
		};
	}
}
