---
title: Cambios en git status pero no en git diff
description: First Post
date: "2023-10-02T00:00:00"
url: "/posts/"
tags:
  - git
  - permisos
published: true
---

Esta semana estuve trabajando en una app web y un amigo me dijo "Ey crack yo te puedo ayudar en la UI" y yo dije `KOOOMOOOO` me sentí ofendido la verdad XDDDDDD.

Bueno el punto es que me estaba ayudando, pero por alguna razón no podía acceder a su github entonces le pase el proyecto en un zip (sé que no es buena práctica, pero pues... es lo que hay viejo) y justo cuando termino y agregue sus archivos a mi código que tenía en git.

y OH Sorpresa! 36 cambios 😟

![Git Changes](/posts/03/git_changes.png)

Y dije no puede ser que tantos cambios y no me aparecía nada en el VSCode, entonces ejecute el típico comando de `git diff` para ver cuáles eran las diferencias.

Los cambios que mostraba el comando solo era cambios de permisos de 644 a 755.

Ahora que procede en este caso, yo sé que algunos conocen el famoso `git config core.fileMode false` y esto va a solventar sus problemas (temporalmente).

Recordemos que los que tenga un directorio o un archivo en un servidor puede permitir o denegar la edición de este, es decir si alguien logra inyectar código y tú tienes archivos con permisos de escritura, solo es sobrescribirlo con el nuevo código inyectado un pequeño reverse shell y listo `hacked`.

A menos que tú ya dentro de tu docker o dentro de tu rutina de deploy que tengas, siempre veas los permisos de los archivos.
