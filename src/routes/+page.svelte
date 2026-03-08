<script>
    // 불러오기
    import { version } from "$app/environment";
    import { links } from "$lib/data/linklist";
    import { onMount } from "svelte";
    import { animeItems } from "$lib/anime";

    // 변수
    let name = "yuki";
    let toggle = false;
    const appVersion = version;

    onMount(() => {
        animeItems(); // 애니메이션 효과 적용
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
    <img
        src="https://media1.tenor.com/m/-aj5s_ZkA_MAAAAC/lucky-star-kagami.gif"
        alt="kagami"
        class="gif-container"
    />
</header>

<!-- Link List -->
<ul class="link-list">
    {#each links as link}
        <li class="link-anime-container">
            <a href={link.url} target="_blank" class="link-item">
                <img
                    src="https://favicon.im/{link.url}?default-avatar={link.url}"
                    alt={link.name}
                    class="link-icon"
                />
                {link.name}
            </a>
        </li>
    {/each}
</ul>

<footer>버전: {appVersion}</footer>
