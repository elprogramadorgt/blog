---
title: 11 Structs
description: "Los structs son la forma en que Go organiza y agrupa datos relacionados en una sola unidad lógica. A diferencia de los tipos básicos como int, float, o string, los structs permiten modelar entidades más complejas al combinar múltiples atributos bajo un solo tipo de dato."
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Structs
published: true
---

Los **structs** son la forma en que Go organiza y agrupa datos relacionados en una sola unidad lógica. A diferencia de los tipos básicos como `int`, `float`, o `string`, los structs permiten modelar entidades más complejas al combinar múltiples atributos bajo un solo tipo de dato.

## **1. ¿Qué es un Struct?**

Un **struct** es una colección de campos que pueden tener diferentes tipos de datos. Es útil para representar entidades del mundo real, como usuarios, puntos en un espacio, productos, etc.

### **Ejemplo Básico:**

```go

type Point struct {
    x float32
    y float32
    z float32
}

func main() {
    var pt1 Point
    pt1.x = 3.1
    pt1.y = 5.7
    pt1.z = 4.2
    fmt.Println(pt1) // Imprime: {3.1 5.7 4.2}
}

```

## **2. Declarar y Asignar Valores a un Struct**

Existen varias formas de inicializar y asignar valores a un struct en Go.

### **Declaración Explícita:**

```go

pt := Point{x: 5.6, y: 3.8, z: 6.9}
fmt.Println(pt) // Imprime: {5.6 3.8 6.9}

```

### **Declaración Implícita (Ordenada):**

```go

pt := Point{5.6, 3.8, 6.9}
fmt.Println(pt) // Imprime: {5.6 3.8 6.9}

```

- El orden de los valores debe coincidir con el orden definido en la estructura.
- **Nota:** Es mejor evitar esta forma cuando el struct tiene muchos campos, ya que puede ser confuso.

### **Inicialización Multilínea:**

Cuando se utiliza una inicialización en múltiples líneas, es necesario incluir una coma al final de cada campo:

```go

pt := Point{
    x: 5.6,
    y: 3.8,
    z: 6.9, // Coma al final
}

```

## **3. Constructor Functions**

A diferencia de otros lenguajes como Java o C#, Go no tiene **constructores por defecto**. En su lugar, se utiliza una **constructor function** que retorna un puntero a un struct inicializado.

### **Ejemplo:**

```go

func newPoint(x, y, z float32) *Point {
    p := Point{x: x, y: y, z: z}
    return &p
}

func main() {
    pt := newPoint(7.8, 9.1, 2.3)
    fmt.Println(pt) // Imprime: &{7.8 9.1 2.3}
}

```

- La función `newPoint` inicializa un `Point` y retorna un puntero (`Point`) a la estructura.

## **4. Punteros y Copias en Structs**

### **Asignación de Referencias:**

Cuando asignas un puntero a un struct, cualquier cambio en uno de ellos afecta al otro, ya que ambos apuntan a la misma dirección de memoria.

```go

pt1 := newPoint(7.8, 9.1, 2.3)
pt2 := pt1
pt2.x = 99.9

fmt.Println(pt1) // Imprime: &{99.9 9.1 2.3}
fmt.Println(pt2) // Imprime: &{99.9 9.1 2.3}

```

### **Copias Independientes:**

Si necesitas que una copia sea independiente del struct original, trabaja directamente con variables no puntero o usa el operador `*` para desreferenciar.

```go

pt1 := Point{x: 7.8, y: 9.1, z: 2.3}
pt2 := pt1
pt2.x = 99.9

fmt.Println(pt1) // Imprime: {7.8 9.1 2.3}
fmt.Println(pt2) // Imprime: {99.9 9.1 2.3}

```

## **5. Comparación entre Structs y Punteros**

### **Struct como Puntero (``):**

- Útil para estructuras grandes donde copiar datos puede ser costoso.
- Permite modificar el struct original.

### **Struct como Valor:**

- Hace una copia completa.
- Cambios en una copia no afectan al original.

### **Ejemplo Visual de Diferencia:**

```go

pt1 := &Point{x: 1.1, y: 2.2, z: 3.3} // Puntero
pt2 := Point{x: 4.4, y: 5.5, z: 6.6}  // Valor

fmt.Println(pt1) // &{1.1 2.2 3.3}
fmt.Println(pt2) // {4.4 5.5 6.6}

```

## **6. Resumen**

1. **Structs:**
   - Agrupan datos relacionados en una unidad lógica.
   - Se declaran con la palabra clave `type`.
2. **Inicialización:**
   - Explícita: `Point{x: 5.6, y: 3.8, z: 6.9}`
   - Implícita: `Point{5.6, 3.8, 6.9}` (menos recomendable).
3. **Constructores:**
   - No hay constructores automáticos; usa funciones personalizadas.
4. **Punteros:**
   - Permiten trabajar directamente con la memoria.
   - Cambios en structs apuntados afectan a todos los punteros.
5. **Copias:**
   - Asignar un struct por valor crea una copia independiente.

Con esta base, en la próxima lección veremos cómo agregar **métodos** a los structs para ampliar su funcionalidad y comportamiento. 🚀
