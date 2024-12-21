---
title: 10 Slicing y Ranging
description: "En esta lección, exploraremos cómo trabajar con slices y arrays en Go, profundizando en operaciones como extraer rangos, copiar, insertar y eliminar elementos"
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Range
  - Slice
published: true
---

En esta lección, exploraremos cómo trabajar con slices y arrays en Go, profundizando en operaciones como extraer rangos, copiar, insertar y eliminar elementos.

## **1. Slicing en Go**

El **slicing** permite extraer subconjuntos de elementos de un array o slice.

### **Sintaxis:**

```go

slice[start:end]

```

- **`start`:** Índice inicial (incluido).
- **`end`:** Índice final (no incluido).

### **Ejemplo Básico:**

```go

var c [4]string
c[0] = "iOS"
c[1] = "Android"
c[2] = "Windows"
c[3] = "MacOS"

fmt.Println(c[0:2]) // ["iOS", "Android"]
fmt.Println(c[:2])  // ["iOS", "Android"]
fmt.Println(c[1:])  // ["Android", "Windows", "MacOS"]
fmt.Println(c[:])   // ["iOS", "Android", "Windows", "MacOS"]

```

## **2. Efectos del Slicing en la Memoria**

Cuando haces un slicing de un slice o array, Go ajusta el puntero para que apunte al rango seleccionado. Esto significa que los cambios en el slice afectarán el array subyacente.

### **Ejemplo:**

```go

t := []int{1, 2, 3, 4, 5}
fmt.Println(len(t)) // 5
fmt.Println(cap(t)) // 5

t = t[2:4] // Slicing
fmt.Println(t)      // [3 4]
fmt.Println(len(t)) // 2
fmt.Println(cap(t)) // 3

```

## **3. Iterar sobre Slices y Arrays**

Usamos el **`for-range`** para iterar sobre slices y arrays.

### **Ejemplo:**

```go

t := []int{1, 2, 3, 4, 5}

for i, v := range t {
    fmt.Printf("Índice: %d, Valor: %d\n", i, v)
}

```

## **4. Copiar Slices**

Para copiar un slice, usamos la función `copy`. Esto crea una copia independiente, lo que significa que los cambios en una copia no afectan la otra.

### **Ejemplo:**

```go

t := []int{1, 2, 3, 4, 5}
v := make([]int, len(t))

copy(v, t)
fmt.Println(t) // [1 2 3 4 5]
fmt.Println(v) // [1 2 3 4 5]

v[0] = 99
fmt.Println(t) // [1 2 3 4 5]
fmt.Println(v) // [99 2 3 4 5]

```

### **Nota Importante:**

Si el slice destino es más pequeño, solo se copiarán los elementos que quepan:

```go

v := make([]int, 2)
copy(v, t)
fmt.Println(v) // [1 2]

```

## **5. Insertar Elementos en un Slice**

Go no tiene una función incorporada para insertar elementos en un slice. Debemos implementarla manualmente.

### **Implementación:**

```go

import "errors"

func insert(orig []int, index int, value int) ([]int, error) {
    if index < 0 {
        return nil, errors.New("Index cannot be less than 0")
    }
    if index >= len(orig) {
        return append(orig, value), nil
    }
    orig = append(orig[:index+1], orig[index:]...)
    orig[index] = value
    return orig, nil
}

```

### **Ejemplo de Uso:**

```go

t := []int{1, 2, 3, 4, 5}
t, err := insert(t, 2, 99)
if err == nil {
    fmt.Println(t) // [1 2 99 3 4 5]
} else {
    fmt.Println(err)
}

```

## **6. Eliminar Elementos de un Slice**

Para eliminar elementos, usamos una estrategia similar a la inserción, combinando `append` y slicing.

### **Implementación:**

```go

func delete(orig []int, index int) ([]int, error) {
    if index < 0 || index >= len(orig) {
        return nil, errors.New("Index out of range")
    }
    orig = append(orig[:index], orig[index+1:]...)
    return orig, nil
}

```

### **Ejemplo de Uso:**

```go

t := []int{1, 2, 3, 4, 5}
t, err := delete(t, 2)
if err == nil {
    fmt.Println(t) // [1 2 4 5]
} else {
    fmt.Println(err)
}

```

## **7. Resumen**

- **Slicing:**
  - Permite extraer subconjuntos de un slice o array.
  - Ajusta punteros en memoria, afectando el array subyacente.
- **Iteración:**
  - Usa `for-range` para recorrer slices y arrays.
- **Copiar:**
  - Usa `copy` para crear copias independientes.
- **Insertar y Eliminar:**
  - No están integradas, pero se pueden implementar manualmente con `append` y slicing.

Estas operaciones son esenciales para trabajar eficientemente con colecciones de datos en Go. Practica estos conceptos para entenderlos profundamente y aplicarlos en proyectos reales. 🚀
