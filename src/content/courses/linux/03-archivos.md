---
title: 03 Manipulación de archivos
description: "En esta lección, aprenderemos cómo modificar y manipular archivos y directorios en Linux utilizando comandos clave. Estos comandos no solo son útiles para tareas básicas, sino también para trabajos avanzados en administración de sistemas y ciberseguridad."
date: "2023-04-08T00:00:00"
url: "/courses/linux/"
tags:
  - Linux
  - Archivos
published: true
---

En esta lección, aprenderemos cómo modificar y manipular archivos y directorios en Linux utilizando comandos clave. Estos comandos no solo son útiles para tareas básicas, sino también para trabajos avanzados en administración de sistemas y ciberseguridad.

## **1. Crear y Modificar Archivos**

### **`cat` para Crear Archivos**

El comando `cat` puede utilizarse para crear archivos con contenido.

- **Crear un Archivo Nuevo:**

  ```bash

  cat > miprimerarchivo.txt

  ```

  Luego de presionar Enter, ingresas al **modo interactivo**, donde puedes escribir el contenido. Para salir, presiona `Ctrl + D`.

- **Agregar Contenido a un Archivo Existente:**

  ```bash

  cat >> miprimerarchivo.txt

  ```

  Escribe el contenido adicional y presiona `Ctrl + D`.

- **Cuidado con Sobrescribir:**
  Si usas un solo `>` en lugar de `>>`, el archivo existente será sobrescrito.

### **`touch`: Crear y Modificar Metadatos**

El comando `touch` es muy versátil y se utiliza para crear archivos o modificar metadatos como fechas de acceso y modificación.

- **Crear un Archivo Vacío:**

  ```bash

  touch demo.txt

  ```

- **Cambiar la Fecha de Acceso:**

  ```bash

  touch -a demo.txt

  ```

- **Cambiar la Fecha de Modificación:**

  ```bash

  touch -m demo.txt

  ```

- **Establecer una Fecha Específica:**

  ```bash

  touch -d "2023-12-01" demo.txt

  ```

- **Copiar Tiempos de Otro Archivo:**

  ```bash

  touch -r archivo_referencia.txt demo.txt

  ```

## **2. Crear y Gestionar Directorios**

### **`mkdir`: Crear Directorios**

- **Crear un Directorio:**

  ```bash

  mkdir mi_carpeta

  ```

- **Crear Directorios Anidados:**

  ```bash

  mkdir -p ruta/nueva/carpeta

  ```

## **3. Copiar, Renombrar y Mover Archivos**

### **`cp`: Copiar Archivos**

- **Copiar un Archivo:**

  ```bash

  cp archivo_origen.txt archivo_destino.txt

  ```

- **Copiar Directorios Recursivamente:**

  ```bash

  cp -r carpeta_origen carpeta_destino

  ```

### **`mv`: Mover o Renombrar Archivos**

- **Renombrar un Archivo:**

  ```bash

  mv archivo.txt nuevo_nombre.txt

  ```

- **Mover un Archivo a Otro Directorio:**

  ```bash

  mv archivo.txt /ruta/nueva/

  ```

### **`rm`: Eliminar Archivos**

- **Eliminar un Archivo:**

  ```bash

  rm archivo.txt

  ```

- **Eliminar Directorios y Contenidos:**

  ```bash

  rm -r carpeta

  ```

- **Cuidado con `rm -r`:** Asegúrate de no eliminar archivos importantes accidentalmente.

## **4. Leer Archivos de Forma Eficiente**

### **`head`: Mostrar las Primeras Líneas**

- **Mostrar las Primeras 10 Líneas:**

  ```bash

  head archivo.txt

  ```

- **Especificar el Número de Líneas:**

  ```bash

  head -n 20 archivo.txt

  ```

- **Leer los Primeros Bytes:**

  ```bash

  head -c 50 archivo.txt

  ```

### **`tail`: Mostrar las Últimas Líneas**

- **Mostrar las Últimas 10 Líneas:**

  ```bash

  tail archivo.txt

  ```

- **Seguir un Archivo en Tiempo Real:**

  ```bash

  tail -f archivo.log

  ```

### **`nl`: Mostrar el Número de Líneas**

- **Número de Todas las Líneas:**

  ```bash

  nl archivo.txt

  ```

- **Número de Líneas No Vacías:**

  ```bash

  nl -b t archivo.txt

  ```

## **5. Búsqueda y Filtrado en Archivos**

### **`grep`: Filtrar Contenido**

- **Buscar Palabras Clave:**

  ```bash

  grep "palabra" archivo.txt

  ```

- **Ignorar Mayúsculas/Minúsculas:**

  ```bash

  grep -i "palabra" archivo.txt

  ```

- **Buscar Recursivamente en Directorios:**

  ```bash

  grep -r "palabra" carpeta/

  ```

### **Combinar Comandos con `grep` y `pipe`:**

- **Buscar Configuraciones Específicas:**

  ```bash

  nl apache2.conf | grep /var/www

  ```

## **6. Ejemplo Completo: Buscar y Extraer Configuraciones**

1. **Encuentra la Línea con la Configuración Deseada:**

   ```bash

   nl apache2.conf | grep /var/www

   ```

2. **Imprime el Contenido Desde esa Línea:**

   ```bash

   tail -n+170 apache2.conf

   ```

3. **Extrae las Siguientes 10 Líneas:**

   ```bash

   tail -n+170 apache2.conf | head -n 10

   ```

### **Conclusión**

Estos comandos son fundamentales para manejar archivos y directorios en Linux de manera eficiente. Desde tareas simples como crear y renombrar archivos hasta búsquedas avanzadas y manipulación de contenido, dominar estas herramientas hará que tu flujo de trabajo sea más rápido y efectivo. ¡Practica y experimenta para sacarle el máximo provecho! 🚀
