<script lang="ts">

    let { searchTerm = $bindable() } = $props()

</script>

<article class="h-auto w-full relative flex items-center justify-center">
    
    <form action="" method="GET">
        <input 
        type="text"
        autocomplete="off"
        placeholder="Look for a book"
        bind:value={searchTerm}
        class="border-[1px] border-gray-500 dark:border-white h-18 w-96 px-4 rounded-2xl shadow-2xl flex items-center dark:text-black dark:bg-white"
    >
    </form>
    
</article>


