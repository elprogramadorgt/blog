---
title: 13 Trabajando con Maps en Go
description: "Aprende a utilizar maps en Go, incluyendo su creación, inicialización, acceso, validación de claves, eliminación de elementos y conteo de elementos."
date: "2024-05-14T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Map
published: true
---

# 10 Trabajando con Maps en Go

Hasta el momento hemos venido utilizando arrays y slices que son estructuras que nos permiten acceder a los datos por medio de su posición.

Los maps utilizan un hash table para almacenar los datos de forma asociativa.

Los elementos de un map no se acceden mediante posiciones sino que por medio de una key (una key es un valor único que identifica cada elemento en el mapa).

Estas keys permiten que agregar o eliminar elementos de un map sea eficiente.

Sintaxis de un map

```go
var fruits map[string]int
```

Para poder utilizar el map es importante inicializarlo primero con la función make

```go
fruits = make(map[string]int)
```

Ahora ya procedemos a agregar elementos

```go
fruits["grape"] = 5;
fruits["orange"] = 9;
```

y para obtener los valores de este mismos solo le decimos que key buscamos y listo

```go
fmt.Println(fruits["grape"])
```

también podemos inicializar los maps utilizando `map literals`

```go
fruits := map[string]int{
    "grape": 14,
    "orange":  3,
    "strawberry":   8,
}
```

> Solo atención con esa coma al final del map. Go es bien estricto con eso y da error. Lo bueno es que no te deja compilarlo entonces te vas a dar cuenta y los mensajes de error son bastante fáciles de entender. (A diferencia de React XDDDD)

## Key Exists

Para validar si una key existe dentro de nuestro map, simplemente accedemos a la key y listo. Si la key no existe retorna el zero value de la variable que definimos.

> Recordemos que go tiene default values para los tipos de variables por ejemplo para int es 0 para bool es false creo y asi sucesivamente. Solo tengan cuidado de que no sea uno de los valores que esperan en su código porque se va poner alegre debuguear eso. XDDDDDD

Aunque en mi caso, la mejor forma que veo para validar si existe es destructurandolo de una vez en el if. (no es el termino técnico correcto en cuanto lo tenga lo actualizo)

pero se ve de la siguiente forma:

```go
if v, ok := fruits["kiwi"]; ok {
    fmt.Println(v)
} else {
    fmt.Println("Key does not exist")
}
```

lo que sucede aquí es que separamos el valor y resultado si existe o no del mapa y se utiliza en el if.

por eso esta el `;` es igual a que hicieran esto:

```go
v, ok := fruits["kiwi"]
if  ok {
    fmt.Println(v)
} else {
    fmt.Println("Key does not exist")
}
```

> Esto es posible porque nos retorna 2 valores. Aunque he visto personas que se quejan de esto, en lo personal me parece excelente la forma de validarlo, te evita muchos errores.

## Delete key

Para eliminar una key solo llamamos a la función `delete(map, key)`.

```go
delete(fruits, "lime")
```

Esta función no retorna ningún valor, pero si quieres saber si una key existe antes de eliminarla, podemos utilizar el codigo anterior para validar si la key existe.

## Number of elements

Para obtener el número de items en el map utilizamos la funcion `len(map)`.

```go
len(fruits)
```
