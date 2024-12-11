---
title: 03 Declaración de Variables
description: "Las variables son fundamentales en cualquier lenguaje de programación, y en Go no es la excepción. En esta sección aprenderás cómo declararlas, inicializarlas y usarlas de manera eficiente."
date: "2023-04-20T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Variables
published: true
---

Las variables son fundamentales en cualquier lenguaje de programación, y en Go no es la excepción. En esta sección aprenderás cómo declararlas, inicializarlas y usarlas de manera eficiente.

## **¿Qué es una variable?**

Una variable es un espacio en memoria al que asignamos un nombre para almacenar valores. En Go, debido a que es un lenguaje tipado, cada variable debe tener un tipo de dato que define qué valores puede contener.

## **Estructura básica de una declaración:**

1. Palabra clave `var`.
2. Nombre de la variable.
3. Tipo de dato (opcional si hay inferencia por inicialización).
4. Valor (opcional).

---

## **Declaración básica de variables**

Para declarar variables en Go usamos la palabra clave `var`. La sintaxis básica incluye el nombre de la variable, su tipo y un valor opcional.

### **Ejemplo de declaración con inicialización:**

```go
var color string = "Cyan"
var gravity float32 = 9.8
var letter rune = 'C'

fmt.Println(color)  // Imprime: Cyan
fmt.Println(gravity) // Imprime: 9.8
fmt.Println(letter)  // Imprime: C
```

## **Declaración sin inicialización:**

Si no asignamos un valor, la variable toma el _zero value_ de su tipo:

- Números: `0`.
- Strings: `""` (string vacío).
- Booleanos: `false`.

### **Ejemplo:**

```go
var message string
var count int

fmt.Println(message) // Imprime: ""
fmt.Println(count)   // Imprime: 0
```

## **Asignaciones múltiples**

Go permite declarar y asignar múltiples variables en una sola línea.

### **Ejemplo:**

```go
var color, gravity = "Cyan", 9.8
fmt.Println(color, gravity) // Imprime: Cyan 9.8

```

Incluso puedes usar diferentes tipos en una sola asignación:

```go
var hi, by, edu, to = "hello", 90, true, 9.1
fmt.Println(hi, by, edu, to) // Imprime: hello 90 true 9.1

```

## **Asignación en pasos**

También puedes declarar una variable sin inicializarla y asignarle un valor más tarde.

### **Ejemplo:**

```go
var color string
var gravity float32

color = "Cyan"
gravity = 9.8

fmt.Println(color)  // Imprime: Cyan
fmt.Println(gravity) // Imprime: 9.8

```

## **Short Variable Declaration**

Go tiene una sintaxis simplificada para declarar variables: el operador `:=`. Este operador se utiliza cuando queremos inicializar una variable y permitir que Go infiera su tipo.

### **Ejemplo:**

```go
color := "Cyan"
gravity := 9.8

fmt.Println(color)  // Imprime: Cyan
fmt.Println(gravity) // Imprime: 9.8

```

### **¿Cuándo usar `:=` y cuándo `var`?**

- Usa `:=` cuando tengas un valor inicial para la variable y quieras reducir código.
- Usa `var` cuando necesites declarar una variable sin asignarle un valor inicial.

## **Cómo verificar el tipo de una variable**

Puedes usar el paquete `reflect` para conocer el tipo de una variable.

### **Ejemplo:**

```go
import (
    "fmt"
    "reflect"
)

func main() {
    fmt.Println(reflect.TypeOf(4.23)) // Imprime: float64
}

```

## **Zero Values**

Cuando declaras una variable sin inicializarla, Go le asigna un _zero value_ según su tipo.

| Tipo     | Zero Value |
| -------- | ---------- |
| `int`    | `0`        |
| `float`  | `0.0`      |
| `string` | `""`       |
| `bool`   | `false`    |

### **Ejemplo:**

```go

var number int
var active bool

fmt.Println(number) // 0
fmt.Println(active) // false

```

### **Resumen**

- Usa `var` para declarar variables con o sin un valor inicial.
- Usa `:=` para una sintaxis más concisa si tienes un valor inicial.
- Go es un lenguaje tipado; asegúrate de asignar valores del tipo correcto.
- Recuerda que las variables no inicializadas toman su _zero value_.

Con estos conceptos, ya puedes manejar variables en Go como un profesional. 🚀 ¡Ahora es tu turno de practicar!
