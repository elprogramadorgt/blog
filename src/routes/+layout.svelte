<script lang="ts">
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";

	import "open-props/style";
	import "open-props/normalize";
	import "open-props/buttons";

	import "./app.css";
</script>

<div class="layout">
	<!-- Header -->
	<p class="mb-3 text-gray-500 dark:text-gray-400 block">Hola a todos, como bien saben nuestra apliación de EduQuest esta hecha en Flutter y la autenticación de usuarios es con una cuenta de Gmail.</p>
	<Header />

	<!-- Black hole for other content -->
	<slot />

	<!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

</style>
