<script lang="ts">

	let { children } = $props();
	let cartDrawerOpen = $state(false);

	function toggleCartDrawer(event: Event) {
		event.preventDefault();
		cartDrawerOpen = !cartDrawerOpen;
	}

</script>

<div class="h-full w-[20%] bg-red-500">
	<div class="drawer-content bg-sky-400">
		<section class="relative flex h-16 w-full items-center justify-center overflow-hidden bg-green-500 ">
			<button class="cart-button" onclick={toggleCartDrawer} aria-label="Open cart" type="submit">
				Open
			</button>
		</section>
        <div class="drawer-side bg-black h-full">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-64 p-4">
                <li>
                    <h1 class="text-xl font-semibold">
                        <a href="/private/market/mens" data-sveltekit-preload-data>Mens</a>
                    </h1>
                </li>
                <li>
                    <h1 class="text-xl font-semibold">
                        <a href="/private/market/womens" data-sveltekit-preload-data>Womens</a>
                    </h1>
                </li>
            </ul>
        </div>
		{@render children()}
	</div>
</div>