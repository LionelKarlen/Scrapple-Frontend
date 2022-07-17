<script lang="ts">
	import type { Board } from 'scrapple-lib';
	import PieceComponent from './PieceComponent.svelte';
	import Tile from './Tile.svelte';

	export let board: Board;
</script>

<div class="board">
	{#each board as tile}
		<Tile {tile} />
	{/each}
</div>

<style>
	.board {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		aspect-ratio: 1;
		width: 100%;
	}
</style>
