<script>
	import logo from "$lib/images/eduLogo.webp";
	import { Twitch, Instagram, Twitter, Youtube } from "lucide-svelte";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main class="pb-10 mx-auto">
	<section class="flex items-center flex-col">
		<h1 class="text-4xl font-bold text-blue-700 mb-4">Hallo soy Edu :)</h1>

		<img src={logo} alt="logo canal" width="200" height="150" />
		<p class="mt-4">
			Streamer de Twitch, FullStack Developer en technologias basadas en
			Javascript.
		</p>

		<p class="mt-4">
			Desde julio de 2023, empece a trabar con microfrontends en react,
			module federation y jotai para el state manager.
		</p>
		<p class="mt-4">
			Espero aprendas mucho de mis experiencias y te ayuden a mejorar cada
			dia!
		</p>

		<div class="flex flex-row gap-x-4">
			<a href="https://www.twitch.tv/elprogramadorgt">
				<Twitch size="48" color="#8b44f7" /></a
			>

			<a href="https://x.com/elprogramadorgt">
				<Twitter size="48" color="#1d9bf0" />
			</a>

			<a href="https://instagram.com/elprogramadorgt">
				<Instagram size="48" color="#f57d03" />
			</a>
			<a href="https://www.youtube.com/@elprogramadorgt">
				<Youtube size="48" color="#ff0101" />
			</a>
		</div>
	</section>
</main>
