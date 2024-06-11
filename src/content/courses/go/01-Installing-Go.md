---
title: 01 Installing Golang in Linux
description: First go post
date: "2023-07-08T00:00:00"
url: "/courses/go/"
tags:
  - go
  - programming
published: true
---

## Intro

Go es un lenguaje open source que se enfoca en la simplicidad y velocidad.

Una de las características que más me gusta de Go es la posibilidad de `ser ejecutado en diferentes sistemas operativos` sin necesidad de tener algo preinstalado. Como sucede con Java por ejemplo; Java necesita que tu instales la JVM para poder ejecutarlo en tu máquina.

Mientras que el binario generado con Go no necesita de nada. Mas adelante en este post veremos cómo hacerlo ;)

Esta bajo la premisa de ser más simple, es fácil de aprender y aprovechar los multicore de los procesadores con el uso de los canales, entre otras cosas.

Para probar Go sin instalarlo puedes ir al enlace. [https://go.dev/play/](https://go.dev/play/)

> En lo personal siempre prefiero instalarlo localmente en mi máquina, el playground lo utilizo solo para debugear alguna función o probar alguna sintaxis.

## Instalación

Hay diferentes formas de instalar go dependiendo del sistema operativo,

Como bien sabemos para Mac es lo más fácil, luego tenemos sigue Windows y por último Linuxito.

### Linux

1. Descargar el archivo tar.gz de la página oficial.
2. Verificar permisos antes de ejecutar el comando. `tar -C /usr/local  -xzf /path/to/the/file.tar.gz`

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

Go tiene un par de variables de entorno

GOROOT = La utilizas cuando tienes go instalado en una carpeta diferente o inaccesible para la shell.

> Recordemos que en Linux cuando uno escribe un comando, lo que hace es ir a todos los directorios que se encuentran en la variable `$PATH` y si lo encuentra lo ejecuta de lo contrario..... pues no lo ejecuta XDDDD que esperabas? que lo fuera a buscar por todo el disco. XDDDD no pero hablando en serio, por eso es que no es necesaria la variable `GOROOT` porque nosotros instalamos los binarios en /usr/local que es una de los paths que ya tiene por defecto linux configurados.

GOPATH es el directorio donde se descargan todas las librerias que descarguemos con el comando `go get`

> La ruta que yo le tengo al go path esta en /home/[username]/dev_tool/go_modules. Eres libre de ponerle el que quieras

luego vamos al `.bashrc` or `.zshrc` para agregar la ruta del GO_PATH

el archivo deberia quedar de la siguiente forma

```bash
export GOPATH=/home/{username}/dev_tools/go_modules
export GOBIN=$GOPATH/bin
export PATH=$PATH:/usr/local/go/bin:$GOBIN
```

## Hola Mundo Go

Empezamos creando una carpeta para nuestro hola_mundo en el escritorio de nuestra poderosisima Linux Machine.

```bash
cd
cd Desktop
mkdir hola_mundo
cd hola_mundo
```

Una vez creada nuestra carpeta, debemos inicializar nuestro modulo ejecutando el siguiente comando:

```bash
go mod init <nombre_del_modulo>
```

y cual es el standard para nombrar modulos.

por lo general se usa la url del proyecto de github, por ejemplo:
`github.com/google/go-cmp/cmp`

entonces si yo tengo mi proyecto en github seria algo como `github.com/elprogramadorgt/<web_scanner>`

una vez incializamos el modulo activamos el dependency tracking

> Literal Dependency Tracking solo es una forma fancy de decir que valida si las dependencias que vamos a utilizar estan donde le decimos que estan. XDDDD. Pero no le hagan el feo porque bien se los pueden preguntar en una entrevista jajaajaj y te imaginas responderle esa pregunta un poco rebuscada que solo sirve para ponerte nervioso. **ESO SI ES DE GIGACHADS**

(check gif)

Lo siguiente es ejecutar el comando

```bash
go mod tidy
```

Este comando se encarga de descargar todas las dependecias requeridas en nuestro modulo/proyecto y actualiza al mismo tiempo el go.mod (Es algo muy similar al npm install).

Ahora procedemos a crear el archivo `main.go`.

En go por fuerza debemos definir el nombre de package a todos nuestros archivos. Por lo regular es el nombre de la carpeta.

En el caso de nuestro archivo principal, yo le puse `main.go` pero ustedes le pudieron poner `whatthehellisthis.go` que siempre el paquete debe llamarse `main`.

Ejemplo:

```go whatthehellisthis.go
package main


func main(){

}

```

> Esto solo es para el archivo principal, lo que sucede es que go busca en los paquetes main la funcion main para ejecutar y asi iniciar el programa.

si el paquete main no existe nos muestra el error:

```go
package github.com/elprogramadorgt/aoc_go is not a main package
```

Ademas de buscar el paquete main debemos declarar una funcion main como la del ejemplo anterior. (Similar a Java pero mas chido XD)

Una vez completados los pasos anteriores, procedemos a importar una libreria llamada `fmt`. Esta libreria pertenece a las librerias estandard de go asi que no tenemos que instalar nada adicional.

> Go es muy estricto en muchos sentidos pero el mas importante para esta leccion esque solo permite importar las librerias que vamos a utilizar, si usamos VSCode o cualquier plugin de go, cuando guardemos el documento nos eliminara los imports no utilizados y tambien variables. Solo para que lo tengan presente XDDD

Para importar `fmt` lo hacemos debajo de la linea de `package`

```go
import "fmt"
```

Cuando necesitemos importar mas librerias en vez de poner varios imports podemos hacerlo de la siguiente manera:

```go
import (
	"fmt"
	"slices"
	"strings"
)
```

La libreria de format (`fmt`) tiene una funcion llamada Println que es la que utilizaremos para nuestro `Hola Mundo` en go dentro de la funcion main.

Prueba con las instrucciones que te di, hacer el hola mundo, si se te dificulta un poco puedes ver el siguiente codigo.

```go
package main

import "fmt"

func main(){
   fmt.Println("Hola Mundo")
}

```

Si se dieron cuenta no tengo ningun `;` en todo mi codigo. Esto segun la comunidad no es bien visto, pero si tienes los plugins instalados en VSCode al menos, te los elimina automaticamente, pero si no y utilizas `vim` si puedes guardar el archivo con los `;` pero si estas trabajando en un proyecto open source pueda que te rechazen el PR :)

