<script lang="ts">
    import {uedata} from "$lib/data/UEventsData";
    import {pedata} from "$lib/data/PEventsData";

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    export let type;
    let data = uedata;
    
    $: if (type === 'upcoming') {
        data=uedata;
    } else {
        data = pedata;
    }
</script>


<div class={`md:grid md:grid-cols-3 gap-20 mx-20 md:space-y-0 space-y-10 py-16 `}>
    {#each data as event}
        <div class="flex flex-col">
            <div class={'bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:drop-shadow-md dark:shadow-gray-700  py-8 px-5 flex-1'}>
                <div class={'flex justify-center'}>
                    {#if event.image}
                        <img src={event?.image} alt={event.title} class={'object-cover border border-muted-light dark:border-muted-dark'}/>
                    {/if}
                </div>
                <h1 class={'text-2xl font-bold py-4 text-center'}>{event.title}</h1>
                {#if event.date}
                    <h2 class={'text-xl'}>Date: {event?.date?.toLocaleDateString(undefined, options)}</h2>
                {/if}
                {#if event.time}
                    <h2 class={'text-xl'}>Time: {event.time}</h2>
                {/if}
                {#if event.venue}
                    <h2 class={'text-xl'}>Venue: {event?.venue}</h2>
                {/if}

                <div class="flex justify-center items-center pt-4">
                    {#if event.registration}
                        <a href={`${event.registration}`} target="_blank">
                            <button class="bg-brand text-white px-4 py-2 rounded-xl hover:scale-110 duration-200">
                                Register Now
                            </button>
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>