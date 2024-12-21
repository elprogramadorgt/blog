---
title: 06 Condicional SWITCH
description: "El switch es otro mecanismo para controlar el flujo en Go. A menudo es más claro y eficiente que una cadena de if-else cuando se trata de evaluar múltiples condiciones específicas."
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Switch
  - Conditions
published: true
---

El `switch` es otro mecanismo para controlar el flujo en Go. A menudo es más claro y eficiente que una cadena de `if-else` cuando se trata de evaluar múltiples condiciones específicas.

## **¿Cuándo usar Switch?**

El `switch` es ideal cuando tienes un conjunto de opciones claras y definidas. Aunque en otros lenguajes puede requerir sentencias como `break` para evitar la ejecución de casos subsiguientes, Go simplifica este comportamiento.

### **Sintaxis Básica del Switch**

```go
switch expresión {
case valor1:
    // Código a ejecutar si expresión == valor1
case valor2:
    // Código a ejecutar si expresión == valor2
default:
    // Código a ejecutar si no hay coincidencia (opcional)
}

```

### **Ejemplo:**

```go
package main

import "fmt"

func main() {
    day := "Monday"

    switch day {
    case "Monday":
        fmt.Println("Start of the week")
    case "Friday":
        fmt.Println("Weekend is near!")
    default:
        fmt.Println("It's just another day")
    }
}

```

## **Comportamiento por Defecto en Go**

A diferencia de otros lenguajes, Go no necesita un `break` explícito para salir de un caso. Una vez que se encuentra una coincidencia, el `switch` ejecuta el bloque correspondiente y luego sale automáticamente.

### **Ejemplo:**

```go
package main

import "fmt"

func main() {
    number := 2

    switch number {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two") // Ejecuta este caso y luego sale
    case 3:
        fmt.Println("Three")
    }
}

```

## **Default: Caso por Defecto**

El bloque `default` se ejecuta si ninguna de las condiciones coincide. Es similar al `else` en un `if-else`.

### **Ejemplo:**

```go
package main

import "fmt"

func main() {
    number := 5

    switch number {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two")
    default:
        fmt.Println("Number not recognized") // Se ejecuta este caso
    }
}

```

## **Agrupación de Casos**

Puedes agrupar múltiples valores en un solo caso.

### **Ejemplo:**

```go
package main

import "fmt"

func main() {
    letter := 'A'

    switch letter {
    case 'A', 'E', 'I', 'O', 'U':
        fmt.Println("Vowel")
    default:
        fmt.Println("Consonant")
    }
}

```

## **Fallthrough: Continuar al Siguiente Caso**

Por defecto, Go no ejecuta el siguiente caso después de encontrar una coincidencia. Sin embargo, puedes usar la palabra clave `fallthrough` para obligar al `switch` a continuar al siguiente caso, independientemente de su condición.

### **Ejemplo:**

```go

package main

import "fmt"

func main() {
    number := 1

    switch number {
    case 1:
        fmt.Println("One")
        fallthrough
    case 2:
        fmt.Println("Two") // Este caso se ejecuta gracias a fallthrough
    case 3:
        fmt.Println("Three")
    }
}

```

**Nota:** `fallthrough` no verifica la condición del siguiente caso; simplemente lo ejecuta.

## **Switch sin Expresión**

En Go, puedes usar `switch` sin especificar una expresión. Esto lo convierte en una alternativa flexible a múltiples `if-else`.

### **Ejemplo:**

```go

package main

import "fmt"

func main() {
    number := 15

    switch {
    case number < 10:
        fmt.Println("Less than 10")
    case number >= 10 && number <= 20:
        fmt.Println("Between 10 and 20")
    default:
        fmt.Println("Greater than 20")
    }
}

```

## **Diferencias Clave entre Switch y If**

1. **Claridad:** Un `switch` es más legible cuando trabajas con múltiples valores específicos.
2. **Agrupación:** El `switch` permite agrupar casos fácilmente.
3. **Fallthrough:** El `switch` en Go tiene `fallthrough`, algo no disponible en un `if`.

### **¿Cuándo usar cuál?**

- Usa `if` para rangos o evaluaciones complejas.
- Usa `switch` para valores discretos o cuando los casos están claramente definidos.

## **Resumen**

- **`switch` es más eficiente y legible** cuando trabajas con múltiples valores.
- **`default`** se usa para manejar casos no contemplados.
- **Agrupa casos similares** en una sola línea con comas.
- **`fallthrough` permite continuar al siguiente caso,** independientemente de la condición.
