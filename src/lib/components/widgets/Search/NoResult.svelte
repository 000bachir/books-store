<script lang="ts">
    import notFound from "$lib/assets/icons/notFound.svg"
</script>

<section class="h-auto w-full shadow-2xl flex items-center flex-col overflow-hidden border-[1px] border-red-500 p-6">
    <img src={notFound} alt="error 404 not found" class="h-12 aspect-square" loading="lazy">
    <h1 class="text-3xl font-semibold">
        <strong>
            Sorry book not found please try another 
        </strong>
    </h1>
</section>