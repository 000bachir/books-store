<script lang="ts">
	import Loading from '$lib/components/widgets/Loading.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { NytBook } from '$lib/types';
	import { formatDate } from '$lib/utils';
	let { data } = $props();

	let BestSellingBooks: NytBook[] = $state([]);

	let isLoading: boolean = $state(true);
	let errorMessage: string = $state('');

	$effect(() => {
		if (data.BestSellers) {
			BestSellingBooks = data.BestSellers;
			isLoading = false;
		} else {
			errorMessage = 'failed to load the books from the api call';
			isLoading = false;
		}
	});

	function PretifyDescreption(description: string, maxLength: number = 100) {
		if (!description) {
			return 'no descreption found!!!';
		}
		return description.length > maxLength
			? description.substring(0, maxLength) + '...'
			: description;
	}


	function GetPubDate(book: NytBook) {
		let PublishedDate = book.created_date;
		return formatDate(PublishedDate);
	}

	function getRating(book: any) {
		return book.rank || 'no rank found';
	}
</script>

<main class="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
	<h1 class="mb-8 py-6 text-center text-3xl font-bold sm:text-4xl">Best Sellers...👓</h1>

	<div
		class="relative flex h-auto w-full flex-col items-center justify-center gap-12 overflow-hidden py-8"
	>
		<h2 class="text-2xl font-semibold text-red-600">Trigger Warning!!!</h2>
		<p class="text-center text-lg text-balance">Carefull choosing your next drug 😉</p>
	</div>

	<section class="relative mx-auto h-auto w-[95%] py-4">
		{#if isLoading}
			<div class="relative flex h-dvh w-full items-center justify-center overflow-hidden">
				<Loading />
			</div>
		{/if}

		{#if errorMessage}
			<div class="my-6 rounded-lg border border-red-200 bg-red-50 p-6 text-center">
				<p class="mb-4 font-semibold text-red-600">{errorMessage}</p>
				<Button
					variant={'destructive'}
					type={'reset'}
					size={'lg'}
					onclick={() => window.location.reload()}
					class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
				>
					Try Again
				</Button>
			</div>
		{/if}

		<!-- Books Grid -->
		{#if !isLoading && !errorMessage && BestSellingBooks.length > 0}
			<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				{#each BestSellingBooks as book}
					<div
						class="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
					>
						<div class="flex h-64 items-center justify-center overflow-hidden bg-gray-100">
							<img
								src={book.book_image}
								class="m-0 h-full w-full object-contain"
								height={book.book_image_height}
								width={book.book_image_width}
								loading="lazy"
								alt={book.title || 'Book cover'}
							/>
						</div>

						<div class="p-4 sm:p-6">
							<h3 class="mb-1 text-lg font-semibold text-gray-800">
								{book.title || 'Untitled'}
							</h3>
							<p class="mb-3 text-sm text-gray-500">{book.author}</p>

							{#if getRating(book) > 0}
								<div class="mb-3 flex items-center gap-2">
									<span class="flex">
										{#each Array(5) as _, i}
											<span class="text-yellow-400">{i < getRating(book) ? '★' : '☆'}</span>
										{/each}
									</span>
									<span class="text-sm text-gray-500">({getRating(book)})</span>
								</div>
							{/if}

							<p class="mb-3 text-sm text-gray-600">
								{PretifyDescreption(book.description ?? 'no description found')}
							</p>

							<div class="mb-4 flex flex-wrap justify-between text-xs text-gray-500">
								<span>Published: {GetPubDate(book)}</span>
							</div>

							{#if book.buy_links}
								<a
									href={book.amazon_product_url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-block rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
								>
									Buy the book
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{:else if !isLoading && !errorMessage}
			<div class="py-16 text-center text-gray-600">
				<p>No books found. Try searching for something else.</p>
			</div>
		{/if}
	</section>
</main>
