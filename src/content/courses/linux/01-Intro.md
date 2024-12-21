---
title: 01 Conceptos, Términos y Comandos Básicos
description: "En esta lección, exploraremos los conceptos fundamentales de Linux, específicamente aplicados a Kali Linux, una distribución popular para pruebas de seguridad. Además, cubriremos comandos básicos que son esenciales para interactuar con el sistema operativo."
date: "2023-04-08T00:00:00"
url: "/courses/linux/"
tags:
  - Linux
published: true
---

En esta lección, exploraremos los conceptos fundamentales de Linux, específicamente aplicados a **Kali Linux**, una distribución popular para pruebas de seguridad. Además, cubriremos comandos básicos que son esenciales para interactuar con el sistema operativo.

## **1. Conceptos y Términos Clave**

### **Binarios**

- Archivos ejecutables, similares a los `.exe` en Windows.
- Contienen comandos como `cd`, `ls`, `ps`, y `cat`.
- Se encuentran típicamente en:
  - `/usr/bin`
  - `/usr/sbin`

### **Directorio (Directory)**

- Equivalente a una carpeta en Windows.
- Utilizado para organizar y almacenar archivos.

### **Root**

- Usuario con permisos de administrador, que puede realizar cualquier operación en el sistema.

### **Scripts**

- Archivos que contienen una serie de comandos para ejecutar tareas de manera automática.

### **Shell**

- Intérprete que permite interactuar con el sistema operativo a través de comandos.
- Ejemplos: Bash, Zsh, Fish.

## **2. Estructura del Sistema de Archivos en Linux**

Linux organiza sus archivos en una estructura jerárquica. A continuación, algunos directorios clave:

### **/root**

- Directorio home del usuario root.

### **/etc**

- Contiene archivos de configuración del sistema y de aplicaciones como Apache, MySQL, etc.

### **/home**

- Almacena los directorios home de cada usuario, proporcionando un espacio privado para almacenar documentos, imágenes, música, y configuraciones personales.

### **/mnt**

- Utilizado para montar sistemas de archivos temporalmente. Solo accesible por el administrador del sistema.

### **/media**

- Similar a `/mnt`, pero diseñado para montar dispositivos portátiles y extraíbles. Es accesible para los usuarios normales.

### **/bin**

- Contiene binarios básicos necesarios para el sistema operativo, como ejecutables de comandos (`ls`, `cd`, etc.).

### **/lib**

- Almacena bibliotecas esenciales compartidas (`.so` files), similares a las DLLs en Windows.

## **3. Comandos Básicos en Linux**

### **`pwd` (Print Working Directory)**

- Muestra el directorio actual.
- Útil para orientarse dentro de la estructura de archivos.

```bash

pwd

```

### **`whoami`**

- Muestra el nombre del usuario actual.
- Importante antes de realizar acciones sensibles, como cambios en archivos del sistema.

```bash

whoami

```

### **`cd` (Change Directory)**

- Navega por el sistema de archivos.
- Uso básico:

  ```bash

  cd /path/to/directory

  ```

- Regresar al directorio anterior:

  ```bash

  cd ..

  ```

- Regresar varios niveles:

  ```bash

  cd ../../

  ```

### **`ls` (List)**

- Lista el contenido del directorio actual.
- Opciones comunes:

  - `l`: Muestra detalles como permisos, propietario, tamaño, y fecha.
  - `a`: Muestra archivos ocultos.
  - Combinación:

    ```bash

    ls -la

    ```

### **Ejemplo con `ls`:**

```bash

ls /etc
ls -l /home
ls -la

```

### **Resumen**

1. **Conceptos Clave:**
   - Los binarios son ejecutables almacenados en directorios como `/usr/bin`.
   - El usuario `root` tiene permisos administrativos.
   - Los scripts son una forma de automatizar tareas repetitivas.
2. **Estructura del Sistema de Archivos:**
   - Directorios clave como `/root`, `/etc`, `/home`, y `/bin`.
3. **Comandos Básicos:**
   - `pwd`: Ubicación actual.
   - `whoami`: Usuario actual.
   - `cd`: Navegación entre directorios.
   - `ls`: Lista contenido del sistema de archivos con opciones útiles.

Estos conceptos y comandos forman la base para trabajar con **Kali Linux** o cualquier distribución de Linux. Practicar estas operaciones te ayudará a moverte con fluidez en el sistema y sentar las bases para tareas más avanzadas. 🚀
