<script lang="ts">
  import { onMount } from "svelte";
  import type { PageProps } from "../$types";
  import { error } from "@sveltejs/kit";
  import type {GoogleBookItem} from "$lib/types"

  let {
    data,
    querySearch = $bindable()
  } : {data : PageProps, querySearch : string | undefined} = $props()

  let books : GoogleBookItem[] = $state([])
  let isLoading : boolean = $state(true)
  let errorMessage : string = $state('')

  onMount(async () => {
    async function displaySomeContent() {
      try {
        isLoading = true
        const apiCall: string[] = [
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=25",
          "https://www.googleapis.com/books/v1/volumes?q=subject:science&maxResults=25",
          "https://www.googleapis.com/books/v1/volumes?q=subject:programming&maxResults=25",
          "https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=25",
          "https://www.googleapis.com/books/v1/volumes?q=subject:art&maxResults=25",
          "https://www.googleapis.com/books/v1/volumes?q=subject:biography&maxResults=25"
        ]


        if (apiCall.length === 0) {
          console.log('error there is no api to call')
          return
        }

        const randomIndex = Math.floor(Math.random() * apiCall.length)
        const url = apiCall[randomIndex]
        const response = await fetch(url)

        if (!response.ok) {
          throw error(response.status, "error while processing the request")
        }

        const data = await response.json()
        books = data.items ?? []
      } catch (err) {
        console.error('Error fetching books:', err)
        errorMessage = 'Failed to load books. Please try again later.'
      } finally {
        isLoading = false
      }
    }

    displaySomeContent()
  })

  function getThumbnail(book: any): string {
    const links = book.volumeInfo?.imageLinks
    return links?.extraLarge || links?.large || links?.medium || links?.thumbnail || links?.smallThumbnail || '/placeholder-book.jpg'

  }

  function getAuthors(book: any): string {
    return book.volumeInfo?.authors?.join(', ') || 'Unknown Author'
  }

  function truncateDescription(description?: string, maxLength: number = 150): string {
    if (!description) return 'No description available'
    return description.length > maxLength 
      ? description.substring(0, maxLength) + '...' 
      : description
  }

  function getPublishedDate(book: any): string {
    return book.volumeInfo?.publishedDate || 'Unknown'
  }

  function getRating(book: any): number {
    return book.volumeInfo?.averageRating || 0
  }
</script>

<svelte:head>
  <title>
    Discover
  </title>
</svelte:head>

<main class="max-w-6xl mx-auto p-4 sm:p-8">
  <h1 class="text-center text-3xl sm:text-4xl font-bold mb-8 ">
    Discover Books...👓
  </h1>

  <div class="h-auto py-8 w-full relative overflow-hidden flex flex-col items-center justify-center gap-12">
    <h2 class="text-2xl font-semibold text-red-600">
      Trigger Warning!!!
    </h2>
    <p class="text-lg text-balance text-center">
      Each time you refresh, the books appearing here might change or disappear. 
      This section is kind of like Google's "I'm Feeling Lucky" feature—so be careful!
    </p>
  </div>

  <!-- Loading State -->
  {#if isLoading}
    <div class="flex flex-col items-center justify-center py-16">
      <div class="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <p class="text-gray-600">Loading books...</p>
    </div>
  {/if}

  <!-- Error State -->
  {#if errorMessage}
    <div class="text-center p-6 bg-red-50 border border-red-200 rounded-lg my-6">
      <p class="text-red-600 mb-4">{errorMessage}</p>
      <button 
        onclick={() => window.location.reload()}
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  {/if}

  <!-- Books Grid -->
  {#if !isLoading && !errorMessage && books.length > 0}
    <div class="grid gap-6 sm:gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {#each books as book (book.id)}
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition">
          <div class="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img 
              src={getThumbnail(book)}
              class="w-full h-full m-0"
              loading="lazy"
              alt={book.volumeInfo?.title || 'Book cover'}

            />
          </div>
          
          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-1">
              {book.volumeInfo?.title || 'Untitled'}
            </h3>
            <p class="text-sm text-gray-500 mb-3">{getAuthors(book)}</p>
            
            {#if getRating(book) > 0}
              <div class="flex items-center gap-2 mb-3">
                <span class="flex">
                  {#each Array(5) as _, i}
                    <span class="text-yellow-400">{i < getRating(book) ? '★' : '☆'}</span>
                  {/each}
                </span>
                <span class="text-sm text-gray-500">({getRating(book)})</span>
              </div>
            {/if}
            
            <p class="text-sm text-gray-600 mb-3">
              {truncateDescription(book.volumeInfo?.description ?? 'no description found')}
            </p>
            
            <div class="flex flex-wrap justify-between text-xs text-gray-500 mb-4">
              <span>Published: {getPublishedDate(book)}</span>
              {#if book.volumeInfo?.pageCount}
                <span>{book.volumeInfo.pageCount} pages</span>
              {/if}
            </div>
            
            {#if book.volumeInfo?.previewLink}
              <a 
                href={book.volumeInfo.previewLink} 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Preview Book
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {:else if !isLoading && !errorMessage}
    <div class="text-center py-16 text-gray-600">
      <p>No books found. Try searching for something else.</p>
    </div>
  {/if}
  </main>
