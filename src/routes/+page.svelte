<script lang="ts">
	import BestSellerRedirect from "$lib/home-components/BestSellerRedirect.svelte";
	import Hero from "$lib/home-components/Hero.svelte";
    import ReadingSVG from "$lib/assets/icons/reading.svg"
    import ReadingBook from "$lib/components/widgets/svgIcons/ReadingBook.svelte";
	import Button from "$lib/components/ui/button/button.svelte";

</script>

<main class="relative m-0 h-auto w-full overflow-hidden">
    <Hero />
    <BestSellerRedirect />

    <!--dynamic route link i point to the book route and then the categories will take place i render them in books then the category will do it's thing-->
    <section class="h-auto w-full relative overflow-hidden">
        <div class="h-dvh w-full relative overflow-hidden grid grid-cols-2">
            <div class="col-span-1 h-full w-full relative overflow-hidden flex items-center justify-center">
                <!-- <img src={ReadingSVG} loading="lazy" class="fill-amber-50" alt=""> -->
                <ReadingBook />
            </div>
            <div class=" col-span-1 h-full w-full relative overflow-hidden flex items-center justify-center flex-col gap-10">
                <h1 class="font-semibold text-4xl text-balance text-center">
                    Want to dive in? Here are some categories as a starting point.
                </h1>
                <Button variant={"default"} size={"lg"} href={"/books"}>
                    <h2 class="text-xl font-semibold">Take a look</h2>
                </Button>
            </div>
        </div>
    </section>
</main>

<style>
</style>
