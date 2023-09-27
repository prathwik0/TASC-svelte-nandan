<script>
    import EventCardGrid from "$lib/components/CardGrids/EventCardGrid.svelte";
    let type = 'upcoming';
    function changeType(selectedType){
        type = selectedType;
    }
</script>

<div class={`${type === 'upcoming' ? 'h-screen' : ''}`}>
    <div class={'flex w-full justify-center md:space-x-16 space-x-8 font-bold pt-16'}>
        <button class={`md:text-2xl text-xl ${type === 'previous' ? 'underline underline-offset-4' : 'no-underline'}`} on:click={() => changeType('previous')}>
            Previous Events
        </button>
        <button class={`md:text-2xl text-xl ${type === 'upcoming' ? 'underline underline-offset-4' : 'no-underline'}`} on:click={() => changeType('upcoming')}>
            Upcoming Events
        </button>
    </div>

    <EventCardGrid type={type}/>
</div>
