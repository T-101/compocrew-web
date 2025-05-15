<script>
    import EmailObfuscator from "$lib/components/EmailObfuscator.svelte";
    import TrackedLink from "$lib/components/TrackedLink.svelte";
</script>

<svelte:head>
    <title>CompoCrew ry | Tukijaksi</title>
</svelte:head>

<h2 class="mb-4">Tukijaksi CompoCrew ry:lle</h2>
<p>Kiinnostaako tukea kulttuuriperintöä Suomessa?</p>

<p>Demoscene<sup><a href="#cite-1">[1]</a></sup> on digitaalisen taiteen kulttuurin haara, joka on Suomessa
    2020 lisätty kansallisen aineettoman kulttuuriperimän listalle.<sup><a href="#cite-2">[2]</a></sup> Demoscenen
    oleellisia kulttuuritapahtumia ovat demopartyt, joissa harrastajat kisailevat teoksillaan.
    Teokset voivat olla esimerkiksi musiikkia, grafiikkaa tai ohjelmia jotka reaaliaikaisesti tuottavat visuaalista
    ja audiovisuaalista taidetta. Demoscene on saanut alkunsa pelien ohjelmoinnista ja graafisesta suunnittelusta ja
    on myös yksi ensimmäisistä tietokoneiden ympärille syntyneistä kulttuureista.</p>

<p> Tapahtumien järjestäminen ei kovin usein ole halpaa eikä helppoa hommaa, eikä varsinkaan nuoremmilla tekijöillä
    ole mahdollisuuksia helposti lähteä järjestämään.</p>

<p>Miten juuri te pystytte tukemaan yhdistyksen toimintaa ja täten demosceneä kulttuurina?</p>

<p>Yhdistykselle voi lahjoittaa tapahtuma- ja tietotekniikan laitteistoja ja ohjelmistoja. Rahallista tukea pystyy
    antamaan liittymällä yhdistyksen vuosittaiseksi kannatusjäseneksi vapaasti valitsemallanne rahasummalla.</p>

<p>Ota yhteyttä
    <EmailObfuscator email={['hallitus', ['compocrew', 'fi'].join('.')].join('@')} track="Contact click"/>
    ja kysy lisää tietoa.
</p>

<hr class="my-4"/>
<h3>Tukijoitamme</h3>

<TrackedLink track="Supercell click" href="https://supercell.com/">
    <img class="sponsor-logo me-4" src="/img/supercell.webp" alt="Supercell logo"/>
</TrackedLink>

<TrackedLink track="UpCloud click" href="https://upcloud.com/">
    <img class="sponsor-logo me-4" src="/img/upcloud.webp" alt="UpCloud logo"/>
</TrackedLink>

<hr class="my-4"/>
<h5>Lähteet</h5>
<ol>
    <li><a id="cite-1" href="https://wiki.aineetonkulttuuriperinto.fi/wiki/Demoskene"
           title="https://wiki.aineetonkulttuuriperinto.fi/wiki/Demoskene">
        Aineeton Kulttuuriperintö: Demoskene</a></li>
    <li>
        <a id="cite-2"
           href="https://www.museovirasto.fi/en/articles/demoskene-sahansoitto-ja-romanien-hevostaidot-elavan-perinnon-kansalliseen-luetteloon-12-uutta-kohdetta"
           title="https://www.museovirasto.fi/en/articles/demoskene-sahansoitto-ja-romanien-hevostaidot-elavan-perinnon-kansalliseen-luetteloon-12-uutta-kohdetta">
            Museovirasto: Demoskene elävän perinnön kansalliseen luetteloon
        </a>
    </li>
</ol>