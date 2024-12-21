---
title: 15 Trabajando con JSON en Go
description: "Aprende a decodificar JSON en Go, incluyendo objetos, arrays y datos anidados, utilizando struct field tags y métodos eficientes para manejar datos JSON."
date: "2024-06-04T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - json
published: true
---

# 12 Trabajando con JSON en Go

JSON es un formato de texto, que inicio como una forma de representar objetos en JavaScript, pero debido a su facilidad de uso se hizo popular para el envío y recepción de datos entre clientes y servidores.

## Tipos de datos soportados por JSON

- Object
- String
- Boolen
- Number
- Array
- null

> Si se dan cuenta, Date no es un tipo de dato soportado por JSON. (Este se envía como String)

## Decode JSON

Recordemos que un JSON cuando se recibe del lado del backend es un string. La mayoría de frameworks ya hacen el decoding en base al header de Content-Type enviado en el request o algún otro método.

![Content-Type Header](/courses/golang/content-type-go-json.png "Content-Type Header")

Pero se transmite como String, entonces para nosotros poder utilizar esos datos en Go necesitamos hacer un `Decoding` del JSON.

De esta forma podemos acceder a los datos utilizado los tipos de datos de nuestro lenguaje de programación, en este caso los de Go.

> Si no se hiciera el decoding, estamos obligados a hacer algún tipo de split o algo para obtener la información del string

Entonces primero debemos importar el paquete `encoding/json`

```go

package main

import (
	"encoding/json"
)
```

Ahora para este ejemplo vamos a suponer el siguiente JSON

```json
{
  "username": "elprogramadorgt",
  "id": 8
}
```

El siguiente paso es definir el tipo, esto nos va a permitir acceder a los valores respectivos de nuestro JSON, en este caso el username o el id.

El Type va de la siguiente forma:

```go
type User struct {
	Username string
	Id  int
}
```

Hay que tener en cuenta que Go es un lenguaje tipado, esto no es Javascript como para que solo declarando por declarar.

Entonces al momento de diseñar el `Type` hay que entender que datos vienen en el JSON, en este caso tenemos un int y un string.

> En la mayoria de casos podemos utilizar el string. El único problema es cuando querramos utilizarlo dentro de nuestra App Go, vamos a tener que hacer un casting si necesitamos hacer alguna operacion

> Personalmente, aunque bromeo con eso XDDD, yo les recomiendo ponerles los tipos adecaudos, esto ayuda en gran medida ataques como SQL Injection, XSS, entre otros.

Una vez establecemos nuestro Type, procedemos a utilizar el método unmarshal de nuestro paquete JSON.

`Unmarshal` es una función que se encarga de decodificar JSON, para utilizarla debemos como primer parametro, castear el JSON string a un slice de bytes y como segundo parámetro la dirección de la variable con la que se va a guardar la información del JSON.

> `Unmarshar` devuelve el error. Recuérdenlo al momento de validar, la asignación se hace a la variable, por eso se le manda la dirección de memoria.

Veamos el ejemplo:

```go
package main

import (
	"encoding/json"
	"fmt"
  "log"
)

type User struct {
	Username string
	Id       int
}

func main() {
	var user User
	jsonString := `{ "username": "elprogramadorgt", "id": 8}`

	err := json.Unmarshal([]byte(jsonString), &user)

  if err != nil {
		log.Fatal(err)
	}

	fmt.Println(user.Username)
	fmt.Println(user.Id)
}
```

## Decode JSON Array

La decodificación de un array es bastante sencilla simplemente le indicamos que será un slice en vez de una simple variable

```go
var user User => var user []User
```

Veamos el ejemplo completo:

```go
package main

import (
	"encoding/json"
	"fmt"
  "log"
)

type User struct {
	Username string
	Id       int
}

func main() {
	var user []User
	jsonString := `[{ "username": "elprogramadorgt", "id": 8},{ "username": "pythonisto", "id": 10}]`

	err := json.Unmarshal([]byte(jsonString), &user)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(user[1].Username)
	fmt.Println(user[1].Id)
}
```

> Si tienen algún error solo revisen que el JSON sea igual al ejemplo. yo estoy devolviendo un array no un `{ data : [{ "username": "elprogramadorgt", "id": 8},{ "username": "pythonisto", "id": 10}] }`, este ejemplo lo veremos a continuacion porque es una union entre el primero y este caso

## Decode JSON inside JSON

Van a existir escenarios que por cualquier razón van a tener un JSON dentro de otro JSON.

Lo genial de Go es que, si tú ya tienes modelados tus datos, hacer el decoding y adaptarlo es bastante simple.

Veamos el siguiente ejemplo:

```go
type User struct {
	Username string
	Id       int
	UserInfo struct {
		Name     string
		Timezone string
	}
}

func main() {
	var user []User
	jsonString := `[
	{ "username": "elprogramadorgt", "id": 8,
		"userInfo":{
			"name": "Edu", "timezone":"GTM-6"
		}
	},
	{ "username": "pythonisto", "id": 10,
		"userInfo":{
			"name": "Pythonisto", "timezone":"GTM-3"
		}
	}]`

	err := json.Unmarshal([]byte(jsonString), &user)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(user[1].Username)
	fmt.Println(user[1].Id)
  fmt.Println(user[1].UserInfo.Timezone)
}

```

En el ejemplo anterior agregamos la estructure UserInfo pero también se puede hacer por separado, que puede suceder si se tiene la data modelada

Estos serían los cambios:

```go
type UserInfo struct {
	Name     string
	Timezone string
}

type User struct {
	Username string
	Id       int
	UserInfo UserInfo
}

```