### Format Code

La magia detras del formato y muchas de las cosas del plugin de vscode es gracias al comando `fmt`

```
go fmt file_name
```

Este comando se encarga de literal formatear el codigo (remover y ajustar espacios, eliminar ;, librerias no utilizadas, entre otras).

Esto es muy util en ciertos casos porque en teoria todos los devs deben de programar con el mismo estandard para facilitar la legibilidad.

Pero si en caso alguien sube un codigo y no tiene el formato bien, pues ejecutas el comando y listo. No tienes que andar preguntando que extension bajo, si es Prettier o no, etc.

### Run a Go Program

Como lo mencione al principio en Go podemos generar nuestro binario para cualquier Sistema Operativo desde cualquier sistema operativo, es decir, desde linux puedo generar el binario para ser ejecutado en windows.

Para esto es necesario tener en cuenta 2 variables de entorno de Go

1. GOARH - para especificar la arquitectura
2. GOOS - para especificar el sistema operativo

Entonces la tabla va de la siguiente forma:

| OS      | GOOS    | GOARH |
| ------- | ------- | ----- |
| Linux   | linux   | amd64 |
| MacOs   | darwin  | amd64 |
| Windows | windows | amd64 |

[listado_os_arch](https://github.com/golang/go/blob/master/src/go/build/syslist.go)

```ts
function sayHI() {
  console.log(`Hey ${name}! 👋`);
}
```
