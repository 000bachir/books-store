<script lang="ts">
	import '../app.css';
	import websiteIcon from "$lib/assets/icons/icons-knowledge-logo.svg"
	import { ModeWatcher } from "mode-watcher"
	import Navbar from "$lib/LayoutComponents/Header/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={websiteIcon} />
</svelte:head>




<ModeWatcher />


<Navbar />

{@render children?.()}
