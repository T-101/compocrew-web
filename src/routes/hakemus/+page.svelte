<script>
    import EmailObfuscator from "$lib/components/EmailObfuscator.svelte";
</script>

<svelte:head>
    <title>CompoCrew ry | Hakemus</title>
</svelte:head>

<h2 class="mb-4">Tuen hakeminen</h2>
<p>
    Meiltä on tulossa hieman virallisempi lomake tuen hakemiseen.
    Toistaiseksi voitte lähettää vapaamuotoisen hakemuksen osoitteeseen
    <EmailObfuscator email={['hakemus', ['compocrew', 'fi'].join('.')].join('@')} track="Application click"/>
</p>

<p>Ollakseen oikeutettu avustukseen, tulee tapahtuman olla Suomessa ja olla voittoa tavoittelematon.
</p>

<div>Hakemuksessa tulee vastata seuraaviin kysymyksiin:
    <ul>
        <li>Mille partyille tukea haetaan</li>
        <li>Milloin ja missä partyt ovat</li>
        <li>Partyjen budjetti, odotettu kävijämäärä, kotisivut</li>
        <li>Mihin tarkoitukseen tukea haetaan ja kuinka paljon (Tila, palkinnot, laitteisto, muu)</li>
        <li>Peruuntuvatko partyt mikäli tukea ei saada</li>
        <li>Ovatko partyt saaneet aikaisemmin tukea. Jos on, niin millaista</li>
        <li>Ovatko partyt avoimet vai invite only</li>
        <li>Suunnitellut compot</li>
        <li>Vapaamuotoinen kuvaus partyista</li>
        <li>Perustelu tukitarpeelle</li>
        <li>Vastuuhenkilöt ja/tai pääjärjestäjät. Onko taustalla yritys tai yhdistys</li>
    </ul>
</div>