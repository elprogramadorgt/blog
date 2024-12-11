---
title: 05 Condicional IF
description: "Los condicionales son fundamentales en la programación, ya que permiten que el programa tome decisiones en función de ciertas condiciones. En Go, los condicionales se implementan mediante las estructuras if y switch. A continuación, exploraremos su funcionamiento y las mejores prácticas."
date: "2023-04-22T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - If
  - Conditions
published: true
---

Los condicionales son fundamentales en la programación, ya que permiten que el programa tome decisiones en función de ciertas condiciones. En Go, los condicionales se implementan mediante las estructuras `if` y `switch`. A continuación, exploraremos su funcionamiento y las mejores prácticas.

## **1. If: La Base de los Condicionales**

La estructura `if` evalúa una expresión booleana y ejecuta el bloque de código asociado si la condición es `true`.

### **Sintaxis básica:**

```go
if condición {
    // Código a ejecutar si la condición es true
}

```

### **Ejemplo:**

```go
percentage := 80

if percentage > 70 {
    fmt.Println("Percentage is above 70")
}

```

### **Notas importantes:**

- No necesitas paréntesis alrededor de la condición.
- El bloque de código debe estar entre llaves `{}`.

## **2. Else y Else If**

- **`else`:** Se ejecuta si todas las condiciones anteriores no son `true`.
- **`else if`:** Permite evaluar condiciones adicionales.

### **Ejemplo práctico:**

```go
import (
    "fmt"
    "time"
)

func main() {
    now := time.Now()

    if now.Hour() <= 11 {
        fmt.Println("Buenos días")
    } else if now.Hour() <= 18 {
        fmt.Println("Buenas tardes")
    } else {
        fmt.Println("Buenas noches")
    }
}

```

**Cuidado:** Asegúrate de que las condiciones estén ordenadas lógicamente para evitar resultados inesperados.

## **3. Operador de Negación (`!`)**

El operador `!` invierte el valor de una expresión booleana. Es útil para evitar comparaciones innecesarias como `if variable == false`.

### **Ejemplo:**

```go
isOnline := true

if !isOnline {
    fmt.Println("User is offline")
}

```

## **4. Operadores Lógicos: AND (`&&`) y OR (`||`)**

- **`&&` (AND):** Todas las condiciones deben ser `true` para que el bloque se ejecute.
- **`||` (OR):** Basta con que una condición sea `true`.

### **Ejemplo de AND:**

```go
isStrawberryJuice := true
isMangoJuice := true

if isStrawberryJuice && isMangoJuice {
    fmt.Println("Buy it")
} else {
    fmt.Println("Don't")
}

```

### **Ejemplo de OR:**

```go
isStrawberryJuice := true
isOrangeJuice := false

if isStrawberryJuice || isOrangeJuice {
    fmt.Println("Buy it")
} else {
    fmt.Println("Don't")
}

```

## **5. Errores y Validaciones con Condicionales**

En Go, es común manejar errores en estructuras condicionales. La forma más limpia de hacerlo es procesar los errores inmediatamente, minimizando el anidamiento de código.

### **Manejo básico de errores:**

```go
v, err := doSomething()
if err != nil {
    fmt.Println("Error:", err)
    return
}
fmt.Println(v)

```

### **Condicionales con inicialización dentro del if:**

Puedes declarar variables dentro del mismo `if`, limitando su alcance al bloque.

```go
if v, err := doSomething(); err == nil {
    fmt.Println(v)
} else {
    fmt.Println("Error:", err)
}

```

Esta técnica es útil para reducir el alcance de las variables temporales y evitar confusiones.

## **6. Anidación de Condicionales: Optimización**

Aunque técnicamente puedes anidar condicionales, esto puede hacer que el código sea difícil de leer. Es preferible estructurar las condiciones de manera clara y lógica.

### **Evita anidaciones excesivas:**

```go
if isStrawberryJuice {
    if isMangoJuice {
        fmt.Println("Buy it")
    }
}

```

### **Mejor enfoque:**

```go
if isStrawberryJuice && isMangoJuice {
    fmt.Println("Buy it")
}

```

## **7. Buenas Prácticas para Condicionales**

1. **Evita bloques innecesarios:** No agregues un bloque `else` si no es estrictamente necesario.
2. **Agrupa validaciones relacionadas:** Utiliza operadores lógicos para combinar condiciones.
3. **Ordena las condiciones lógicamente:** Evita conflictos o resultados inesperados debido al orden de evaluación.
4. **Minimiza el alcance de las variables:** Declara variables solo dentro de los bloques donde se necesiten.

## **Resumen**

- **`if` y `else if`:** Evalúan condiciones booleanas y ejecutan bloques de código específicos.
- **`else`:** Se ejecuta si no se cumple ninguna condición anterior.
- **Operadores:** Usa `&&` y `||` para combinar condiciones, y `!` para negarlas.
- **Manejo de errores:** Procesa errores tan pronto como se detecten para evitar confusión.

Con estas herramientas y buenas prácticas, podrás manejar cualquier tipo de decisión en tus programas Go de manera eficiente y limpia. ¡A practicar! 🚀
