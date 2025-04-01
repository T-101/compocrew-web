<script>
    let {children, ...allProps} = $props()
    let linkBind
    $effect(() => {
        linkBind.href = allProps.href
        allProps.track && (linkBind.onclick = () => umami.track(allProps.track))
    })
</script>

<a bind:this={linkBind}>{@render children?.()}</a>