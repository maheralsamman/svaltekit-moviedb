<script>
    import MovieCard from "./MovieCard.svelte"
export let todays;
console.log(todays);
</script>

<h3>Movies of the day</h3>
<div class="todays-movies">
    {#each todays as movie (movie.imdbID)}
    <MovieCard {movie}/>
    {/each}

</div>

<style>
    h3 {
        margin-left: 0.8em;
    }
.todays-movies{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1rem;
    grid-row-gap:2rem
}
</style>