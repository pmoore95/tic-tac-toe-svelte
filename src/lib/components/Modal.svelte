<script lang="ts">
	export let className: string | undefined = undefined;
</script>

<div class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
	<div class="absolute h-full w-full bg-black opacity-50 pointer-events-none"></div>
	<div class={`bg-white z-10 p-20 rounded-sm shadow-2xl shadow-black ${className}`}>
		<slot />
	</div>
</div>
