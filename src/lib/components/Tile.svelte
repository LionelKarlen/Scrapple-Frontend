<script lang="ts">
	import { Premium, Tile } from 'scrapple-lib';

	export let tile: Tile;
</script>

<div
	class="tile"
	class:tls={tile.premium == Premium.TLS}
	class:dls={tile.premium == Premium.DLS}
	class:dws={tile.premium == Premium.DWS}
	class:tws={tile.premium == Premium.TWS}
>
	{tile.isEmpty() ? '' : tile.getPiece()}
</div>

<style global>
	.tile {
		aspect-ratio: 1;
		background: #ced6e0;
		width: 6.6666%;
		text-align: center;
		border: 1px solid #a4b0be;
		line-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.tls {
		background: #3742fa;
	}
	.tws {
		background: #ff4757;
	}
	.dls {
		background: #70a1ff;
	}
	.dws {
		background: #ff7aca;
	}
</style>
