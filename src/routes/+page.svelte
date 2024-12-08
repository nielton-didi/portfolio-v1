<script lang="ts">
	import '@fortawesome/fontawesome-svg-core/styles.css';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import profilePic from '$lib/assets/images/hero/profile-pic.png';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import type { PageData } from './$types';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { onMount } from 'svelte';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData;

	onMount(() => {
		// Select all project cards
		const projectCards = document.querySelectorAll('.project-card');

		// Create an observer instance
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Element is fully in view; scale it up
						entry.target.classList.replace('scale-90', 'scale-100');
						entry.target.classList.replace('opacity-20', 'opacity-100');
					} else {
						// Element is not fully in view; scale it down
						entry.target.classList.replace('scale-100', 'scale-90');
						entry.target.classList.replace('opacity-100', 'opacity-20');
					}
				});
			},
			{
				threshold: [0.2, 1.0] // Adjust thresholds as needed
			}
		);

		// Observe each project card
		projectCards.forEach((card) => observer.observe(card));

		// Cleanup observer on unmount
		return () => observer.disconnect();
	});
</script>

<main
	class={`relative block h-screen max-h-screen w-screen scroll-p-14 overflow-y-auto overflow-x-hidden scroll-smooth bg-light-neutral-0 pb-24 font-sf-pro`}
