<script>
    let name = "yuki";
    let toggle = false;

    import { onMount } from "svelte";
    onMount(() => {
        setInterval(() => {
            toggle = !toggle;
            name = toggle ? "yuki" : "yuki!";
        }, 500);
    });
</script>

<h1>{name}</h1>
<p>yuki.kr</p>
