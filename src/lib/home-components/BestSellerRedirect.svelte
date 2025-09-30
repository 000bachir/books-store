<script lang=ts>
	import Button from "$lib/components/ui/button/button.svelte";


</script>


<main class="h-full w-full relative overflow-hidden">
    <section class="h-36 w-[95%] mx-auto relative overflow-hidden flex items-center gap-2.5 ">
        <div class="flex-3/12  h-full w-full flex items-center justify-end">
            <h1 class="text-2xl font-semibold">
                Weekly best seller
            </h1>
        </div>
        <div class="flex-1/2  h-full w-full flex items-center justify-center">
            <div class="w-full dark:border-white border-2"></div>
        </div>
        <div class="flex-3/12  h-full w-full flex items-center justify-start">
            <Button href="/best-seller" variant={"ghost"} size={"lg"} class="text-xl" data-sveltekit-preload-data>
                View All
            </Button>
        </div>
    </section>
</main>