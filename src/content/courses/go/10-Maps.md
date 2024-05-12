---
title: 10 Maps
description: Cómo agregar métodos a los structs en Go y cómo saber si los structs son iguales.
date: '2024-04-30T00:00:00'
url: '/courses/go/'
tags: 
    - go
    - programming
	- structs
published: true
---

# 10 Maps

Hasta el momento hemos venido utilizando arrays y slices que son estructuras que nos permiten acceder a los datos por medio de su posición.

Los maps utilizan un hash table para almacenar los datos de forma asociativa.

Los elementos de un map no se acceden mediante posiciones sino que por medio de una key ( una key es un valor unico que identifica cada elemento en el mapa).

Estas keys permiten que agregar o eliminar elementos de una mapa sea eficiente.

Syntaxis de un map

```go
var countriesAreaCode map[string]int
```

para poder