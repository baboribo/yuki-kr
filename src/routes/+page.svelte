<script>
    // 불러오기
    import { onMount } from "svelte";
    import { version } from "$app/environment"; // 패키지에서 버전 가져옴
    import { links } from "$lib/data/linklist"; // 링크 리스트
    import { t } from "$lib/data/textall"; // 전체 텍스트 데이터
    import { animeItems } from "$lib/anime"; // 애니메이션 효과 함수

    // 변수
    let toggle = false;
    const appVersion = version;

    onMount(() => {
        animeItems(); // 애니메이션 효과 적용
        setInterval(() => {
            toggle = !toggle;
            t.header.sitename = toggle ? "yuki" : "yuki!";
        }, 500);
    });
</script>

<!-- Header -->
<header>
    <h1>{t.header.sitename}</h1>
    <p>{t.header.description}</p>
    <div class="gif-wrapper">
        <img
            src="https://media1.tenor.com/m/-aj5s_ZkA_MAAAAC/lucky-star-kagami.gif"
            alt={t.images.alt.kagamigif}
            class="gif-container"
        />
        <p>
            <a
                href="https://tenor.com/ko/view/lucky-star-kagami-scared-job-job-application-gif-17989903262859658227"
                target="_blank">{t.images.title.kagamigif}</a
            >
        </p>
    </div>
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

<footer>{t.version}: {appVersion}</footer>
