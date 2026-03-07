<script>
	import favicon from "/images/tsukasa.png"; // 파비콘

	let { children } = $props();

	import "$lib/styles/fonts.css"; // 폰트 스타일을 가져옵니다
	import "$lib/styles/global.css"; // 글로벌 스타일을 가져옵니다
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
