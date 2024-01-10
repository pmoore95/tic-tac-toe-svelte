<script lang="ts">
	import Cell from './cell.svelte';

	export let posY: number;
</script>

<div class="flex border-b-4 border-black last:border-b-0">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each { length: 3 } as _, i}
		<Cell posX={i} {posY} />
	{/each}
</div>
