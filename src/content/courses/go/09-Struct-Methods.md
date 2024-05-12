---
title: 09 Métodos en Structs
description: Cómo agregar métodos a los structs en Go y cómo saber si los structs son iguales.
date: '2024-04-30T00:00:00'
url: '/courses/go/'
tags: 
    - go
    - programming
    - structs
published: true
---

# 09 Métodos en Structs

Un método a diferencia de una función, es que este es propiedad de un tipo de dato.

Un ejemplo claro es el String. Si ustedes quieren saber la longitud de un string utilizamos `variable_string.length()` .

Go es muy diferente en muchos aspectos porque la longitud de un string de hecho funciona igual que en python que es una función en vez de un método.

Pero bueno, crear métodos puede parecer un poco extraño para los que ya tenemos experiencia programando y para los que son nuevos pues todos les parece extraño asi que no pasa nada XD.

> Solamente que alguien diga ah si eso lo vi en un sueño, pero aparte de eso, todo bien no se preocupen.

para crear un método va de la siguiente forma:

```go
type point struct {
	x float32
	y float32
}

func (p point) sum() float32 {
	return p.x + p.y
}

func main() {

	pt1 := point{
		x: 5.6,
		y: 3.8,
	}

	fmt.Println(pt1.sum())
}
```

Tambien le podemos pasar punteros a los métodos, esto es muy util si en dado caso necestiamos que nuestro struct actualice directamente el valor.

Porque si vemos nuestra función `sum` no afecta el valor de `x` ni de `y`.

Ejemplo, ya que nuestro struct guarda la posición x,y supongamos que es la ubiacion de un objeto y queremos que ese objeto se mueva 5 pasos en la dirección horizontal (es decir x) si no lo hacemos a travez de un puntero, el valor permanecera igual.

Pero veamos como sería con un puntero.

```go
func (p *point) moveX() {
	p.x = p.x + 5
}

func main() {

	pt1 := point{
		x: 5.6,
		y: 3.8,
	}
    fmt.Println(pt1.x)
	pt1.moveX()
	fmt.Println(pt1.x)

}
```

Como pueden ver al imprimir otra vez el valor de `x` tenemos 10.6.

> Importante, yo se que parece programacion orientada a objetos, pero no lo es. Lo que significa que no soporta sobrecarga de métodos.

> Sobrecarga de métodos (Method overload) es cuando tenemos varias funciones con el mismo nombre pero que realizan diferentes acciones. y el programa logra diferenciar que funcion debe ejecutar debido a la firma de cada función (function signature).

> La firma de una funcion esta compuesta de los inputs de la funcion (con su tipo de dato dependiendo del lenguaje de programación) y su valor de retorno. Es asi como en programacion oriendata a objetos no tenemos conflicto al tener funciones con el mismo nombre.

## Comparing Structs

Para comparar Structs lo podemos hacer con el `==`.

Sin embargo, si en algun punto tenemos otra propiedad que es un slic.

```go
type point struct {
	x    float32
	y    float32
	name []string
}
```

Automaticamente el compilador de go nos dice: Hey crack no podemos comparar []string `invalid operation: pt2 == pt1 (struct containing []string cannot be compared)`, esto es porque los slices en Go no tienen una definicion para lo que significa ser iguales.

Para eso utilizamos cmp

CMP es un paquete que provee más funcionalidades de comparacion para tipos de datos complejos como los slices, maps, structs e interfaces.

para instalarlo solo ejecutamos el comando:

`go get -u github.com/google/go-cmp/cmp`

> Algo muy importante a tener en cuenta, cuando utilizamos cmp nuestro `struct` necesita ser exportado. Es decir, poner la inicial en mayúscula.

> Recordemos que Go maneja 2 modificadores de acceso: Public y Protected. si la inicial de nuestra variable es minúscula es `Protected`, ahora si es mayúscula es `Public`

Nuestro código estaría de la siguiente manera:

```go
import (
	"fmt"

	"github.com/google/go-cmp/cmp"
)

//Cambiamos las minúsculas por mayúsculas
type point struct {
	X    float32
	Y    float32
	Name []string
}


func main() {
	pt1 := point{
		X:    5.6,
		Y:    3.8,
		Name: []string{"elprogramdorgt"},
	}

	pt2 := point{
		X:    5.6,
		Y:    3.8,
		Name: []string{"elprogramdorgt"},
	}
	//Utilizamos CMP
	fmt.Println(cmp.Equal(pt1, pt2))
}
```


Pero que sucede en el caso que querramos hacer nuestra propia funcion de comparación.
 

En este caso vamos a definir nuestra método tal y como lo hemos venido haciendo

```go

func (p point) Equal(p2 point) bool {
	return p.X == p2.X && p.Y == p2.Y
}
```

En este caso ignoramos que tenga nuestro struct en la parte del Name, unicamente tomamos en cuenta la posición x,y.

```go
	pt1 := point{
		X:    5.6,
		Y:    3.8,
		Name: []string{"elprogramdorgt2"},
	}

	pt2 := point{
		X:    5.6,
		Y:    3.8,
		Name: []string{"elprogramdorgt"},
	}
	fmt.Println(cmp.Equal(pt1, pt2))
```