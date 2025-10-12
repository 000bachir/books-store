<script lang="ts">
	import type { GoogleBookItem } from '$lib/types.js';
	let { data } = $props();
	//@ts-ignore
	const books: GoogleBookItem[] = data.books;
	const slug = data.slug;

	let BookSlugParamater: GoogleBookItem[] = $state([]);
	let IsLoading: boolean = $state(true);
	let errorMessage: string = $state('');

	$effect(() => {
		if (data.books) {
			BookSlugParamater = data.books;
			IsLoading = false;
		} else {
			errorMessage = 'failed to load the books from the api call';
			IsLoading = false;
		}
	});


    

</script>

<h1 class="text-2xl font-bold capitalize">{slug} Books</h1>

<ul class="mt-4 grid grid-cols-2 gap-4">
	{#each books as book}
		<li class="rounded border p-2 shadow">
			<h2 class="font-semibold">
				{book.volumeInfo.title}
			</h2>
			<p class="text-sm text-gray-600">
				{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
			</p>
			<img
				src={book.volumeInfo.imageLinks?.thumbnail}
				alt={book.volumeInfo.title}
				class="mt-2 rounded"
			/>
		</li>
	{/each}
</ul>
