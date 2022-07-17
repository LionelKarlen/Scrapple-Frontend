<script lang="ts">
	import { globalDifficulty, globalLanguage } from '../../services/store';
	import { Scrapple } from 'scrapple-lib/index';
	import { Column, Row } from 'carbon-components-svelte';
	import Board from '../components/Board.svelte';
	import PieceComponent from '../components/PieceComponent.svelte';
	import PieceButton from '../components/PieceButton.svelte';

	let difficulty;
	let language;
	globalDifficulty.subscribe((r) => {
		difficulty = r;
	});
	globalLanguage.subscribe((r) => {
		language = r;
	});
	const scrapple: Scrapple = new Scrapple(2, language);
</script>

<Row>
	<Column>
		<h3>Remaining: {scrapple.bag.length}</h3>
	</Column>
	<Column>
		<Board board={scrapple.board} />
	</Column>
	<Column>
		<h3>Player score: {scrapple.players[0].score}</h3>
		<h3>Opponent score: {scrapple.players[1].score}</h3>
	</Column>
</Row>
<Row style="width: 100vw;justify-content: center; margin-top: 3rem">
	<div class="bench">
		{#each scrapple.players[0].bench as piece}
			<PieceComponent {piece} />
		{/each}
		<PieceButton />
	</div>
	<div class="bench-shadow" />
</Row>

<style>
	h3 {
		color: #57606f;
	}
	.bench {
		position: relative;
		left: 18%;
		bottom: 10px;
		z-index: 10;
		width: 35%;
		overflow-x: visible;
		display: flex;
		gap: 0.5rem;
	}
	.bench-shadow {
		position: relative;
		left: -18%;
		width: 35%;
		/* background: #A4B0BE; */
		background: #57606f;
	}
</style>
