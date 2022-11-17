<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	export let data;
	const { Search } = data.props.searchedMovie;
    console.log(Search);
</script>

<div class="searched-movies">
	{#each Search as movie (movie.imdbID)}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
