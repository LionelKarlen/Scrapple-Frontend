import type Route from 'src/types/Route';
import page from 'page';
import { activeRoute } from './store';
import Gameview from '../lib/views/Gameview.svelte';

export const routes: Route[] = [{ name: '/game', component: Gameview }];

function registerRoute(route: Route) {
	page(route.name, () => {
		activeRoute.set({
			name: route.name,
			component: route.component,
		});
	});
}

export function initialiseRouter() {
	for (const route of routes) {
		registerRoute(route);
	}
	page.start();
}
