<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
    import { bookCategories } from "$lib/types";
</script>


<main class="h-auto w-full relative overflow-hidden">
    <section class="h-auto w-[95%] relative mx-auto flex flex-wrap items-center py-8 gap-10">
        {#if bookCategories.length === 0}
            <div class="flex items-center justify-center py-8">
                <p class="text-lg font-semibold text-red-400">
                    Sorry something went wrong
                </p>
            </div>
        {/if}

        {#if bookCategories.length != 0}
            {#each bookCategories as book }
                <Button size={"lg"} variant={"default"} class="cursor-pointer">
                    {book}
                </Button>
            {/each}
        {/if}

    </section>
</main>

