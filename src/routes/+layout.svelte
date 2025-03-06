<script>
    import {page} from '$app/state';

    let {children} = $props();
    const active = (path) => page.url.pathname === path ? 'active' : '';
</script>

<nav id="navbar" class="navbar navbar-expand-md bg-body-tertiary sticky-top mb-4" data-bs-theme="light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
                aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
            <img src="/img/compocrew.webp" class="navbar-logo" alt="CompoCrew logo">
        </a>
        <div class="collapse navbar-collapse" id="navbar-toggler">
            <ul class="navbar-nav me-auto">
                <li class="nav-item me-3">
                    <a class="nav-link {active('/')}" href="/">Etusivu</a>
                    {#if active('/')} <span class="visually-hidden">(aktiivinen)</span> {/if}
                </li>
                <li class="nav-item me-3">
                    <a class="nav-link {active('/hakemus/')}" href="/hakemus">Hakemus</a>
                    {#if active('/hakemus/')} <span class="visually-hidden">(aktiivinen)</span> {/if}
                </li>
                <li class="nav-item me-3">
                    <a class="nav-link {active('/tietoa/')}" href="/tietoa">Tietoa</a>
                    {#if active('/tietoa/')} <span class="visually-hidden">(aktiivinen)</span> {/if}
                </li>
                <li class="nav-item">
                    <a class="nav-link {active('/english/')}" href="/english">In English</a>
                    {#if active('/english/')} <span class="visually-hidden">(aktiivinen)</span> {/if}
                </li>
            </ul>
        </div>
        <span id="theme" class="icon"></span>
    </div>
</nav>
<div class="container mb-4">
    {@render children()}
</div>