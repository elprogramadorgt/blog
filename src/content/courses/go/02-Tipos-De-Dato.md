---
title: 02 Tipos de Datos
description: "En esta clase exploraremos los tipos de datos fundamentales en Go. Entenderlos es esencial para programar eficientemente y aprovechar las capacidades del lenguaje. ¡Let's Go!"
date: "2023-04-18T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Data Types
published: true
---

En esta clase exploraremos los tipos de datos fundamentales en Go. Entenderlos es esencial para programar eficientemente y aprovechar las capacidades del lenguaje. ¡Let's Go!

## **1. Strings**

Un `string` es una secuencia de caracteres almacenada como una serie de bytes. En Go, los _string literals_ son cadenas de texto que se delimitan con comillas dobles (`"`). Estos pueden incluir caracteres de escape para representar cosas como saltos de línea o tabulaciones.

## **Características:**

- Los _string literals_ son cadenas delimitadas por comillas dobles.
- Soportan _escape sequences_ como `\n` (nueva línea) y `\t` (tabulación).

## **Ejemplo de uso:**

```go
fmt.Println("Hola Go!")          // Imprime: Hola Go!
fmt.Println("Hola \nAdemcito!")  // Imprime: Hola y en la siguiente línea: Ademcito!
fmt.Println("Hola \tDarthMario") // Imprime: Hola    DarthMario
```

## **2. Runes**

Los `rune` representan un único carácter en Go y se almacenan como números en formato Unicode. Se definen con comillas simples (`' '`), al igual que los `char` en Java.

## **Características:**

- Los `rune` son números que representan caracteres Unicode.
- Soportan _escape sequences_, igual que los _string literals_.

## **Ejemplo de uso:**

```go
fmt.Println('A')   // Imprime el código Unicode del carácter 'A'
fmt.Println('\n')  // Representa un salto de línea
```

**Diferencia clave:** Mientras que un `string` puede contener varios caracteres, un `rune` representa solo uno.

## **Ejemplo de uso:**

```go
var isLearningGo bool = true
fmt.Println(isLearningGo) // true
```

## **4. Números**

Go categoriza los números en:

1. **Enteros con signo (`int`) y sin signo (`uint`):**
   - `int8`, `int16`, `int32`, `int64` para enteros con signo.
   - `uint8`, `uint16`, `uint32`, `uint64` para sin signo.
2. **Números de punto flotante (`float`):**
   - `float32` y `float64`.

## **Ejemplo de uso:**

```go
var age int = 30
var price float64 = 19.99
fmt.Println(age, price) // Imprime: 30 19.99
```

## **5. Operadores Matemáticos**

Go admite los operadores matemáticos comunes, similares a otros lenguajes de programación:

| Operación      | Operador |
| -------------- | -------- |
| Suma           | `+`      |
| Resta          | `-`      |
| Multiplicación | `*`      |
| División       | `/`      |

## **Ejemplo de uso:**

```go
fmt.Println(2 + 3)  // 5
fmt.Println(10 - 4) // 6
fmt.Println(3 * 3)  // 9
fmt.Println(20 / 4) // 5
```

## **6. Operadores Lógicos**

Los operadores lógicos te permiten comparar valores:

| Operador | Descripción   |
| -------- | ------------- |
| `>`      | Mayor que     |
| `>=`     | Mayor o igual |
| `<`      | Menor que     |
| `<=`     | Menor o igual |
| `==`     | Igual a       |
| `!=`     | Distinto de   |

```go
fmt.Println(5 > 3)  // true
fmt.Println(5 == 3) // false
fmt.Println(7 != 7) // false
```

## **Resumen**

- **`string`:** Secuencia de caracteres delimitada por comillas dobles.
- **`rune`:** Representa un carácter único en formato Unicode.
- **`bool`:** Verdadero (`true`) o falso (`false`).
- **`int` y `float`:** Números enteros y decimales con variantes dependiendo del tamaño.
- **Operadores:** Matemáticos y lógicos para realizar cálculos y comparaciones.

Practica creando variables y experimenta con los operadores. Dominar los tipos de datos es el primer paso hacia escribir código eficiente y robusto. 🚀
