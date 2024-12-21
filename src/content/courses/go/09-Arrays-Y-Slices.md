---
title: 09 Arrays y Slices en Go
description: "En Go, los arrays y los slices son estructuras fundamentales para almacenar y manipular colecciones de datos. Aunque son similares, tienen diferencias clave en cuanto a flexibilidad y comportamiento. A continuación, exploraremos ambos conceptos en detalle."
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Array
  - Slice
published: true
---

En Go, los **arrays** y los **slices** son estructuras fundamentales para almacenar y manipular colecciones de datos. Aunque son similares, tienen diferencias clave en cuanto a flexibilidad y comportamiento. A continuación, exploraremos ambos conceptos en detalle.

## **1. Arrays**

Un **array** en Go es una colección de elementos del mismo tipo con una **longitud fija** que no puede modificarse después de su creación. Es útil cuando necesitas trabajar con colecciones de tamaño predefinido.

### **Definición:**

```go

var nums [4]int
fmt.Println(nums) // Imprime: [0 0 0 0]

```

En este ejemplo:

- El array `nums` tiene 4 posiciones.
- Los valores predeterminados (`zero values`) de los elementos son `0`.

### **Inicialización:**

```go

nums := [4]int{1, 2, 3, 4}
fmt.Println(nums) // Imprime: [1 2 3 4]

```

### **Acceso a Elementos:**

```go

fmt.Println(nums[0]) // Accede al primer elemento: 1
nums[1] = 10         // Modifica el segundo elemento
fmt.Println(nums)    // Imprime: [1 10 3 4]

```

### **Longitud de un Array:**

```go

fmt.Println(len(nums)) // Imprime: 4

```

## **2. Arrays Multidimensionales**

Go permite definir arrays con múltiples dimensiones. Por ejemplo, un **array bidimensional** se puede visualizar como una tabla o una cuadrícula.

### **Definición y Acceso:**

```go

var table [3][3]int
table[0][0] = 1
table[1][1] = 2
table[2][2] = 3
fmt.Println(table)
// Imprime:
// [[1 0 0]
//  [0 2 0]
//  [0 0 3]]

```

## **3. Slices**

Un **slice** es una abstracción sobre los arrays. A diferencia de los arrays, los slices:

- Tienen una **longitud dinámica.**
- Pueden crecer o reducirse según sea necesario.

### **Creación de Slices:**

- **Con la función `make`:**

```go

s := make([]int, 5)
fmt.Println(s) // Imprime: [0 0 0 0 0]

```

- **A partir de un array:**

```go

arr := [5]int{1, 2, 3, 4, 5}
s := arr[:3] // Slice de los primeros 3 elementos
fmt.Println(s) // Imprime: [1 2 3]

```

### **Append para Agregar Elementos:**

```go

s := []int{1, 2, 3}
s = append(s, 4, 5)
fmt.Println(s) // Imprime: [1 2 3 4 5]

```

## **4. Propiedades Internas de un Slice**

Un slice tiene tres propiedades principales:

1. **Puntero:** Referencia al array subyacente.
2. **Longitud (`len`)**: Número de elementos actuales del slice.
3. **Capacidad (`cap`)**: Número total de elementos que el array subyacente puede almacenar sin crear uno nuevo.

### **Ejemplo:**

```go

s := make([]int, 5)
fmt.Println(len(s)) // Imprime: 5
fmt.Println(cap(s)) // Imprime: 5

s = append(s, 6)
fmt.Println(len(s)) // Imprime: 6
fmt.Println(cap(s)) // Imprime: 10 (capacidad duplicada)

```

## **5. Asignación y Referencias en Slices**

Cuando asignas un slice a otra variable, ambas comparten la misma referencia al array subyacente.

### **Ejemplo:**

```go

s1 := []int{1, 2, 3}
s2 := s1
s2[0] = 99
fmt.Println(s1) // Imprime: [99 2 3]
fmt.Println(s2) // Imprime: [99 2 3]

```

## **6. Creación de un Nuevo Array al Superar la Capacidad**

Cuando la capacidad de un slice se excede (al usar `append`), Go crea un nuevo array subyacente y copia los datos existentes en él. Esto significa que los cambios en uno no afectan al otro.

### **Ejemplo:**

```go

s1 := make([]int, 3)
s1[0], s1[1], s1[2] = 1, 2, 3
s2 := append(s1, 4) // Se crea un nuevo array al exceder la capacidad

s2[0] = 99
fmt.Println(s1) // Imprime: [1 2 3]
fmt.Println(s2) // Imprime: [99 2 3 4]

```

## **7. Slices y Garbage Collector**

Cuando un slice deja de ser utilizado o apunta a un nuevo array, el **garbage collector** de Go libera la memoria del array anterior si no hay más referencias activas. Esto optimiza el uso de la memoria.

## **Resumen**

- **Arrays:**
  - Tamaño fijo.
  - Almacenan elementos del mismo tipo.
  - Útiles para estructuras estáticas.
- **Slices:**
  - Tamaño dinámico.
  - Basados en arrays, pero más flexibles.
  - Comparten referencias al array subyacente.
- **Capacidad:** Go gestiona la capacidad de los slices duplicándola automáticamente cuando es necesario.

Con una comprensión sólida de arrays y slices, puedes manejar colecciones de datos de manera eficiente y escribir código más flexible en Go. ¡Practica para dominar estos conceptos! 🚀
