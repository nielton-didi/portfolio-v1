<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0; // Track the current slide
	const images = ['/path-to-image1.jpg', '/path-to-image2.jpg', '/path-to-image3.jpg']; // Replace with your image URLs

	const navigate = (direction: 'prev' | 'next') => {
		if (direction === 'prev') {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
		} else {
			currentIndex = (currentIndex + 1) % images.length;
		}
	};

	const goToSlide = (index: number) => {
		currentIndex = index;
	};
</script>

<div class="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden">
	<!-- Carousel Items -->
	<div
		class="flex transition-transform duration-500"
		style={`transform: translateX(-${currentIndex * 100}%);`}
	>
		{#each images as image}
			<div
				class="flex h-96 w-full flex-shrink-0 flex-col items-center justify-center rounded-md bg-light-neutral-10"
			>
            <div class={`flex flex-col justify-start items-start`}>

            </div>
        </div>
		{/each}
	</div>

	<!-- Indicators -->
	<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
		{#each images as _, index}
			<button
				aria-label="next"
				class="h-3 w-3 rounded-full bg-black hover:bg-gray-400"
				class:selected={currentIndex === index}
				on:click={() => goToSlide(index)}
			></button>
		{/each}
	</div>
</div>

<style>
	button[selected] {
		background-color: #000;
	}
</style>
