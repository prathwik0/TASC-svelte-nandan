<script lang="ts">
    import {NAVITEM} from "$lib/data/NavItems";
    import ThemeToggle from "$lib/components/HeaderFooter/ThemeToggle.svelte";
    import {page} from "$app/stores";
</script>

<section class="flex justify-between bg-primary-light dark:bg-primary-dark py-4 px-10 border-zinc-300 dark:border-zinc-800 items-center shadow-slate-100 dark:shadow-white">
    <img src="/TASCLogo.png" alt="" class="w-24 h-8">
    <ul class="flex space-x-10">
        {#each NAVITEM as item}
            <a href={`${item.href}`}>
                <li class={`text-xl font-bold hover:dark:bg-primary-light hover:dark:text-black hover:bg-primary-dark hover:text-white px-3 py-2 rounded-xl hover:scale-110 duration-200 ${$page.url.pathname.split('/')[1] === item.title.toLowerCase() || ($page.url.pathname === '/' && item.title === 'Home') ? 'underline underline-offset-4' : ''}`}>
                    <span>{item.title}</span>
                </li>
            </a>
        {/each}
    </ul>
    <div class="items-center">
        <ThemeToggle />
        <button class="bg-brand text-white px-4 py-2 rounded-xl hover:scale-110 duration-200">
            Login
        </button>
    </div>
</section>