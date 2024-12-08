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
	import ThemeModeButton from '$lib/components/ThemeModeButton.svelte';
	import { brightness } from '$lib/stores/theme.store';

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
	class={`relative block h-screen max-h-screen w-screen scroll-p-20 overflow-y-auto overflow-x-hidden scroll-smooth bg-${$brightness}-neutral-0 pb-24 font-sf-pro`}
>
	<!-- header -->
	<header class={`sticky top-0 z-50 flex w-screen flex-row items-center justify-center`}>
		<!-- navbar wrapper -->
		<div
			class={`flex h-20 min-h-20 w-full flex-row items-center justify-center bg-${$brightness}-neutral-0`}
		>
			<!-- navbar content -->
			<div class={`flex h-full w-full max-w-screen-lg flex-row items-center justify-between`}>
				<!-- leading -->
				<div class={`flex h-full min-w-max flex-row items-center justify-start gap-6`}>
					<!-- brand -->
					<a
						href="/"
						onclick={() => {
							window.scrollTo({ top: 0 });
						}}
						class={`text-center text-2xl font-bold text-${$brightness}-neutral-110`}
					>
						Nielton.
					</a>

					<ThemeModeButton></ThemeModeButton>
				</div>
				<!-- trailing -->
				<div class={`flex h-full min-w-max flex-row items-center justify-end`}>
					<ul class={`flex h-full flex-row items-center justify-end gap-10`}>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#about"
								class={`text-center text-lg font-medium uppercase text-${$brightness}-neutral-70`}
								>about</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#experience"
								class={`text-center text-lg font-medium uppercase text-${$brightness}-neutral-70`}
								>experience</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#projects"
								class={`text-center text-lg font-medium uppercase text-${$brightness}-neutral-70`}
								>projects</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#skills"
								class={`text-center text-lg font-medium uppercase text-${$brightness}-neutral-70`}
								>skills</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a
								href="#contact"
								class={`text-center text-lg font-medium uppercase text-${$brightness}-neutral-70`}
								>contact</a
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
		<div class={`flex w-full max-w-screen-lg flex-col items-center justify-center`}>
			<!-- hero content -->
			<div class={`flex w-full flex-row items-start justify-between gap-6`}>
				<!-- leading -->
				<div
					class={`gap flex h-60 max-h-60 min-h-60 w-full flex-col items-start justify-between overflow-visible`}
				>
					<!-- top -->
					<div class={`w-full flex-col items-start justify-start`}>
						<p
							class={`text-[52px] font-bold leading-tight tracking-wide text-${$brightness}-neutral-50`}
						>
							Nielton Didi.
						</p>
						<p
							class={`mt-0 text-[52px] font-bold leading-tight tracking-wide text-${$brightness}-neutral-110`}
						>
							Designer & Developer.
						</p>
						<p
							class={`mt-4 max-w-full text-justify text-xl font-light leading-tight tracking-wide text-${$brightness}-neutral-90`}
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
								aria-label="github"
								class={`flex h-10 min-h-10 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105`}
							>
								<span class={`text-${$brightness}-neutral-110`}>
									<svg
										viewBox="0 0 20 20"
										version="1.1"
										width={38}
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										fill="currentColor"
										><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										></g><g id="SVGRepo_iconCarrier">
											<title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs>
											<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<g
													id="Dribbble-Light-Preview"
													transform="translate(-140.000000, -7559.000000)"
													fill="currentColor"
												>
													<g id="icons" transform="translate(56.000000, 160.000000)">
														<path
															d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
															id="github-[#142]"
														>
														</path>
													</g>
												</g>
											</g>
										</g></svg
									>
								</span>
							</a>
							<a
								href="https://github.com/nielton-didi"
								target="_blank"
								aria-label="github"
								class={`flex h-10 min-h-10 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105`}
							>
								<span class={`text-${$brightness}-neutral-110`}>
									

									<svg
										fill="currentColor"
										width="40px"
										height="40px"
										viewBox="0 0 32 32"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										></g><g id="SVGRepo_iconCarrier">
											<title>linkedin</title>
											<path
												d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"
											></path>
										</g></svg
									>
								</span>
							</a>
						</div>
					</div>
				</div>
				<!-- trailing -->
				<div
					class={`aspect-square w-60 min-w-60 overflow-clip rounded-md bg-${$brightness}-neutral-0 opacity-75 shadow-md shadow-${$brightness}-neutral-10 transition-all duration-500 ease-in-out hover:opacity-100`}
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
			<div
				class={`flex w-full flex-row items-center justify-start bg-${$brightness}-neutral-0 py-4`}
			>
				<p class={`text-start text-headline font-bold text-${$brightness}-neutral-50`}>
					Experience.
				</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start gap-24 divide-y divide-${$brightness}-neutral-20`}
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
			<div
				class={`flex w-full flex-row items-center justify-start bg-${$brightness}-neutral-0 py-4`}
			>
				<p class={`text-start text-headline font-bold text-${$brightness}-neutral-50`}>
					Featured Projects.
				</p>
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
			<div
				class={`flex w-full flex-row items-center justify-start bg-${$brightness}-neutral-0 py-4`}
			>
				<p class={`text-start text-headline font-bold text-${$brightness}-neutral-50`}>Skills.</p>
			</div>
			<div class={`flex w-full flex-col items-start justify-start`}></div>
		</div>
	</section>

	<!-- contact -->
	<section id="contact" class={`flex w-screen flex-col items-center justify-center`}>
		<!-- content wrapper -->
		<div class={`my-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div
				class={`flex w-full flex-col items-start justify-start gap-4 bg-${$brightness}-neutral-0 py-4`}
			>
				<p class={`text-start text-[40px] font-bold text-${$brightness}-neutral-110`}>
					Let Get in Touch
				</p>
				<p
					class={`max-w-xl text-start text-lg font-normal leading-tight text-${$brightness}-neutral-70`}
				>
					Let’s build and design something amazing together! Whether you’re hiring, collaborating,
					or just brainstorming, my inbox is always open.
				</p>
			</div>
			<div class={`flex w-full flex-col items-start justify-start`}>
				<div class={`flex w-full flex-row items-center justify-start gap-10`}>
					<a
						href="http://www.linkedin.com/in/nieltondidi"
						target="_blank"
						class={`group flex flex-row items-center justify-start gap-4 text-${$brightness}-neutral-110 hover:text-${$brightness}-neutral-70`}
					>
						<FontAwesomeIcon icon={faArrowRight} class={`align-middle text-lg `}></FontAwesomeIcon>
						<span class={`text-xl font-normal `}>LinkedIn</span>
					</a>
					<a
						href="mailto:nieltondidi@gmail.com"
						class={`group flex flex-row items-center justify-start gap-4 text-${$brightness}-neutral-110 hover:text-${$brightness}-neutral-70`}
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
			<p class={`text-lg font-normal leading-tight text-${$brightness}-neutral-90`}>
				Designed and coded by Nielton Didi in Svelte and deployed in Vercel.
			</p>
			<p class={`text-md font-normal leading-tight text-${$brightness}-neutral-70`}>
				© Nielton Didi 2024
			</p>
		</div>
	</footer>
</main>
