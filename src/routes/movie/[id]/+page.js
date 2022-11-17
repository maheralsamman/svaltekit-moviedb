export async function load({ params }) {
	const { id } = params;
    const apiKey = 'df88b29a';
	const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`);
	//const res = await fetch("https://www.omdbapi.com/?apikey=df88b29a&s=man")
	const data = await res.json();
	if (res.ok) {
		return {
			props: { movie: data }
		};
	}
}
