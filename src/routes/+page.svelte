<script>
    import global from "../global.css"
	import TodaysMovies from '../components/TodaysMovies.svelte';
	export let data;
	const { todays } = data.props;
	//console.log(todaysMovies);
</script>
<section>
    <TodaysMovies {todays} />
</section>
