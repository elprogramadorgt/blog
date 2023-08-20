# ElProgramadorGT Blog


Hola este es el repo del blog que tengo publicado en mi sitio [`https://elprogramdorgt.fun`](http://elprogramadorgt.fun).


Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Docker Deployment

Para crear la imagen de docker utilizamos el siguiente comando

> En mi caso mi imagen se llama elprogramadorgt, pero le puedes poner el nombre que quieras.

```bash
docker build . -t elprogramadorgt/blog
```


Y para iniciar el docker, ejecutamos el siguiente comando.

el puerto publicado es el 3000, pero se lo puedes cambiar en el Dockerfile si tienes otro de preferencia o simplemente cambiar el host port.

```bash
docker run -p 3000:3000 -d --name blog elprogramadorgt/blog
```
