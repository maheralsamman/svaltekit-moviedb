<script>
    import global from "../global.css"
	import TodaysMovies from '../components/TodaysMovies.svelte';
    import SearchMovie from "../components/SearchMovie.svelte";
	export let data;
	const { todays } = data.props;
	//console.log(todaysMovies);
</script>
<section>
    <SearchMovie />
    <TodaysMovies {todays} />
</section>
