<script lang="ts">
</script>

<main class="relative h-auto w-full overflow-hidden">
	<section class="relative mx-auto h-full w-[95%] overflow-hidden py-8 px-4">
        <p class="text-lg font-semibold text-center text-balance">
            This project uses two main APIs — the Google Books API and the New York Times Books API. The
            Google Books API is included mainly as an example of how to fetch and display data from an
            external source. It doesn’t require an API key, so it can safely be used on the client side. As
            long as your load function works, you’re good to go. The New York Times Best Sellers API,
            however, is a bit different. It requires an API key, so the best practice is to make the request
            from a +page.server.ts/js file. To get started, simply visit their website, create an API key,
            and plug it into the project. I’ve also added TypeScript types for the expected data structure,
            so you can easily see what the API returns — including the Amazon buy links, which you could
            even use for affiliate income.
        </p>
	</section>
</main>
