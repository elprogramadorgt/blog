<script lang="ts">
	import * as config from '$lib/config';
</script>

<!-- Footer -->
<footer>
	<marquee><p>{config.title} &copy {new Date().getFullYear()}</p></marquee>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
