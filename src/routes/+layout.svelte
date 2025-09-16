<script lang="ts">
	import '../app.css';
	import websiteIcon from '$lib/assets/icons/icons-knowledge-logo.svg';
	import Navbar from '$lib/LayoutComponents/Header/Navbar.svelte';
	import { DarkMode } from "flowbite-svelte";


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={websiteIcon} />
	<title>
		bookify
	</title>

</svelte:head>

<DarkMode />

<header class="relative m-0 h-36 w-full  p-0  flex items-center justify-center">
	<Navbar />
</header>

{@render children?.()}
