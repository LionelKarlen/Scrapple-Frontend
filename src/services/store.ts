import type Route from 'src/types/Route';
import HostView from '../lib/views/HostView.svelte';
import { writable } from 'svelte/store';

export const activeRoute = writable<Route>({
	name: '/',
	component: HostView,
});
