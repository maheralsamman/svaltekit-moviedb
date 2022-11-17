<script>
        import { fly } from 'svelte/transition';

	export let data;
	const { movie } = data.props;
	const error = movie.Error ? movie.Error : null;
	console.log(movie);
	console.log(error);
</script>

<div class="movie-details" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="img-container">
		<img src={movie.Poster} alt={movie.Title} />
	</div>
	<div class="txt-container">
		<h1>{movie.Title}</h1>
		<p class="overview">{movie.Plot}</p>
		<p>
			<span>Release Date: </span>{movie.Released} <br />
			<span>Budget: </span> {movie.BoxOffice} <br />
			<span>Rating: </span>{movie.imdbRating} <br />
			<span>Runtime: </span>{movie.Runtime}s <br />
			<span>Actors: </span>{movie.Actors} <br />
		</p>
	</div>
</div>

<h1>{error ? 'error' : 'no error'}</h1>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		/* width: 100%; */
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
