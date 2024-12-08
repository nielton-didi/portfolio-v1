<script lang="ts">
	import { brightness } from "$lib/stores/theme.store";

	export let title: string = '';
</script>

<div
	class={`flex h-5 flex-row items-center justify-center rounded-full md:h-9 bg-${$brightness}-neutral-30 px-2 md:px-4`}
>
	<p class={`text-md font-normal md:text-md text-${$brightness}-neutral-90 leading-tight`}>
		{title}
	</p>
</div>
