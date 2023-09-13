<script lang="ts">
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";

	import "open-props/style";
	import "open-props/normalize";
	import "open-props/buttons";

	import "./app.css";
</script>

<div class="container mx-auto">
	<!-- Header -->
	<Header />

	<!-- Black hole for other content -->
	<slot />

	<!-- Footer -->
	<Footer />
</div>

<style>
	main {
		padding-block: var(--size-9);
	}
</style>
