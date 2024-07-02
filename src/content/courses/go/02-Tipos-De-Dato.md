---
title: 02 Tipos de Datos en Go (Strings, Runes y Números)
description: "Explora los diferentes tipos de datos en Go, incluyendo cómo definir y utilizar strings, runes y números, así como sus particularidades y ejemplos prácticos."
date: "2023-04-18T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Data Types
published: true
---

# String

Un string es una serie de bytes que representan caracteres.

Para definir un String solo debemos poner un conjunto de caracteres dentro de comillas dobles.

> Al conjunto de caracteres dentro de las comillas dobles se les denomina string literals.

Go nos permite utilizar caracteres de escape de la siguiente forma:

```go
fmt.Println("Hola \"Go\"!")
fmt.Println("Hola \nQue tal?!")
fmt.Println("Hola \tEsto esta tabulado")
```

# Runes

Los Runes se utilizan para representar caracteres, conocidos en otros lenguajes como chars.

> Al conjunto de caracteres dentro de las comillas simples se les denomina rune literals.

Para definir un rune, debemos poner el carácter dentro de la comilla simple.

Go utiliza Unicode para almacenar los runes, a diferencia de Rust que utiliza UTF-8.

Los runes son almacenados como números, no caracteres. Esto es importante a tener en cuenta porque puede que tengamos que utilizar el carácter asociado con ese valor numérico.

Veamos el ejemplo:

```go
fmt.Println('A')
//output -> 65
```

Al igual que los strings, los runes tambien soportan scape strings. Pero la salida sigue siendo un numero.

```go
fmt.Println('\n')
//output -> 10
```

# Numbers

Go al igual que Rust maneja subgrupos para los datos numericos.

Estan `los unsigned`, los que no tienen signo que van del `uint8 al uin64`

y `los signed`, los que si tienen signo que van desde el `int8 al int64`, que vienen siendo el byte, short, int y long de los otros lenguajes.
