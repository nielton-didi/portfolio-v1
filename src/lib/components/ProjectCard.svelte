<script lang="ts">
	import type { ProjectDTO } from '$lib/dto/system.dto';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
	import Pills from './Pills.svelte';
	export let project: ProjectDTO;
</script>

<a href={project.redirectUrl} class={`group flex w-full flex-col items-start justify-start gap-6 project-card scale-100 transition-all duration-500 ease-in-out opacity-20`}>
	<!-- leading -->
	<div class={`flex w-full flex-col items-start justify-start`}>
		<p
			class={`flex max-w-2xl flex-row items-center justify-start gap-4 text-[40px] font-bold leading-tight`}
		>
			{project.title}
			<span class={`text-light-neutral-110 group-hover:text-light-neutral-60`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-10 transition-all duration-300 ease-in-out group-hover:size-12 group-hover:translate-x-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
					/>
				</svg>
			</span>
		</p>
		<p class={`mt-4 text-lg font-normal leading-tight text-light-neutral-70`}>
			{project.description}
		</p>
	</div>

	<div class={`flex w-full flex-row items-start justify-start gap-4`}>
		{#each project.skills as skill}
			<Pills title={skill}></Pills>
		{/each}
	</div>

	<!-- image wrapper -->
	<div
		class={`flex aspect-[2/1] w-full flex-col items-center justify-center rounded-xl bg-light-neutral-10 overflow-hidden`}
	>
		<img src={project.imageUrl} alt="project" srcset="" />
	</div>
</a>
