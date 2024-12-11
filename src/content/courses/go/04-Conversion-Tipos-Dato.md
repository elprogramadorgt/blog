---
title: 04 Declaración de Variables
description: "En Go, la conversión de tipos de datos es explícita, lo que significa que el programador debe indicar claramente cómo transformar un valor de un tipo a otro. Esto difiere de lenguajes como Java, que realizan algunas conversiones de manera implícita. Veamos cómo funcionan estas conversiones en Go y qué herramientas nos ofrece el lenguaje."
date: "2023-04-22T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Tipos de datos
published: true
---

En Go, la conversión de tipos de datos es explícita, lo que significa que el programador debe indicar claramente cómo transformar un valor de un tipo a otro. Esto difiere de lenguajes como Java, que realizan algunas conversiones de manera implícita. Veamos cómo funcionan estas conversiones en Go y qué herramientas nos ofrece el lenguaje.

## **1. Conversión entre Tipos Numéricos**

En Go, para realizar una operación entre tipos numéricos diferentes, debes realizar una conversión explícita. El lenguaje no intentará inferir el tipo resultante por sí mismo.

### **Ejemplo: Convertir `int` a `float`:**

```go
package main

import (
    "fmt"
)

func main() {
    var a int32 = 9
    var b float32 = 2.5

    // Convertimos `a` a float32 para sumarlo con `b`
    fmt.Println(float32(a) + b) // Imprime: 11.5
}

```

### **Ejemplo: Convertir `float` a `int` (truncamiento):**

```go
package main

import (
    "fmt"
)

func main() {
    var a int32 = 9
    var b float32 = 2.7

    // Convertimos `b` a int32, truncando el decimal
    fmt.Println(a + int32(b)) // Imprime: 11
}

```

**Nota:** Cuando conviertes de `float` a `int`, Go descarta la parte fraccionaria sin aplicar redondeo.

## **2. Conversión de Strings a Enteros**

Go ofrece el paquete `strconv` para manejar conversiones entre strings y números. Este paquete incluye dos funciones principales para convertir strings a enteros:

## **Atoi (ASCII to Integer)**

Convierte un string de base 10 a un entero.

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    num, err := strconv.Atoi("83")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(num) // Imprime: 83
    }
}

```

## **ParseInt**

Es más versátil que `Atoi` porque soporta diferentes bases (binario, octal, decimal, hexadecimal, etc.) y permite especificar el tamaño del dato.

**Definición de la función:**

```go
func ParseInt(s string, base int, bitSize int) (i int64, err error)

```

- **`s`**: El string a convertir.
- **`base`**: La base numérica (2, 8, 10, 16, hasta 36).
- **`bitSize`**: El tamaño en bits del valor (`8`, `16`, `32`, `64`).

### **Ejemplo: Convertir un string decimal a entero con bitSize:**

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    num, err := strconv.ParseInt("255", 10, 8) // 255 en base 10 a 8 bits
    if err != nil {
        fmt.Println("Error:", err) // Imprime un error porque 255 no cabe en 8 bits
    } else {
        fmt.Println(num)
    }
}

```

**Nota:** Si el valor excede el rango del `bitSize` especificado, se genera un error.

## **3. Manejo de Errores en Conversiones**

Las funciones de conversión en Go devuelven dos valores:

1. El valor convertido.
2. Un error que indica si la operación fue exitosa.

Es una práctica común validar este error para manejar situaciones inesperadas.

### **Ejemplo: Manejo de errores con `ParseInt`:**

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    num, err := strconv.ParseInt("300", 10, 8) // 300 excede el rango de 8 bits
    if err != nil {
        fmt.Println("Error:", err) // Imprime: value out of range
    } else {
        fmt.Println(num)
    }
}

```

## **4. Conversión de Enteros a Strings**

Además de convertir strings a enteros, también puedes convertir números a strings usando `strconv.Itoa` (Integer to ASCII).

### **Ejemplo:**

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    num := 42
    str := strconv.Itoa(num)
    fmt.Println(str) // Imprime: "42"
}

```

---

## **Resumen**

- **Go no realiza conversiones implícitas.** Todo debe ser explícito.
- Usa `strconv.Atoi` para convertir strings a enteros base 10.
- Usa `strconv.ParseInt` para conversiones más avanzadas.
- Maneja errores en conversiones para evitar fallos en tiempo de ejecución.
- Convierte entre tipos numéricos usando las funciones de conversión incorporadas.

Las conversiones explícitas pueden parecer un poco más detalladas, pero hacen el código más claro y seguro. ¡Practica estos conceptos para dominarlos! 🚀
