<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Gmail from '$lib/components/widgets/svgIcons/Gmail.svelte';
	import Linkedin from '$lib/components/widgets/svgIcons/Linkedin.svelte';
	import Upwork from '$lib/components/widgets/svgIcons/Upwork.svelte';
	import Fiveer from '$lib/components/widgets/svgIcons/Fiverr.svelte';
	import Github from '$lib/components/widgets/svgIcons/Github.svelte';
	import Fiverr from '$lib/components/widgets/svgIcons/Fiverr.svelte';
</script>

<section class="relative h-auto w-full overflow-hidden">
	<div class="relative mx-auto flex h-18 w-[95%] items-center justify-center overflow-hidden">
		<h1 class="text-3xl font-semibold">Talk to me</h1>
	</div>
	<div class="grid h-80 w-full grid-cols-3 border-t-[1px] border-b-[1px] dark:border-white border-black">
		<div
			class="relative col-span-1 flex h-full w-full flex-col items-center justify-center gap-4"
		>
			<p class="text-2xl font-semibold">Write me a mail</p>
			<Button
				type="submit"
				class="rounded-lg px-6 py-3 text-4xl font-semibold shadow"
				id="gmail-btn"
			>
				<a href="https://mail.google.com/mail/?view=cm&fs=1&to=peakdev698@gmail.com">
					<Gmail />
				</a>
			</Button>
		</div>
		<div class="relative col-span-1 flex h-full w-full flex-col items-center justify-center gap-4 border-l-[1px] border-r-[1px] dark:border-white border-black">
			<p class="text-2xl font-semibold">Check me !!!</p>
			<div class="flex items-center justify-center gap-6">
				<a href="https://www.linkedin.com/in/seridi-mohammed-98a70423b/">
					<Linkedin />
				</a>
				<a href="https://github.com/000bachir">
					<Github />
				</a>
			</div>
		</div>
		<div class="relative flex h-full w-full flex-col items-center justify-center gap-4">
			<p class="text-2xl font-semibold">Write me a mail</p>
			<div class="flex items-center justify-center gap-6">
				<!--upwork-->
				<a href="https://www.upwork.com/freelancers/~01a03f0469a3b5fcc2">
					<Upwork />
				</a>

				<!--fivver-->
				<a href="https://fr.fiverr.com/users/bachir_24/manage_gigs">
					<Fiveer />
				</a>
			</div>
		</div>
	</div>
</section>
