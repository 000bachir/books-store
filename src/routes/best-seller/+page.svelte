<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	let { data } = $props();
	console.log(data.BestSellers);


    let loading: boolean = $state(true)
</script>

<main class="relative flex h-auto w-full items-center justify-center overflow-hidden flex-col">
	<h1 class="py-6 mb-8 text-center text-3xl font-bold sm:text-4xl">Best Sellers...👓</h1>

	<div
		class="relative flex h-auto w-full flex-col items-center justify-center gap-12 overflow-hidden py-8"
	>
		<h2 class="text-2xl font-semibold text-red-600">Trigger Warning!!!</h2>
		<p class="text-center text-lg text-balance">
            Carefull choosing your next drug 😉
		</p>
	</div>

    {#if loading}
        
    {/if}

	<section class="relative mx-auto h-auto w-[95%] py-4">
		<!--first card-->
		<div
			class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
		>
			<a href="/">
				<img class="rounded-t-lg" src="https://picsum.photos/600/400/?random" alt="" />
			</a>
			<div class="p-5">
				<a href="/">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
				<a
					href="/"
					class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
					<svg
						class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>
</main>
