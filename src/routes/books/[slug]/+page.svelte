<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Loading from '$lib/components/widgets/Loading.svelte';
	import type { GoogleBookItem } from '$lib/types.js';
	let { data } = $props();
	//@ts-ignore
	const books: GoogleBookItem[] = data.books;
	const slug = data.slug;

	let BookSlugParamater: GoogleBookItem[] = $state([]);
	let IsLoading: boolean = $state(true);
	let errorMessage: string = $state('');

	function getRating(book: any) {
		return book.volumeInfo.ratingsCount || 'no rating was found';
	}

	function PretifyDescreption(descreption: string, maxLength: number = 150) {
		if (!descreption) {
			return 'no descreption found!!!';
		}
		return descreption.length > maxLength
			? descreption.substring(0, maxLength) + '...'
			: descreption;
	}

	function GetPubDate(book: GoogleBookItem) {
		return book.volumeInfo.publishedDate || 'no publishion date was found';
	}

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

<section class="relative h-32 w-full overflow-hidden">
	<div class="relative mx-auto flex h-full w-[95%] items-center justify-center">
		{#if !slug}
			<p class="font-lg font-semibold text-red-500">
				Sorry something went wrong we couldn't display what you want!!!
			</p>
		{:else}
			<h1 class="text-2xl font-semibold capitalize">{slug} Books</h1>
		{/if}
	</div>
</section>

<section class="relative h-auto w-full overflow-hidden">
	<div class="relative mx-auto h-full w-[95%] overflow-hidden">
		{#if IsLoading}
			<div class="relative flex h-dvh w-full items-center justify-center overflow-hidden">
				<Loading />
			</div>
		{/if}
		{#if books.length === 0}
			<p class="font-lg font-semibold text-red-500">
				Sorry there is nothing to show something went wrong
			</p>
			<Button
				variant={'destructive'}
				type={'reset'}
				size={'lg'}
				onclick={() => window.location.reload()}
				class="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
			>
				Try Again
			</Button>
		{/if}

		{#if books.length > 0 && !IsLoading}
			<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				{#each books as book}
					<div
						class="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
					>
						<div class="flex h-64 items-center justify-center overflow-hidden bg-gray-100">
							<img
								src={book.volumeInfo.imageLinks?.thumbnail}
								class="m-0 h-full w-full object-contain"
								height={book.volumeInfo.imageLinks?.smallThumbnail}
								loading="lazy"
								alt={book.volumeInfo.title || 'Book cover'}
							/>
						</div>

						<div class="p-4 sm:p-6">
							<h3 class="mb-1 text-lg font-semibold text-gray-800">
								{book.volumeInfo.title || 'Untitled'}
							</h3>
							<p class="mb-3 text-sm text-gray-500">{book.volumeInfo.authors}</p>

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
								{PretifyDescreption(book.volumeInfo.description ?? 'no description found')}
							</p>

							<div class="mb-4 flex flex-wrap justify-between text-xs text-gray-500">
								<span>Published: {GetPubDate(book)}</span>
							</div>

							{#if book.saleInfo?.saleability}
								<a
									href={book.volumeInfo.previewLink}
									target="_blank"
									class="inline-block rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
								>
									Take a look
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
