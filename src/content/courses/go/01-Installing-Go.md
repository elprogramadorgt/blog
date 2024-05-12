---
title: 01 Installing Golang in Linux
description: First go post
date: '2023-07-08T00:00:00'
url: '/courses/go/'
tags: 
    - go
    - programming
published: true
---

## Intro

Go es un lenguaje open source que se enfoca en la simplicidad y velocidad.

Esta bajo la premisa de ser más simple, es fácil de aprender y aprovechar los multicore de los procesadores con el uso de los canales, entre otras cosas.

Para probar Go sin instalarlo puedes ir al enlace. [https://go.dev/play/](https://go.dev/play/)


> En lo personal siempre prefiero instalarlo localmente en mi máquina, el playground lo utilizo solo para debugear alguna función o probar alguna sintaxis.


## Instalación


Hay diferentes formas de instalar go dependiendo del sistema operativo,

Como bien sabemos para Mac es lo más fácil, luego tenemos sigue Windows y por último Linuxito.

### Linux

1. Descargar el archivo tar.gz de la página oficial.
2. Verificar permisos antes de ejecutar el comando. ` tar -C /usr/local  -xzf /path/to/the/file.tar.gz `

> Dependiendo del tipo de shell que tiengan es necesario editar el archivo `.bashrc o .zshrc`

3. Agregamos las siguientes variables de ambiente.

```bash
export PATH=$PATH:/usr/local/go/bin
```

Listo, cerramos terminal, abrimos una nueva y ejecutamos el siguiente comando.

```bash
go version
```

ahora hay que crear un directorio, el cual se encarga de guardar las librerias que descarguemos para nuestros programas en Go, como un `node_modules` pero para 100x mejor XDDD gracioso, pero cierto. 




```ts
function sayHI(){
    console.log(`Hey ${name}! 👋`)
}
```