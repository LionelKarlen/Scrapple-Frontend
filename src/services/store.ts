import type Route from 'src/types/Route';
import HostView from '../lib/views/HostView.svelte';
import { writable } from 'svelte/store';
import type { Difficulty } from '../types/Difficulty';
import type { Language } from '../types/Language';

export const activeRoute = writable<Route>({
	name: '/',
	component: HostView,
});

export const globalDifficulty = writable<Difficulty>('easy');

export const globalLanguage = writable<Language>('en');
