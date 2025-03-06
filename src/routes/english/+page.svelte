<script>
    import EmailObfuscator from "$lib/components/EmailObfuscator.svelte";
</script>

<svelte:head>
    <title>CompoCrew ry | In English</title>
</svelte:head>

<h2 class="mb-4">CompoCrew ry</h2>
<p>CompoCrew ry is a registered non-profit association in Finland, that grants aid to Finnish demoscene parties.</p>

<p>CompoCrew ry was founded in 2021 to promote Finnish computer art culture, Demoscene. The association offers support
    for Finnish Demoscene-enthusiasts and organizations by offering knowledge, hardware and granting financial aid for
    organizing demoparties.</p>

<p>The association owns modern hardware for video capture and a purpose built tool for managing computer art
    submissions, PartyMan.</p>
<hr class="mb-4"/>
<h2>Applying for financial aid</h2>
<p>CompoCrew ry offers financial aid for Finnish demoscene parties.</p>
<p>To qualify for the aid the demoparty must be held in Finland and be non-profit. The aid can be applied for by sending
    an open application to
    <EmailObfuscator email={['hakemus', ['compocrew', 'fi'].join('.')].join('@')} track="Contact click"/>
</p>
<p>The email should contain the following information:
</p>

<ul>
    <li>What party is applying</li>
    <li>When and where the party is held</li>
    <li>Party budget, expected visitor count and homepage</li>
    <li>Purpose of applying for aid, amount requested and how the aid will be used (Venue, prizes, equipment, etc.)</li>
    <li>Will the party be cancelled unless aid is received</li>
    <li>Have you received aid or sponsorship before? If so, what kind</li>
    <li>Is the party open for all or invite only</li>
    <li>Planned compos</li>
    <li>Free formed description of party</li>
    <li>Reasoning for applying aid</li>
    <li>People in charge and/or main organizers. Is there an association or company involved</li>
</ul>