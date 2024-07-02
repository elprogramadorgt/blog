---
title: 13 Mapeando Propiedades JSON en Go
description: "Aprende a manejar diferentes formatos de campos en JSON usando struct field tags en Go, y descubre cómo acceder a datos complejos anidados dentro de JSON."
date: "2024-06-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - json
published: true
---

# 13 Mapeando Propiedades JSON en Go

En un mundo ideal todos utilizaríamos el mismo estándar para nombrar las variables, funciones, etc. Pero no es el caso, y cuando trabajamos con JSON vamos a encontrar diferentes campos, algunos con espacios `{ "current date": "05/05/2024"}` otros igual pero en diferente idioma `{"fecha actual": "05/05/2024"}`, también los hay con mayúscula, minúscula, etc. Lo importante es que nuestra aplicación se adapte a este tipo de campos.

Les pongo un ejemplo, una aplicación se conecta a un API externo el cual actualizo su JSON de respuesta y ahora en vez de ser `{"ID": "33"}` es `{"id": "33"}` y nuestra aplicación debe ser capaz de renombrar ese campo sin implicar agregar un if que valide si lo tiene o no, y eso es lo que vamos a ver en este post.

De nuestro post anterior sabemos que el mapeo de propiedades se logra mediante la declaración de un `Type`, por ejemplo:

```go
type Product struct {
	Id     string
	Name   string
  UpdatedAt string
}
```

Si nuestro JSON fuera el siguiente.

```json
{
  "id": "1",
  "name": "grapes",
  "updated at": "06/06/2024"
}
```

Al momento de intentar acceder a la propiedad `UpdatedAt` no obtendremos ningún valor.

Aquí el código que lo demuestra.

```go
var product Product
jsonString := `{ "id": "1", "name": "grapes", "updated at":"06/06/2024"}`

err := json.Unmarshal([]byte(jsonString), &product)

if err != nil {
		log.Fatal(err)
}

fmt.Println(product.UpdatedAt)
fmt.Println(product.Id)
```

Para resolver esto vamos a utilizar `struct field tags` y estos se ven de la siguiente forma:

```go
type Product struct {
	Id     string
	Name   string
  UpdatedAt string `json:"updated at"`
}
```

y ahora ya podemos obtener el campo UpdatedAt.

Pero en la vida real los JSON son más complejos, como el ejemplo a continuación.

```json
{
  "name": "ElprogramadorGT",
  "eye_color": "brown",
  "gender": "male",
  "movies": {
    "The Matrix": 1999,
    "Interstellar": 2014,
    "Parasite": 2019
  }
}
```

> No es necesario mapear todos los campos del json, lo digo para que no vayan a crear un mega type XDDDD

Si no quisiéramos crear un tipo para este json podemos utilizar el comodín o la versión de "any" en Go.

```go
map[string]interface{}
```

Con esto le decimos que es un `map` en el cual la key es un string y el valor puede ser cualquier tipo de dato (int, vacio, string)

Pero esto solo resuelve la mitad del problema, es decir, solo podemos acceder hasta movies

```go
	jsonString := `
{
   "name":"ElprogramadorGT",
   "eye_color":"brown",
   "gender":"male",
   "movies":{
      "The Matrix":1999,
      "Interstellar":2014,
      "Parasite":2019
   }
}`
var result map[string]interface{}

err := json.Unmarshal([]byte(jsonString), &result)

fmt.Println(result["movies"])
```

Si quisiéramos imprimir The Matrix por ejemplo, no podríamos incluso el editor nos muestra de entrada un error.

Esto es porque cuando le dijimos `interface{}` le dijimos que puede ser cualquier tipo un map, string, int, etc.

Esto es porque go no hace un casting implícito entonces nosotros debemos aplicarlo manualmente de la siguiente forma.

```go
movie := movies.(map[string]interface{})
```

Y ahora ya podemos acceder a cualquiera de las movies de nuestro json.

```go
fmt.Println(movie["Parasite"])
```
