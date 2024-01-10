<script lang="ts">
	import Marker from "$lib/components/Marker.svelte";
    import playerMarker from "$lib/stores/playerMarker";
    import cpuMarker from "$lib/stores/cpuMarker";
	import { MarkerEnum } from "$lib/constants";

    const BACKGROUND_COLOR = {
        [MarkerEnum.CIRCLE]: 'bg-red-500',
        [MarkerEnum.CROSS]: 'bg-blue-500'
    }

</script>


<div class="ml-8 grid grid-cols-2 gap-4">
    <div class="flex items-center">
        <h2 class="font-dela-gothic text-white text-2xl mr-4 text-right w-full">You:</h2>
    </div>
    <div class={`w-[50px] h-[50px] rounded-full p-2 ${BACKGROUND_COLOR[$playerMarker]}`}>
        <Marker type={$playerMarker} className="w-full !h-full" />
    </div>
    <div class="flex items-center">
        <h2 class="font-dela-gothic text-white text-2xl mr-4 text-right w-full">CPU:</h2>
    </div>
    <div class={`w-[50px] h-[50px] bg-blue-500 rounded-full p-2 ${BACKGROUND_COLOR[$cpuMarker]}`}>
        <Marker type={$cpuMarker} className="w-full !h-full" />
    </div>
</div>