<script lang="ts">
	import '@fortawesome/fontawesome-svg-core/styles.css';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import profilePic from '$lib/assets/images/hero/profile-pic.png';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main
	class={`relative scroll-smooth font-sf-pro block h-screen max-h-screen w-screen overflow-y-auto overflow-x-hidden bg-light-neutral-0 pb-24`}
>
	<!-- header -->
	<header class={`sticky top-0 z-50 flex w-screen flex-row items-center justify-center`}>
		<!-- navbar wrapper -->
		<div
			class={`flex h-14 min-h-14 w-full flex-row items-center justify-center bg-light-neutral-0`}
		>
			<!-- navbar content -->
			<div class={`flex h-full w-full max-w-screen-lg flex-row items-center justify-between`}>
				<!-- leading -->
				<div class={`flex h-full min-w-max flex-row items-center justify-start`}>
					<!-- brand -->
					<a href="/" class={`text-center text-lg font-medium text-light-neutral-110`}> n.didi </a>
				</div>
				<!-- trailing -->
				<div class={`flex h-full min-w-max flex-row items-center justify-end`}>
					<ul class={`flex h-full flex-row items-center justify-end gap-4`}>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a href="#about" class={`text-center text-md font-medium text-light-neutral-60`}
								>about</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a href="#experience" class={`text-center text-md font-medium text-light-neutral-60`}
								>experience</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a href="#projects" class={`text-center text-md font-medium text-light-neutral-60`}
								>projects</a
							>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a href="/" class={`text-center text-md font-medium text-light-neutral-60`}>skills</a>
						</li>
						<li class={`flex h-full flex-col items-center justify-center`}>
							<a href="/" class={`text-center text-md font-medium text-light-neutral-60`}>contact</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<!-- about section -->
	<section id="about" class={`flex w-screen h-screen flex-col items-center justify-center`}>
		<!-- content wrapper -->
		<div class={` flex w-full max-w-screen-lg flex-col items-center justify-center`}>
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
							class={`mt-4 font-light max-w-full text-justify text-lg leading-tight tracking-wide text-light-neutral-70`}
						>
							I create user-friendly design and build reliable web and mobile applications.
						</p>
					</div>

					<!-- bottom -->
					<div class={`flex w-full max-w-full flex-col items-center justify-end gap-2`}>
						<!-- social links -->
						<div class={`flex w-full max-w-full flex-row items-center justify-start gap-4`}>
							<a
								href="/"
								class={`flex h-8 min-h-8 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105`}
							>
								<FontAwesomeIcon
									icon={faGithub}
									class={`align-middle text-[34px] text-light-neutral-110`}
								></FontAwesomeIcon>
							</a>
							<a
								href="/"
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
	<section id="experience" class={`flex w-screen flex-col items-center justify-center border-t`}>
		<!-- content wrapper -->
		<div class={`mt-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div
				class={`flex py-4 w-full flex-row items-center justify-start bg-light-neutral-0`}
			>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Experience.</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start divide-y divide-light-neutral-20`}
			>
				{#each data.experience as experience}
					<ExperienceCard {experience}></ExperienceCard>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- projects -->
	<section id="projects" class={`flex w-screen flex-col items-center justify-center border-t`}>
		<!-- content wrapper -->
		<div class={`mt-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div
				class={`flex py-4 w-full flex-row items-center justify-start bg-light-neutral-0`}
			>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Featured Projects.</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start divide-y divide-light-neutral-20`}
			>
				
			</div>
		</div>
	</section>
	
	<!-- skills -->
	<section id="skills" class={`flex w-screen flex-col items-center justify-center border-t`}>
		<!-- content wrapper -->
		<div class={`mt-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div
				class={`flex py-4 w-full flex-row items-center justify-start bg-light-neutral-0`}
			>
				<p class={`text-start text-headline font-bold text-light-neutral-40`}>Skills.</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start divide-y divide-light-neutral-20`}
			>
				
			</div>
		</div>
	</section>

	<!-- contact -->
	<section id="contact" class={`flex w-screen flex-col items-center justify-center border-t`}>
		<!-- content wrapper -->
		<div class={`mt-24 flex w-full max-w-screen-lg flex-col items-center justify-center gap-4`}>
			<!-- header -->
			<div
				class={`flex py-4 w-full flex-row items-center justify-start bg-light-neutral-0`}
			>
				<p class={`text-start text-[40px] font-bold text-light-neutral-110`}>Let Get in Touch</p>
			</div>
			<div
				class={`flex w-full flex-col items-start justify-start divide-y divide-light-neutral-20`}
			>
				
			</div>
		</div>
	</section>

</main>
