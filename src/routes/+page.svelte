<script>
    let name = "yuki";
    let toggle = false;

    import { links } from "$lib/data/linklist";
    import { onMount } from "svelte";
    onMount(() => {
        setInterval(() => {
            toggle = !toggle;
            name = toggle ? "yuki" : "yuki!";
        }, 500);
    });
</script>

<!-- Header -->
<header>
    <h1>{name}</h1>
    <p>yuki.kr</p>
    <img src="/images/tsukasa.png" alt="tsukasa" class="profile-image" />
</header>

<!-- Link List -->
<ul class="link-list">
    {#each links as link}
        <li class="link-item">
            <a href={link.url} target="_blank">
                {link.name}
            </a>
        </li>
    {/each}
</ul>
