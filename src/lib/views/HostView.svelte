<script lang="ts">
	import {
		Button,
		Form,
		FormGroup,
		Select,
		SelectItem,
	} from 'carbon-components-svelte';
	import page from 'page';
	import type { Difficulty } from '../../types/Difficulty';
	import { globalDifficulty, globalLanguage } from '../../services/store';
	import type { Language } from 'scrapple-lib/types/Language';

	const languages = [
		{
			name: 'English',
			value: 'en',
		},
		{
			name: 'German',
			value: 'de',
		},
		{
			name: 'French',
			value: 'fr',
		},
	];

	const difficulties = [
		{
			name: 'Easy',
			value: 'easy',
		},
		{
			name: 'Medium',
			value: 'medium',
		},
		{
			name: 'Hard',
			value: 'hard',
		},
		{
			name: 'Diabolical',
			value: 'diabolical',
		},
	];
	let language = 'en';
	let difficulty = 'easy';

	function startGame() {
		console.log('start');
		console.log('language', language);
		console.log('difficulty', difficulty);
		globalLanguage.set(language as unknown as Language);
		globalDifficulty.set(difficulty as unknown as Difficulty);
		page('/game');
	}
</script>

<Form
	on:submit={(e) => {
		e.preventDefault();
		startGame();
	}}
>
	<FormGroup>
		<Select
			id="select-language"
			labelText="Language"
			bind:selected={language}
		>
			{#each languages as language}
				<SelectItem value={language.value} text={language.name} />
			{/each}
		</Select>
	</FormGroup>
	<FormGroup>
		<Select
			id="select-difficulty"
			labelText="Opponent difficulty"
			bind:selected={difficulty}
		>
			{#each difficulties as difficulty}
				<SelectItem value={difficulty.value} text={difficulty.name} />
			{/each}
		</Select>
	</FormGroup>
	<Button type="submit">Start</Button>
</Form>

<style>
	:global(Form) {
		max-width: 50vw;
		min-width: 50vw;
		display: inline-block;
		text-align: center;
		margin-top: 3% !important;
	}
	:global(.bx--select-input) {
		background-color: #dfe4ea !important;
	}
	:global(.bx--select-input:hover) {
		background-color: #d6dde4 !important;
	}
	:global(Button) {
		text-align: center !important;
	}
</style>
