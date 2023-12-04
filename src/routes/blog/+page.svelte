<script>
export let data;




</script>

<ol class="space-y-3">
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ol>
