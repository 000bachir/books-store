<script lang="ts">
	import BestSellerRedirect from "$lib/home-components/BestSellerRedirect.svelte";
	import Hero from "$lib/home-components/Hero.svelte";


</script>

<main class="relative m-0 h-auto w-full overflow-hidden">
    <Hero />
    <BestSellerRedirect />

    <!--dynamic route link i point to the book route and then the categories will take place i render them in books then the category will do it's thing-->
    <section class="h-auto w-full relative overflow-hidden">

    </section>
</main>

<style>
</style>
