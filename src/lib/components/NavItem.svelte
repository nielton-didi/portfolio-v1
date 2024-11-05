<script lang="ts">
	export let title: string = '';
	export let url: string = '';
	export let active: boolean = false;

	export let onClick = () => {};
</script>

<li class={`flex h-full flex-col items-center justify-center w-full md:w-fit`}>
	<a
		href={url}
		on:click={onClick}
		class="group flex h-full flex-col items-center justify-center px-2 w-full md:w-fit"
	>
		<span
			class={`text-md font-normal lowercase ${active ? `text-dark-neutral-90` : `text-dark-neutral-100`} transition-all duration-300 group-hover:text-dark-neutral-90`}
		>
			{title}
		</span>
	</a>
</li>
