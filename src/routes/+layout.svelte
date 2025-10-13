<!--TODO : do not forget to add responsiveness-->

<script lang="ts">
	import '../app.css';
	import websiteIcon from '$lib/assets/icons/logo_website.svg';
	import Navbar from '$lib/LayoutComponents/Header/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	import Button from '$lib/components/ui/button/button.svelte';
	let { children } = $props();

	let links: Record<string, string> = {
		Home: '/',
		Summary: '/summary',
		Contact: '/contact'
	};
</script>

<svelte:head>
	<link rel="icon" href={websiteIcon} />
	<title>bookify</title>
</svelte:head>

<ModeWatcher />

<header class="relative m-0 flex h-36 w-full items-center justify-center p-0">
	<Navbar />
</header>

<section
	id="main_links_of_the_website"
	class="relative m-0 flex h-16 w-full items-center justify-center p-0"
>
	<nav class="relative h-full w-[80%] overflow-hidden">
		<ul class="flex h-full w-full items-center justify-evenly">
			{#each Object.entries(links) as [link, href]}
				<Button variant={'link'} size={'default'} href={href} class="text-lg">
					{link}
				</Button>
			{/each}
		</ul>
	</nav>
</section>

{@render children?.()}
