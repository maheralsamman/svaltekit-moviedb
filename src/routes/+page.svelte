<script>
	import global from '../global.css';
	import TodaysMovies from '../components/TodaysMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	import { fly } from 'svelte/transition';
	export let data;
	const { todays, word } = data.props;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovie />
	<TodaysMovies {todays} {word} />
</section>
