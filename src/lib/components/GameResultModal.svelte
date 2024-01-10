<script context="module" lang="ts">
	export type GameResultModalProps = {
		title: string;
		message: string;
	};
</script>

<script lang="ts">
	import Modal from './Modal.svelte';
	import { resetBoardStore } from '$lib/stores/board';
	import { resetGameResult } from '$lib/stores/gameResult';
	import { goto } from '$app/navigation';

	export let title: GameResultModalProps['title'];
	export let message: GameResultModalProps['message'];

	const onPlayAgain = () => {
		resetBoardStore();
		resetGameResult();
	};

	const onReturnHome = () => {
		goto('/');
	};
</script>

<Modal>
	<h1 class="text-3xl font-dela-gothic text-violet-700 mb-8">{title}</h1>
	<p class="mb-12">{message}</p>
	<div class="flex gap-4">
		<button
			class="border-4 border-violet-700 text-violet-700 font-dela-gothic px-8 py-4 rounded-sm hover:opacity-50"
			on:click={onReturnHome}>Return Home</button
		>
		<button
			class="bg-violet-700 text-white font-dela-gothic px-8 py-4 rounded-sm hover:opacity-50"
			on:click={onPlayAgain}>Play Again?</button
		>
	</div>
</Modal>
