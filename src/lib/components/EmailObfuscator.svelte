<script>
    let {email, track} = $props();
    let emailBind;
    $effect(() => {
        emailBind.textContent = email
        emailBind.href = `mailto:${email}`
        if (track) {
            emailBind.onclick = () => umami.track(track)
        }
    });
</script>

<a bind:this={emailBind}></a>