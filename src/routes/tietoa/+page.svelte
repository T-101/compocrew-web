<script>
    import EmailObfuscator from "$lib/components/EmailObfuscator.svelte";
    import NameObfuscator from "$lib/components/NameObfuscator.svelte";
    import {PUBLIC_CHAIRMAN, PUBLIC_VICE_CHAIRMAN, PUBLIC_TREASURER, PUBLIC_BOARD_MEMBERS} from "$env/static/public";
</script>

<svelte:head>
    <title>CompoCrew ry | Tietoa</title>
</svelte:head>

<h2 class="mb-4">CompoCrew ry</h2>
<p>Perustettu 27.04.2021, kotipaikka Helsinki, Y-tunnus 3206170-5</p>
<div>
    <h5 class="mb-4">Laskutustiedot</h5>
    <p>
        CompoCrew ry<br>
        Leinelän puistotie 2<br>
        01360 Vantaa
    </p>
    <p>
        HELSINGIN SEUDUN OSUUSPANKKI<br>
        FI84 5780 3820 1848 27<br>
        OKOYFIHH
    </p>
    <h5 class="my-4">Hallitus</h5>
    <p>Sähköposti:
        <EmailObfuscator email={['hallitus', ['compocrew', 'fi'].join('.')].join('@')} track="Contact click"/>
    <dl class="row">
        <dt class="col-12 col-sm-4 col-lg-2 me-lg-3">Puheenjohtaja</dt>
        <dd class="col-12 col-sm-8 col-lg-9 mb-4">
            <NameObfuscator name={PUBLIC_CHAIRMAN}/>
        </dd>
        <dt class="col-12 col-sm-4 col-lg-2 me-lg-3">Varapuheenjohtaja</dt>
        <dd class="col-12 col-sm-8 col-lg-9 mb-4">
            <NameObfuscator name={PUBLIC_VICE_CHAIRMAN}/>
        </dd>
        <dt class="col-12 col-sm-4 col-lg-2 me-lg-3">Rahastonhoitaja</dt>
        <dd class="col-12 col-sm-8 col-lg-9 mb-4">
            <NameObfuscator name={PUBLIC_TREASURER}/>
        </dd>
        <dt class="col-12 col-sm-4 col-lg-2 me-lg-3">Hallituksen jäsen</dt>
        <div class="col-12 col-sm-8 col-lg-9 mb-4">
            {#each PUBLIC_BOARD_MEMBERS.split(",") as name}
                <dd>
                    <NameObfuscator name={name.trim()}/>
                </dd>
            {/each}
        </div>
    </dl>
</div>