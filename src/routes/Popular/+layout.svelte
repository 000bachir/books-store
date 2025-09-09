<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  let { children } = $props()
  let isOpen : boolean = $state(true);
  let BISAC : string[] = [
    "Science",
    "History",
    "Business & Economics",
    "Fiction",
    "Technology & Engineering",
    "Biography & Autobiography",
    "Cooking","Education",
    "Art","Young Adult (Fiction/Nonfiction)"
    ];
</script>


<section class="h-auto w-auto overflow-hidden flex">
  <!--this kind weird since the ball appeared in the left side of the screen pushing everything to the left-->
  <!-- <div class="h-24 rounded-full aspect-square bg-amber-800"></div> -->
  <!--side bar-->
  <article class="z-50 fixed inset-0 h-auto w-64 bg-black dark:bg-gray-300 shadow-lg transform transition-transform duration-300 ease-in-out p-4 {isOpen ? 'translate-x-0' : '-translate-x-full'}">
    <Button class="mb-4 px-3 py-1 rounded dark:bg-white " onclick={() => (isOpen = false)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"/></svg>
    </Button>

    <h1 class="text-2xl font-semibold text-white dark:text-black">Available features</h1>
    <div class="h-auto w-[95%] mx-auto ">
      {#each BISAC as genre }
          <li class="text-sm text-white dark:text-black space-y-6 py-1.5">
            <a href="/">{genre}</a>
          </li>
      {/each}
    </div>
  </article>
  {@render children()}
</section>