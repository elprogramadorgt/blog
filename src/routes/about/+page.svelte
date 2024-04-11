<script lang="ts">
	import logo from "$lib/images/eduLogo.webp";
	import { Twitch, Instagram, Twitter, Youtube } from "lucide-svelte";
	import Navbar from '../../components/Navbar.svelte';
  import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>


<main class="container mx-auto px-4 py-8">
  <div class="flex items-center flex-col">
	<h1 class="text-4xl font-bold mb-4 about-title" >Hola! :)</h1>

  </div>
  
  <div class="card-bg p-6 rounded-lg ">
    <p class="text-color-primary mb-4">
	  En este blog, encontrarás una variedad de temas relacionados con programación y ciberseguridad. Además, tenemos cursos donde podrás aprender y poner a prueba tus conocimientos con nuestros tests.
    </p>
    <p class="text-color-primary  mb-4">
		Soy un apasionado FullStack Engineer con 6 años de experiencia en el desarrollo de software. A lo largo de mi carrera, he trabajado en una amplia variedad de proyectos que abarcan desde la migración de aplicaciones a nuevos frameworks hasta el desarrollo e integración de plataformas operativas.
	</p>
		<p class="text-color-primary  mb-4">
		En el ámbito del front-end, tengo experiencia sólida en tecnologías basadas en JavaScript (Angular, React y Svelte). He participado en proyectos de migración de aplicaciones antiguas a las últimas versiones de Angular, asegurando la compatibilidad y el cumplimiento de los estándares de accesibilidad. Además, he desarrollado interfaces de usuario intuitivas y atractivas de la mano del equipo de UI/UX.
	</p>
		<p class="text-color-primary  mb-4">
		En cuanto al back-end, tengo experiencia en el desarrollo de APIs seguras y escalables utilizando tecnologías como Golang, PHP, Java y Node.js. He manjeado autenticación, paginación y un sistema de seguridad dinamico que guardaba imagenes de forma segura evitando que usuarios autenticados pudieran buscar imagenes de otros usuarios. 
	</p>
		<p class="text-color-primary  mb-4">
		Mi experiencia con bases de datos es sólida, tanto en bases de datos relacionales como MySQL (MariaDB), PostgreSQL y Oracle, como en bases de datos NoSQL como MongoDB y Firebase. He diseñado y optimizado esquemas de bases de datos, así como consultas complejas para garantizar un rendimiento óptimo del sistema.
	</p>
		<p class="text-color-primary  mb-4">
		Destaco por mi facilidad para adaptarme a los proyectos, identificar prioridades y apoyar a los miembros del equipo. Me enfoco en los objetivos a alcanzar y busco resolver problemas de manera eficiente, ya sea encontrando soluciones por mi cuenta o buscando la ayuda necesaria. Mantengo siempre una actitud positiva y proactiva en mi trabajo.

    </p>

	<div  class="flex items-center flex-col">
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
	</div>



  </div>
</main>

<!-- <main class="pb-10 mx-auto">
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

		
	</section>
</main> -->
