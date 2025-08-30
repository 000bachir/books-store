<script lang="ts">
    import { onMount , onDestroy } from "svelte";
    import type { PageProps } from "../$types";
    import Search from "$lib/components/widgets/Search/Search.svelte";
	import { error } from "@sveltejs/kit";
    let {
      data ,
      querySearch = $bindable()
      
    } : {data : PageProps , querySearch : string | undefined} = $props()

    
    let books : any = $state()
    onMount(async()=>{
      async function DispalySomeContent(){
        const apiCall : string[] = [
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20",
          "https://www.googleapis.com/books/v1/volumes?q=subject:science&maxResults=20",
          "https://www.googleapis.com/books/v1/volumes?q=subject:programming&maxResults=20"
        ]
        if(apiCall.length === 0)(
            console.log('error there is no api to call')
        )
         const randomIndex = Math.floor(Math.random() * apiCall.length);
        const url = apiCall[randomIndex];
        const response = await fetch(url)
        if (!response.ok){
          throw error(response.status ,"error while processing the request")
          return
        }
        const data = await response.json()
        books = data.items ?? []; // Google Books API uses "items", not "books"

      }
      DispalySomeContent()

    })

</script>

<svelte:head>
  <title>
    Categories
  </title>
</svelte:head>


<!--* initial tought : render some book in the front until the user decide and use a search terms-->

<section class="h-56 bg-amber-500 w-[95%] mx-auto relative flex items-center justify-center flex-col gap-10">
    <h1 class="font-semibold text-4xl">Search for you next book 📖</h1>
    <Search searchTerm={querySearch}/>
</section>


<section>
  {#if books.length}
  <ul>
    {#each books as book}
      <li>
        {book.volumeInfo?.title} —
        {book.volumeInfo?.authors?.join(", ") || "Unknown"}
      </li>
    {/each}
  </ul>
{:else}
  <p>No books loaded.</p>
{/if}
</section>