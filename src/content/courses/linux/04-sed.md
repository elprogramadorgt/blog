---
title: 04 Comando SED (Stream Editor)
description: "El comando SED (Stream Editor) es una herramienta potente y versátil en Linux para procesar y modificar texto en archivos, streams o directamente desde la terminal. Es una herramienta esencial para administradores de sistemas, programadores y entusiastas de Linux que buscan automatizar y simplificar tareas relacionadas con la manipulación de texto."
date: "2023-04-08T00:00:00"
url: "/courses/linux/"
tags:
  - Linux
  - Archivos
published: true
---

El comando **SED (Stream Editor)** es una herramienta potente y versátil en Linux para procesar y modificar texto en archivos, streams o directamente desde la terminal. Es una herramienta esencial para administradores de sistemas, programadores y entusiastas de Linux que buscan automatizar y simplificar tareas relacionadas con la manipulación de texto.

## **1. Sintaxis Básica**

La estructura general del comando SED es:

```bash
bash
Copy code
sed [opciones] 'script' archivo

```

- **`opciones`**: Ajustan el comportamiento del comando, como `i` para modificar archivos directamente.
- **`script`**: Define la acción que queremos realizar (por ejemplo, buscar, reemplazar, eliminar, insertar).
- **`archivo`**: El archivo o entrada que será procesado.

## **2. Reemplazo de Texto**

### **Reemplazar Todas las Ocurrencias**

Para reemplazar todas las ocurrencias de una palabra en un archivo:

```bash
bash
Copy code
sed 's/Linux/Debian/' linux_text.txt

```

Esto reemplazará la palabra **Linux** por **Debian** y mostrará el resultado en la terminal.

### **Guardar los Cambios en el Archivo**

Para aplicar los cambios directamente al archivo, usamos la opción `-i`:

```bash
bash
Copy code
sed -i 's/Linux/Debian/' linux_text.txt

```

### **Reemplazar Solo una Aparición Específica**

Podemos reemplazar solo la primera, segunda o n-ésima aparición de una palabra:

- **Primera aparición**:

  ```bash
  bash
  Copy code
  sed 's/Linux/Debian/1' linux_text.txt

  ```

- **Segunda aparición**:

  ```bash
  bash
  Copy code
  sed 's/Linux/Debian/2' linux_text.txt

  ```

### **Reemplazo Insensible a Mayúsculas/Minúsculas**

Para ignorar mayúsculas y minúsculas, usamos la opción `I` al final del comando:

```bash
bash
Copy code
sed 's/linux/Debian/I' linux_text.txt

```

## **3. Eliminar Líneas**

### **Eliminar Líneas que Contienen una Palabra Específica**

Para eliminar todas las líneas que contienen una palabra específica:

```bash
bash
Copy code
sed '/code/d' linux_text.txt

```

### **Eliminar una Línea Específica**

Si queremos eliminar una línea en particular (por número):

```bash
bash
Copy code
sed '2d' linux_text.txt

```

### **Eliminar un Rango de Líneas**

Para eliminar un rango de líneas, usamos la siguiente sintaxis:

```bash
bash
Copy code
sed '2,4d' linux_text.txt

```

Esto eliminará las líneas 2 a 4.

## **4. Insertar Texto**

### **Insertar Texto Antes de una Línea Específica**

Para insertar una línea antes de una línea específica:

```bash
bash
Copy code
sed '2i\Este es un texto insertado' linux_text.txt

```

La línea indicada (en este caso, la línea 2) se desplazará hacia abajo, y el texto se insertará antes de ella.

## **5. Agregar Texto**

### **Agregar Texto Después de una Línea Específica**

El comando `a` (append) permite agregar texto después de una línea específica:

```bash
bash
Copy code
sed '2a\Esta línea ha sido agregada' linux_text.txt

```

> Nota: Aunque se espera que el texto se agregue al final de la línea indicada, dependiendo del formato del archivo, puede aparecer en una línea nueva justo debajo.

## **6. Opciones Avanzadas**

### **Reemplazo Global**

Para asegurarnos de que todas las ocurrencias en cada línea sean reemplazadas (no solo la primera):

```bash
bash
Copy code
sed 's/Linux/Debian/g' linux_text.txt

```

### **Combinar Comandos**

Podemos realizar varias operaciones en una sola ejecución separándolas por punto y coma `;`:

```bash
bash
Copy code
sed -i 's/Linux/Debian/g; /code/d' linux_text.txt

```

Esto reemplaza todas las ocurrencias de **Linux** por **Debian** y elimina líneas que contienen la palabra **code**.

### **Uso de Wildcards**

SED admite **expresiones regulares** para realizar búsquedas avanzadas:

- **Reemplazar palabras que empiezan con una letra específica**:

  ```bash
  bash
  Copy code
  sed 's/\bL[a-zA-Z]*\b/Debian/' linux_text.txt

  ```

## **7. Procesar Streams y Pipes**

SED también puede manipular texto directamente desde un stream:

```bash
bash
Copy code
cat linux_text.txt | sed 's/Linux/Debian/g'

```

O con comandos más complejos:

```bash
bash
Copy code
grep 'Linux' linux_text.txt | sed 's/Linux/Debian/'

```

## **8. Ejercicios Prácticos**

### **Buscar y Reemplazar con Grep y SED**

Encuentra líneas que contienen una palabra y reemplaza solo esas líneas:

```bash
bash
Copy code
grep 'Linux' linux_text.txt | sed 's/Linux/Debian/'

```

### **Editar Rango de Líneas**

Cambiar el texto en un rango específico de líneas:

```bash
bash
Copy code
sed '5,10s/Linux/Debian/g' linux_text.txt

```

### **Conclusión**

SED es una herramienta fundamental para cualquier usuario de Linux que trabaje con manipulación de texto o automatización. Su capacidad para buscar, reemplazar, eliminar, e insertar texto lo hace ideal para manejar grandes volúmenes de datos. Practica con los comandos básicos y avanza a combinaciones complejas para maximizar su potencial. 🚀
