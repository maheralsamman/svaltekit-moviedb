<script>
	export let movie;
</script>

<div class="movie-card">
	<a data-sveltekit-reload data-sveltekit-noscroll href={`/movie/${movie.imdbID}`}>
		<img src={movie.Poster} alt={movie.Title} />
	</a>
	<div class="description">
		<h2>{movie.Title}</h2>
		<p>{movie.Year}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.8rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
