<script lang="ts">
  import { initialiseRouter } from "../../services/router";
  import { activeRoute } from "../../services/store";

  import { onMount } from "svelte";
  onMount(() => initialiseRouter());
</script>

<svelte:component this={$activeRoute.component} />