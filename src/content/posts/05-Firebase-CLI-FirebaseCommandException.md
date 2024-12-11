---
title: FirebaseCommandException
description: FirebaseCommandException An error occured on the Firebase CLI when attempting to run a command.
date: "2023-10-06T00:00:00"
url: "/posts/"
tags:
  - firebase
  - flutter
published: true
---

Este error puede suceder por diferentes factores en mi caso, estuve jungado mucho con las llaves primarias, el archivo google-services.json, entre otros.

Y cuando intente ejecutar el comando `flutterfire configure` me daba el siguiente error:

```bash
⠇ Fetching available Firebase projects...
FirebaseCommandException: An error occured on the Firebase CLI when attempting to run a command.
COMMAND: firebase projects:list --json
ERROR: Failed to list Firebase projects. See firebase-debug.log for more info.
```

Busque en todos los sitios, blogs, foros y no encontre nada, y era bien dificil de detectar porque cuando ejecutaba el comando `firebase login` Me decia que estaba activo

```bash
Already logged in as e***@***.***
```

Entonces ejecute los comandos de logout y login porque pueda que el token este expirado y por eso no este funcionando y listo.

Ya podia ejecutar mis comandos de `firebase configure` sin problemas.
