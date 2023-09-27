<script>
    import {Faculty} from "$lib/data/Faculty.js";
</script>

<div class="md:grid md:grid-cols-3 md:gap-1 md:gap-y-14 lg:px-16 md:px-12 px-6 space-y-10 md:space-y-0 py-16">
    {#each Faculty as faculty}
        <div  class={'mx-16 bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:drop-shadow-md dark:shadow-gray-700  py-8 px-6'}>
            <div class={'flex justify-center'}>
                <img src={faculty.image} alt={faculty.name} class={'object-cover rounded-full lg:w-44 lg:h-44 w-36 h-36   border border-[#e5c6fc] dark:border-[#121928]'}/>
            </div>
            <h1 class={'text-2xl font-bold py-4 text-center'}>{faculty.name}</h1>
            <h2 class={'text-lg pb-5 text-center'}>{faculty.designation}</h2>
            {#if faculty.designation2}
                <h2 class={'text-lg pb-5 text-center'}>{faculty.designation2}</h2>
            {/if}
            <h2 class={'text-lg pb-5 text-center'}>{faculty.email}</h2>
        </div>
    {/each}
</div>