<script>
	import favicon from "$lib/assets/akira.jpg"; // 파비콘

	let { children } = $props();

	import "$lib/styles/fonts.css"; // 폰트 스타일을 가져옵니다
	import "$lib/styles/global.css"; // 글로벌 스타일을 가져옵니다
	import "$lib/styles/navbar.css"; // 네비게이션 바 스타일을 가져옵니다
	import GNB from "$lib/components/layout/navbar.svelte"; // 네비게이션 바 컴포넌트를 가져옵니다
</script>

<GNB />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
