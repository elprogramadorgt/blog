---
title: 08 Funciones en Go
description: "Las funciones son bloques de código que realizan tareas específicas y son fundamentales para estructurar, reutilizar y simplificar nuestro programa. En Go, las funciones son extremadamente flexibles y ofrecen características únicas, como la posibilidad de retornar múltiples valores."
date: "2023-04-24T00:00:00"
url: "/courses/go/"
tags:
  - Go
  - Programming
  - Functions
published: true
---

Las **funciones** son bloques de código que realizan tareas específicas y son fundamentales para estructurar, reutilizar y simplificar nuestro programa. En Go, las funciones son extremadamente flexibles y ofrecen características únicas, como la posibilidad de retornar múltiples valores.

## **1. ¿Qué es una Función?**

Una función es un bloque de código que se utiliza para:

- Ejecutar una tarea específica.
- Reutilizar código.
- Descomponer problemas complejos en partes más manejables.

La función `main`, que hemos usado desde el principio, es un ejemplo básico de función, pero ahora exploraremos cómo definir y usar funciones personalizadas.

## **2. Definición de Funciones**

### **Sintaxis básica:**

```go

func nombreFuncion(parametros) tipoRetorno {
    // Código
}

```

### **Ejemplo:**

```go

func greeting(name string) {
    fmt.Printf("Hola, %s\n", name)
}

```

En este caso:

- `func`: Palabra clave para definir la función.
- `greeting`: Nombre de la función.
- `(name string)`: Parámetro llamado `name` de tipo `string`.
- `{ ... }`: Bloque de código que realiza la tarea.

## **3. Funciones con Múltiples Parámetros**

Puedes agregar varios parámetros separados por comas. Todos los parámetros deben especificar su tipo.

### **Ejemplo:**

```go

func greeting(name string, lastname string, age int) {
    fmt.Printf("Hola %s %s, tienes %d años\n", name, lastname, age)
}

```

## **4. Paso de Parámetros por Valor y Referencia**

En Go, los parámetros se pasan:

- **Por valor (by value):** Se crea una copia del valor y los cambios no afectan la variable original.
- **Por referencia (by pointer):** Se pasa la dirección de la variable, y los cambios afectan la variable original.

### **Paso por Valor:**

```go

func swap(v1 int, v2 int) {
    v1, v2 = v2, v1
}

func main() {
    a, b := 5, 9
    swap(a, b)
    fmt.Println(a, b) // Imprime: 5 9 (no cambian)
}

```

### **Paso por Referencia:**

Para usar referencias, debes usar **punteros** (`*`) y el operador de dirección (`&`).

```go

func swap(v1 *int, v2 *int) {
    *v1, *v2 = *v2, *v1
}

func main() {
    a, b := 5, 9
    swap(&a, &b)
    fmt.Println(a, b) // Imprime: 9 5 (se intercambian)
}

```

---

## **5. Valores de Retorno**

Las funciones en Go pueden devolver valores, lo que las hace más útiles y versátiles.

### **Retorno Simple:**

```go

func addNum(num1 int, num2 int) int {
    return num1 + num2
}

func main() {
    result := addNum(3, 7)
    fmt.Println(result) // Imprime: 10
}

```

### **Retorno de Múltiples Valores:**

Go permite retornar múltiples valores. Esto es útil para devolver un resultado y un posible error, por ejemplo.

```go

func divide(num1, num2 int) (int, error) {
    if num2 == 0 {
        return 0, fmt.Errorf("no se puede dividir por cero")
    }
    return num1 / num2, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Resultado:", result) // Imprime: Resultado: 5
    }
}

```

### **Retorno con Nombres de Variables:**

Puedes asignar nombres a los valores de retorno directamente en la definición de la función.

```go

func addNum(num1 int, num2 int) (sum int) {
    sum = num1 + num2
    return // No necesitas especificar `sum`
}

```

---

## **6. Funciones Variádicas**

Una función **variádica** puede recibir un número indefinido de argumentos del mismo tipo. Esto permite que el código sea más dinámico y reutilizable.

### **Definición:**

La sintaxis para una función variádica incluye `...` antes del tipo del argumento.

```go

func nombreFuncion(parametrosFijos, args ...tipo) tipoRetorno {
    // Código
}

```

### **Ejemplo:**

```go

func addNums(total int, nums ...int) int {
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(addNums(10, 1, 2, 3)) // Imprime: 16
}

```

### **Notas:**

1. **Solo un argumento variádico:** Una función no puede tener más de un argumento variádico.
2. **Debe ser el último:** El argumento variádico debe ser el último en la lista de parámetros.

```go

// Esto genera un error
func invalid(nums ...int, extras ...string) {}

// Esto es válido
func valid(name string, nums ...int) {}

```

### **Conversión de Slices a Argumentos Variádicos:**

Si tienes un `slice` y necesitas pasarlo a una función variádica, utiliza `...`.

```go

nums := []int{1, 2, 3}
fmt.Println(addNums(10, nums...)) // Imprime: 16

```

---

## **7. Funciones Anónimas y Closures**

Go soporta funciones anónimas, que son funciones sin nombre. Estas son útiles para tareas rápidas o cuando necesitas pasar una función como argumento.

### **Ejemplo:**

```go

func main() {
    double := func(x int) int {
        return x * 2
    }
    fmt.Println(double(4)) // Imprime: 8
}

```

### **Closures:**

Las funciones anónimas también pueden capturar variables del entorno.

```go

func main() {
    counter := 0
    increment := func() int {
        counter++
        return counter
    }
    fmt.Println(increment()) // Imprime: 1
    fmt.Println(increment()) // Imprime: 2
}

```

---

## **8. Buenas Prácticas**

1. **Nombres significativos:** Los nombres de funciones deben reflejar claramente su propósito.
2. **Evita funciones largas:** Divide tareas complejas en funciones más pequeñas.
3. **Utiliza punteros con cuidado:** Solo cuando sea necesario modificar variables originales.
4. **Maneja errores correctamente:** Aprovecha el retorno de múltiples valores para incluir errores.

---

## **Resumen**

- **Definición básica:** `func nombre(parámetros) tipoRetorno { ... }`.
- **Múltiples valores:** Usa `(tipo1, tipo2)` para retornar más de un valor.
- **Punteros:** Úsalos para modificar variables originales.
- **Funciones variádicas:** Permiten recibir un número variable de argumentos.
- **Retorno con nombres:** Simplifica funciones más complejas.

Las funciones son herramientas esenciales para cualquier programa en Go. Practica escribiendo funciones con diferentes configuraciones y casos de uso para dominarlas. 🚀