>
	<!-- header -->
	<header class={`sticky top-0 z-50 flex w-screen flex-row items-center justify-center`}>
		<!-- navbar wrapper -->
		<div
			class={`flex h-20 min-h-20 w-full flex-row items-center justify-center bg-light-neutral-0`}
		>
			<!-- navbar content -->
			<div class={`flex h-full w-full max-w-screen-lg flex-row items-center justify-between`}>
				<!-- leading -->
				<div class={`flex h-full min-w-max flex-row items-center justify-start`}>
					<!-- brand -->
					<a
						href="/"
						onclick={() => {
							window.scrollTo({ top: 0 });
						}}
						class={`text-center text-xl font-bold text-light-neutral-110`}
					>
						Nielton.
					</a>
				</div>
				<!-- trailing -->
				<div class={`flex h-full min-w-max flex-row items-center justify-end`}>
					<ul class={`flex h-full flex-row items-center justify-end gap-10`}>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#about"
								class={`text-center text-md font-medium uppercase text-light-neutral-70`}>about</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#experience"
								class={`text-center text-md font-medium uppercase text-light-neutral-70`}
								>experience</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#projects"
								class={`text-center text-md font-medium uppercase text-light-neutral-70`}
								>projects</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#skills"
								class={`text-center text-md font-medium uppercase text-light-neutral-70`}>skills</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#contact"
								class={`text-center text-md font-medium uppercase text-light-neutral-70`}>contact</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<!-- about section -->
	<section
		id="about"
		class={`flex h-screen max-h-screen w-screen flex-col items-center justify-center`}
	>
		<!-- content wrapper -->
		<div class={`my-24 flex w-full max-w-screen-lg flex-col items-center justify-center`}>
			<!-- hero content -->
			<div class={`flex w-full flex-row items-start justify-between gap-6`}>
				<!-- leading -->
				<div
					class={`gap flex h-60 max-h-60 min-h-60 w-full flex-col items-start justify-between overflow-visible`}
				>
					<!-- top -->
					<div class={`w-full flex-col items-start justify-start`}>
						<p class={`text-2xl font-semibold leading-tight tracking-wide text-light-neutral-60`}>
							Nielton Didi
						</p>
						<p
							class={`mt-0 text-[52px] font-semibold leading-tight tracking-wide text-light-neutral-110`}
						>
							Designer & Developer
						</p>
						<p
							class={`mt-4 max-w-full text-justify text-lg font-light leading-tight tracking-wide text-light-neutral-70`}
						>
							I create user-friendly design and build reliable web and mobile applications.
						</p>
					</div>

					<!-- bottom -->
					<div class={`flex w-full max-w-full flex-col items-center justify-end gap-2`}>
						<!-- social links -->
						<div class={`flex w-full max-w-full flex-row items-center justify-start gap-4`}>
							<a
								href="https://github.com/nielton-didi"
								target="_blank"
								class={`flex h-8 min-h-8 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105`}
							>
								<FontAwesomeIcon
									icon={faGithub}
									class={`align-middle text-[34px] text-light-neutral-110`}
								></FontAwesomeIcon>
							</a>
							<a
								href="http://www.linkedin.com/in/nieltondidi"
								target="_blank"
								class={`flex h-8 min-h-8 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105`}
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									class={`align-middle text-[36px] text-light-neutral-110`}
								></FontAwesomeIcon>
							</a>
							<!-- <a
								href="/"
								class={`flex h-8 min-h-8 flex-row items-center justify-center rounded bg-light-neutral-110 px-4 text-base font-medium leading-tight tracking-wider text-light-neutral-0 transition-all duration-300 ease-in-out hover:scale-105`}
							>
								View resume
							</a> -->
						</div>
					</div>
				</div>
				<!-- trailing -->
				<div
					class={`aspect-square w-60 min-w-60 overflow-clip rounded-md bg-light-neutral-0 opacity-75 shadow-md shadow-light-neutral-10 transition-all duration-500 ease-in-out hover:opacity-100`}
				>
					<div
						class={`h-full w-full scale-110 transform rounded bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-100`}
						style="background-image: url({profilePic});"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- experience -->
	<section id="experience" class={`flex w-screen flex-col items-center justify-start`}>
		<!-- content wrapper -->
		<div class={`my-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div class={`flex w-full flex-row items-center justify-start bg-light-neutral-0 py-4`}>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Experience.</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start divide-y divide-light-neutral-20 gap-24`}
			>
				{#each data.experience as experience}
					<ExperienceCard {experience}></ExperienceCard>
				{/each}
			</div>
		</div>
	</section>

	<!-- projects -->
	<section id="projects" class={`flex w-screen flex-col items-center justify-center`}>
		<!-- content wrapper -->
		<div class={`my-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div class={`flex w-full flex-row items-center justify-start bg-light-neutral-0 py-4`}>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Featured Projects.</p>
			</div>
			<div class={`flex w-full flex-col items-start justify-start gap-40`}>
				{#each data.projects as project}
					<ProjectCard {project}></ProjectCard>
				{/each}
			</div>
		</div>
	</section>

	<!-- skills -->
	<section id="skills" class={`flex w-screen flex-col items-center justify-center`}>
		<!-- content wrapper -->
		<div class={`mt-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div class={`flex w-full flex-row items-center justify-start bg-light-neutral-0 py-4`}>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Skills.</p>
			</div>
			<div class={`flex w-full flex-col items-start justify-start`}></div>
		</div>
	</section>

	<!-- contact -->
	<section id="contact" class={`flex w-screen flex-col items-center justify-center`}>
		<!-- content wrapper -->
		<div class={`my-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div class={`flex w-full flex-col items-start justify-start gap-4 bg-light-neutral-0 py-4`}>
				<p class={`text-start text-[40px] font-bold text-light-neutral-110`}>Let Get in Touch</p>
				<p class={`max-w-xl text-start text-lg font-normal leading-tight text-light-neutral-70`}>
					Let’s build and design something amazing together! Whether you’re hiring, collaborating,
					or just brainstorming, my inbox is always open.
				</p>
			</div>
			<div class={`flex w-full flex-col items-start justify-start`}>
				<div class={`flex w-full flex-row items-center justify-start gap-10`}>
					<a
						href="http://www.linkedin.com/in/nieltondidi"
						target="_blank"
						class={`group flex flex-row items-center justify-start gap-4 text-light-neutral-110 hover:text-light-neutral-70`}
					>
						<FontAwesomeIcon icon={faArrowRight} class={`align-middle text-lg `}></FontAwesomeIcon>
						<span class={`text-xl font-normal `}>LinkedIn</span>
					</a>
					<a
						href="mailto:nieltondidi@gmail.com"
						class={`group flex flex-row items-center justify-start gap-4 text-light-neutral-110 hover:text-light-neutral-70`}
					>
						<FontAwesomeIcon icon={faArrowRight} class={`align-middle text-lg `}></FontAwesomeIcon>
						<span class={`text-xl font-normal `}>Email</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<footer class={`flex w-full flex-col items-center justify-center`}>
		<div class={`flex w-full max-w-screen-lg flex-col items-start justify-center gap-4 py-4`}>
			<p class={`text-lg font-normal leading-tight text-light-neutral-110`}>
				Designed and coded by Nielton Didi in Svelte and deployed in Vercel.
			</p>
			<p class={`text-md font-normal leading-tight text-light-neutral-70`}>© Nielton Didi 2024</p>
		</div>
	</footer>
</main>
