<script>
	import { globalDifficulty, globalLanguage } from '../../services/store';

	let difficulty;
	let language;
	globalDifficulty.subscribe((r) => {
		difficulty = r;
	});
	globalLanguage.subscribe((r) => {
		language = r;
	});
</script>

<h1>Game View</h1>
{difficulty}
{language}
