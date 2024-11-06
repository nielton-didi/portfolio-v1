<script lang="ts">
	import ImageCard from "$lib/components/ImageCard.svelte";

</script>

<div class={`flex w-full flex-col items-center justify-start bg-light-neutral-20`}>
	<section
		class={`mt-14 flex h-fit min-h-fit w-full flex-col items-center justify-center bg-light-neutral-10 shadow-sm`}
	>
		<div class={`flex w-full max-w-[1040px] flex-row items-center justify-start border-b border-light-neutral-30 mt-24`}>
			<div class={`flex w-1/2 flex-col items-start justify-center`}>
				<h1 class={`mb-2 text-[56px] font-bold leading-tight text-light-neutral-100`}>about.</h1>
				<p class={`mb-6 text-xl font-light leading-tight text-light-neutral-60`}>
					I'm a software developer based in Sarawak, Malaysia
				</p>
				<p class={`text-justify text-lg font-light leading-normal text-light-neutral-70 mb-6`}>
					Since 2020, I've been passionate about creating all kinds of applications—web, mobile, and
					even desktop. When I'm not coding, you'll find me cooking, drawing or on the badminton
					court.
				</p>
			</div>
		</div>
		<!-- photo gallery -->
		<div class={`w-full max-w-[1040px] flex flex-row justify-between items-center flex-wrap py-8`}>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
        </div>
	</section>
	<section class={`h-screen w-full`}></section>
</div>
