<script lang="ts">
	import type { ExperienceDTO } from '$lib/dto/system.dto';
	import { brightness } from '$lib/stores/theme.store';
	import Pills from './Pills.svelte';

	export let experience: ExperienceDTO;
</script>

<div
	class={`flex w-full flex-row items-start justify-start gap-6 rounded-md bg-${$brightness}-neutral-0 project-card scale-100 py-6 transition-all duration-500 ease-in-out`}
>
	<!-- leading -->
	<div class={`flex w-full flex-col items-start justify-start`}>
		<p class={`text-md font-normal leading-tight text-${$brightness}-neutral-70`}></p>
		<p class={`text-[40px] font-bold leading-tight tracking-wide text-${$brightness}-neutral-110`}>
			{experience.position}
		</p>
		<p class={`mt-4 text-lg font-normal leading-relaxed text-${$brightness}-neutral-90`}>
			{experience.companyName} — {experience.startYear} to {experience.endYear}
		</p>
	</div>
	<!-- trailing -->
	<div class={`flex w-full flex-col items-start justify-start gap-10`}>
		<p class={`text-lg font-normal leading-relaxed tracking-wide text-${$brightness}-neutral-90`}>
			{experience.jobDescription}
		</p>
		<div class={`flex w-full flex-row flex-wrap items-center justify-start gap-2`}>
			{#each experience.skills as skill}
				<Pills title={skill}></Pills>
			{/each}
		</div>
	</div>
</div>
