<script lang="ts">
	import { Fa } from 'svelte-fa';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import { faCircle } from '@fortawesome/free-regular-svg-icons';
	import { MarkerEnum, type MarkerType } from '$lib/constants';
	import clsx from 'clsx';

	export let type: MarkerType;
	export let className: string = '';

	$: styles = clsx(type === MarkerEnum.CIRCLE ? 'text-red-100' : 'text-blue-100', className);
</script>

<Fa icon={type === MarkerEnum.CROSS ? faX : faCircle} class={styles} />
