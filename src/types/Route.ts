import type { SvelteComponent } from 'svelte';

export default interface Route {
	name: string;
	component: typeof SvelteComponent;
}
