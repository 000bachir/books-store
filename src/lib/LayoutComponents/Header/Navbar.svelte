<script lang="ts">
	import { Dropdown, DropdownItem, Button, DarkMode } from 'flowbite-svelte';
	import { page } from '$app/state';
	let activeUrl: string = $derived(page.url.pathname);
	import LightIcon from '$lib/components/ui/svgIcons/LightIcon.svelte';
	import MoonIcon from '$lib/components/ui/svgIcons/MoonIcon.svelte';
</script>

<nav class="relative mx-auto grid h-[95%] w-[95%] grid-cols-3">
	<div id="logo_name_of_the_website" class=" col-span-1 flex items-center justify-center">
		<a href="/" class="flex gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
				<path
					fill="#553788"
					d="M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4z"
				/>
				<path fill="#9266cc" d="M34 33h-1V23h1a1 1 0 1 0 0-2H10c-4 0-4 14 0 14h24a1 1 0 1 0 0-2" />
				<path fill="#ccd6dd" d="M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10" />
				<path
					fill="#99aab5"
					d="M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25"
				/>
				<path fill="#269" d="M12 8a4 4 0 0 1-4 4H4C0 12 0 1 4 1h4a4 4 0 0 1 4 4z" />
				<path fill="#55acee" d="M31 10h-1V3h1a1 1 0 1 0 0-2H7C3 1 3 12 7 12h24a1 1 0 1 0 0-2" />
				<path fill="#ccd6dd" d="M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7" />
				<path
					fill="#99aab5"
					d="M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5C6.718 6.142 7.193 5 8 5"
				/>
				<path fill="#f4900c" d="M20 17a4 4 0 0 1-4 4H6c-4 0-4-9 0-9h10a4 4 0 0 1 4 4z" />
				<path fill="#ffac33" d="M35 19h-1v-5h1a1 1 0 1 0 0-2H15c-4 0-4 9 0 9h20a1 1 0 1 0 0-2" />
				<path fill="#ccd6dd" d="M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5" />
				<path
					fill="#99aab5"
					d="M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5c.198-.839.657-1.5 1.383-1.5"
				/>
			</svg>
			<h1 class="text-3xl font-semibold">Bookify</h1>
		</a>
	</div>
	<div id="categories_and_search_filter" class="col-span-2 flex items-center justify-center">
		<!-- <Button class="flex items-center justify-center gap-2 text-black" color="blue">
			<h1>Dropdown button</h1>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M16.707 13.293a1 1 0 0 0-1.414 0L13 15.586V8a1 1 0 1 0-2 0v7.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414L12 19.414l4.707-4.707a1 1 0 0 0 0-1.414"
				/></svg
			>
		</Button> -->
		<!-- <Dropdown {activeUrl} simple offset={5}>
			<DropdownItem href="/">Home</DropdownItem>
			<DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
			<DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
			<DropdownItem href="/docs/components/alert">Alert</DropdownItem>
		</Dropdown> -->

		<DarkMode>
			<button
				class="text-white "
			>
			<img src="" alt="">
			</button>
		</DarkMode>
	</div>
</nav>
