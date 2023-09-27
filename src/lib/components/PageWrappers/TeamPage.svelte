<script>
    import MemberCardGrid from "$lib/components/CardGrids/MemberCardGrid.svelte";
    let year = '2023';
    function changeYear(selectedYear){
        year = selectedYear
    }
</script>

<div>
    <div class={'flex w-full justify-center md:space-x-16 space-x-8 font-bold py-10'}>
        <button class={`md:text-2xl text-xl ${year === '2022' ? 'underline underline-offset-4' : 'no-underline'}`}  on:click={() => changeYear('2022')}>
            2022-23
        </button>
        <button class={`md:text-2xl text-xl ${year === '2023' ? 'underline underline-offset-4' : 'no-underline'}`}  on:click={() => changeYear('2023')}>
            2023-24
        </button>
    </div>
    <MemberCardGrid year={year}/>
</div>