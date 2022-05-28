import type Route from "src/types/Route";
import { writable } from "svelte/store"

export const activeRoute = writable<Route>({
	name:"/",
	component: null
});