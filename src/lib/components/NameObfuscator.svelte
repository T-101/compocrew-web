<script>
    let {name} = $props();
    let nameBind;
    $effect(() => {
        nameBind.textContent = name
    });
</script>

<span bind:this={nameBind}></span>