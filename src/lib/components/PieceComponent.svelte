<script lang="ts">
	import type { Piece } from 'scrapple-lib';

	export let piece: Piece;
</script>

<div class="tile bench-piece">
	{piece.letter}
	<div class="points">{piece.points}</div>
</div>

<style>
	.bench-piece {
		width: 12.5%;
		padding: 0.25rem;
	}
	.points {
		position: absolute;
		bottom: 0;
	}
</style>
