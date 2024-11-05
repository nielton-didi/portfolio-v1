<script lang="ts">
	import { page } from '$app/stores';
	import NavItem from '$lib/components/NavItem.svelte';

	let routes = [
		{
			title: 'about',
			url: '#about'
		},
		{
			title: 'portfolio',
			url: '#portfolio'
		},
		{
			title: 'contact',
			url: '#contact'
		},
		{
			title: 'resume',
			url: '#resume'
		}
	];

	let currentUrl: string;

	$: currentUrl = $page.url.toString();

	$: openDrawer = false;
</script>

<div
	class={`relative flex h-screen w-screen flex-col items-center justify-start bg-dark-neutral-20 font-sf-pro`}
>
	<header
		class={`absolute top-0 z-10 flex h-14 min-h-14 w-full flex-row items-center justify-center bg-dark-neutral-10`}
	>
		<div class={`flex h-full w-full max-w-[1040px] flex-row items-center justify-between px-6`}>
			<!-- leading -->
			<div class={`flex h-full flex-row items-center justify-start`}>
				<a href="#landing" class={`text-lg font-medium leading-tight text-dark-neutral-100`}>
					@n.didi
				</a>
			</div>
			<!-- trailing -->
			<div class={`flex h-full flex-row items-center justify-end`}>
				<ul class={`hidden h-full flex-row items-center justify-end md:flex`}>
					{#each routes as item}
						<NavItem title={item.title} url={item.url} active={currentUrl.includes(item.url)}
						></NavItem>
					{/each}
				</ul>
				<button
					aria-label="nav"
					type="button"
					class={`flex aspect-square flex-col items-center justify-center md:hidden`}
					on:click={() => {
						openDrawer = !openDrawer;
					}}
				>
					<span class={`text-dark-neutral-100`}>
						{#if openDrawer}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						{/if}
					</span>
				</button>
			</div>
		</div>
	</header>
	<div
		class={`absolute right-0 top-14 z-20 ${openDrawer ? `flex` : `hidden`} h-screen min-h-screen w-screen flex-col justify-start bg-dark-neutral-10 py-24`}
	>
		<ul class={`h-full flex-row items-center justify-end md:flex`}>
			{#each routes as item}
				<div class="flex h-10 w-full flex-col items-center justify-center">
					<NavItem
						title={item.title}
						url={item.url}
						active={currentUrl.includes(item.url)}
						onClick={() => {
							openDrawer = !openDrawer;
						}}
					></NavItem>
				</div>
			{/each}
		</ul>
	</div>

	<main class={`block h-full w-full overflow-auto scroll-smooth`}>
		<section
			id="landing"
			class={`relative flex h-screen w-full flex-col items-center justify-center bg-dark-neutral-20 lg:flex-row`}
		>
			<!-- left -->
			<div class={`flex h-full w-full flex-row items-center justify-end bg-dark-neutral-20 p-6 animate-slideInTop`}>
				<div class={`flex h-full w-full flex-col items-end justify-center`}>
					<p class={`text-2xl font-bold text-dark-neutral-90 md:text-[48px] lg:text-[56px]`}>
						designer
					</p>
					<p class={`max-w-sm text-end text-md text-dark-neutral-90`}>
						designing delightful, user-friendly epxeriences that make every click feel just right.
					</p>
				</div>
			</div>
			<!-- right -->
			<div
				class={`flex h-full w-full flex-row items-center justify-start bg-light-neutral-20 p-6 animate-slideInBottom `}
			>
				<div class={`flex h-full w-full flex-col items-start justify-center`}>
					<p class={`text-2xl font-bold text-light-neutral-90 md:text-[48px] lg:text-[56px]`}>
						developer
					</p>
					<p class={`max-w-sm text-start text-md text-light-neutral-90`}>
						turning ideas into smooth, reliable apps—inside and out, front to back.
					</p>
				</div>
			</div>
		</section>
		<section id="about" class={`h-screen w-full bg-dark-neutral-20`}></section>
		<section id="portfolio" class={`h-screen w-full bg-dark-neutral-20`}></section>
		<section id="contact" class={`h-screen w-full bg-dark-neutral-30`}></section>
		<section id="resume" class={`h-screen w-full bg-dark-neutral-30`}></section>
	</main>
</div>
