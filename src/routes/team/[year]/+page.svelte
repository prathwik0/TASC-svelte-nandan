<script>
    import TeamPage from "$lib/components/PageWrappers/TeamPage.svelte";
    import {page} from "$app/stores";
    const year = $page.params.year;
</script>

<TeamPage year={year}/>