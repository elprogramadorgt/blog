---
title: 07 Loops
description: "Un loop (o bucle) es una estructura que permite ejecutar un bloque de código repetidamente mientras se cumpla una condición. En Go, la única estructura de bucle disponible es el for, que puede adoptar diferentes formas para cubrir una variedad de casos de uso."
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Switch
  - Conditions
published: true
---

## **1. Sintaxis del For Básico**

La estructura básica de un bucle `for` incluye tres partes: **init**, **condition** y **post statement**.

```go
for init; condition; post {
    // Código que se ejecutará mientras la condición sea verdadera
}

```

Un **loop** (o bucle) es una estructura que permite ejecutar un bloque de código repetidamente mientras se cumpla una condición. En Go, la única estructura de bucle disponible es el **`for`**, que puede adoptar diferentes formas para cubrir una variedad de casos de uso.

## **Componentes:**

1. **Init:** Se ejecuta una vez al inicio del bucle (por ejemplo, inicialización de variables).
2. **Condition:** Evalúa si el bucle debe continuar. Si es `false`, el bucle se detiene.
3. **Post statement:** Se ejecuta después de cada iteración (por ejemplo, incremento de variables).

### **Ejemplo:**

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

```

## **2. For con Múltiples Variables**

Puedes declarar y modificar varias variables en el `for`, tanto en el **init** como en el **post statement**.

### **Ejemplo:**

```go
for i, j := 0, 10; i < 5; i, j = i+1, j-1 {
    fmt.Println(i, j)
}

```

## **3. For sin Init Condition ni Post Statement**

Las secciones **init** y **post** son opcionales. Esto hace que el `for` de Go sea muy flexible.

### **Ejemplo:**

```go
limit := 10
b := 0
for b <= limit {
    fmt.Println(b)
    b++
}

```

## **4. Bucle Infinito**

Si omites la condición, obtendrás un bucle infinito. Útil cuando quieres un bucle que dependa de instrucciones internas como `break` o `return`.

### **Ejemplo:**

```go
i := 0
for {
    fmt.Println("Hola")
    if i > 5 {
        break
    }
    i++
}

```

## **5. Iterar sobre Colecciones con For-Range**

El bucle `for-range` es una herramienta poderosa para recorrer **slices**, **arrays**, **strings**, **maps**, o **canales**.

### **Sintaxis:**

```go
for índice, valor := range colección {
    // Código que utiliza índice y valor
}

```

### **Ejemplo con Slices:**

```go
OS := []string{"iOS", "Android", "Windows"}

for i, v := range OS {
    fmt.Println(i, v)
}

```

### **Ejemplo con Strings:**

```go
for pos, char := range "Hello, world!" {
    fmt.Printf("Posición: %d, Carácter: %q\n", pos, char)
}

```

## **6. Break y Continue**

- **`break`:** Sale del bucle actual.
- **`continue`:** Salta a la siguiente iteración del bucle.

### **Ejemplo:**

```go
for i := 0; i < 10; i++ {
    if i == 5 {
        break // Sale del bucle cuando i es 5
    }
    if i%2 == 0 {
        continue // Salta números pares
    }
    fmt.Println(i)
}

```

## **7. Labels con Break y Continue**

Go permite usar **labels** para identificar bucles específicos, lo que es útil cuando trabajas con bucles anidados.

## **Break con Label:**

```go
Outerloop:
for i := 1; i <= 5; i++ {
    for j := 1; j <= 5; j++ {
        if i == 3 {
            break Outerloop // Sale del bucle Outerloop
        }
        fmt.Printf("%d * %d = %d\n", i, j, i*j)
    }
}

```

## **Continue con Label:**

```go
Outerloop:
for i := 1; i <= 5; i++ {
    for j := 1; j <= 5; j++ {
        if i == 3 {
            continue Outerloop // Salta el resto de las iteraciones del bucle externo
        }
        fmt.Printf("%d * %d = %d\n", i, j, i*j)
    }
}

```

## **8. Iterar Strings con For-Range**

El `for-range` sobre strings devuelve índices y runas (números Unicode).

### **Ejemplo:**

```go
for pos, char := range "GoLang" {
    fmt.Printf("Posición: %d, Carácter: %c\n", pos, char)
}

```

Si necesitas los caracteres como strings, puedes convertirlos:

```go
for _, char := range "GoLang" {
    fmt.Println(string(char)) // Convierte runas a string
}

```

## **9. For como While**

Aunque Go no tiene un bucle `while`, puedes emularlo fácilmente con un `for` sin init ni post.

### **Ejemplo:**

```go
counter := 0
for counter < 5 {
    fmt.Println(counter)
    counter++
}

```

## **10. Resumen**

- **Estructura básica:** `for init; condition; post { ... }`.
- **Flexible:** Puede omitir `init`, `condition`, o `post`.
- **For-range:** Ideal para recorrer colecciones y strings.
- **Break y Continue:** Controlan la ejecución dentro de bucles.
- **Labels:** Facilitan el control de bucles anidados.
- **Go no tiene `while`,** pero puedes lograr lo mismo con un `for`.

Con estos conceptos, puedes dominar el control de bucles en Go de manera eficiente y escribir código más limpio y legible.
