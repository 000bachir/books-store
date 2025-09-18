<!--TODO : do not forget to add responsiveness-->

<script lang="ts">
	import '../app.css';
	import websiteIcon from '$lib/assets/icons/icons-knowledge-logo.svg';
	import Navbar from '$lib/LayoutComponents/Header/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import HomeIcon from '$lib/components/widgets/svgIcons/HomeIcon.svelte';
	import ContactIcon from '$lib/components/widgets/svgIcons/ContactIcon.svelte';
	import Summary from '$lib/components/widgets/svgIcons/Summary.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	let { children } = $props();

	// export type linkItem = {
	// 	href: string;
	// 	icon: HomeIcon;
	// };

	// let links: Record<string, linkItem> = {
	// 	"Home": {
	// 		href: '/',
	// 		icon: HomeIcon
	// 	},
	// 	"Contact": {
	// 		href: '/Contact',
	// 		icon: ContactIcon
	// 	},
	// 	"Summary": {
	// 		href: '/Summary',
	// 		icon: Summary
	// 	}
	// };

	let links: Record<string, string> = {
		Home: '/',
		Summary: '/Summary',
		Contact: '/Contact'
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
