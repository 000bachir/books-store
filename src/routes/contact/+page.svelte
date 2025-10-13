<script lang="ts">
	import { Linkedin } from 'lucide-svelte';
	import { Send } from 'lucide-svelte';

	const Works = [
		{ name: 'Github', href: 'https://github.com/000bachir', id: 'github' },
		{
			name: 'Linkedin',
			href: 'https://www.linkedin.com/in/seridi-mohammed-98a70423b/',
			id: 'linkedin'
		}
	];

	const Freelances = [
		{
			name: 'Upwork',
			href: 'https://www.upwork.com/freelancers/~01a03f0469a3b5fcc2',
			id: 'Upwork'
		},
		{
			name: 'Fiver',
			href: 'https://fr.fiverr.com/users/bachir_24/manage_gigs',
			id: 'fivver'
		}
	];
</script>

<main class="relative h-auto w-full overflow-hidden">
	<section class="grid h-dvh w-full grid-cols-2 grid-rows-2" id="main-container">
		<div
			class="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden border-r-[1px] border-gray-600"
			id="top-left"
		>
			<h1 class="text-3xl font-semibold text-purple-700">Send me an email in my inbox ✍️</h1>
			<button
				type="submit"
				class="rounded-lg px-6 py-3 text-4xl font-semibold shadow"
				id="gmail-btn"
			>
				<a href="mailTo:peakdev698@gmail.com">
                    <Send />
				</a>
			</button>
			<span class="px-4 text-center text-sm text-balance"
				>I use a public email and dev handle here for privacy. My full name and contact details are
				available on request or via LinkedIn</span
			>
		</div>
		<div class="bg relative h-full w-full overflow-hidden" id="top-right"></div>
		<div
			class="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden border-t-[1px] border-r-[1px] border-gray-600"
			id="bottom-left"
		>
			<h1 class="text-3xl font-semibold text-purple-700">Hire me for work or help 😁</h1>
			<div class="flex items-center justify-center gap-4" id="container-bottom-left">
				{#each Freelances as freelance}
					<button type="submit" class="rounded-lg px-6 py-3 text-4xl font-semibold shadow">
						<a href={freelance.href}>
							<Linkedin />
						</a>
					</button>
				{/each}
			</div>
		</div>
		<div
			class="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden border-t-[1px] border-gray-600"
			id="bottom-right"
		>
			<h1 class="text-center text-3xl font-semibold text-purple-700">
				I might not be the best-but I’m reliable, curious, and I make great coffee. ☕😁
			</h1>
			<!-- <div class="flex items-center justify-center gap-4" id="container-bottom-right">
				{#each Works as work}
					<button type="submit" class="rounded-lg px-6 py-3 text-4xl font-semibold shadow">
						<a href={work.href}>
							<Icon name={work.name} color={'white'} />
						</a>
					</button>
				{/each}
			</div> -->
		</div>
	</section>
</main>

<style>
	
</style>
