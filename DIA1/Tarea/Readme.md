# CampuWork

Bienvenido a **CampuWork**, una API desarrollada en Node.js y Express para la gestión de trabajos y usuarios en un entorno universitario.

## Índice

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Rutas de la API](#rutas-de-la-api)
- [Pruebas con Insomnia/Postman](#pruebas-con-insomniapostman)
- [Notas](#notas)

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/CampuWork.git
   ```

2. **Entra en la carpeta del proyecto:**
   ```bash
   cd /DIA1/Tarea
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Crea un archivo `.env` en la raíz del proyecto** y agrega lo siguiente:
   ```
   URI=mongodb+srv://Thomas:OMB149WII1llS7pk@cluster0.j6ntzmh.mongodb.net/
   DB_NAME=Campuslands
   ```

---

## Para iniciar el server

Para iniciar el servidor en modo desarrollo:

```bash
node app.js
```

El servidor se ejecutará por defecto en `http://localhost:3000` (puedes cambiar el puerto en el archivo de configuración si es necesario).

---

## Rutas de la API

A continuación, se describen las rutas principales que puedes probar con Insomnia o Postman:

### Usuarios

- **GET** `/usuarios`  
  Obtiene la lista de usuarios.

- **POST** `/usuarios`  
  Crea un nuevo usuario.  
  **Body (JSON):**
  ```json
  {
    "nombre": "Juan",
    "correo": "juan@ejemplo.com"
  }
  ```

- **GET** `/usuarios/:id`  
  Obtiene la información de un usuario por ID.

### Trabajos

- **GET** `/trabajos`  
  Lista todos los trabajos.

- **POST** `/trabajos`  
  Crea un nuevo trabajo.  
  **Body (JSON):**
  ```json
  {
    "titulo": "Desarrollador Web",
    "descripcion": "Trabajo de desarrollo web para estudiantes"
  }
  ```

- **GET** `/trabajos/:id`  
  Obtiene la información de un trabajo por ID.

---

### Trainers

- **GET** `/trainers`  
  Obtiene la lista de trainers.

- **GET** `/trainers/:id`  
  Obtiene la información de un trainer por ID.

- **POST** `/trainers`  
  Crea un nuevo trainer.

- **PUT** `/trainers/:id`  
  Actualiza la información de un trainer por ID.

- **DELETE** `/trainers/:id`  
  Elimina un trainer por ID.

### Campers

- **GET** `/campers`  
  Obtiene la lista de campers.

- **GET** `/campers/:id`  
  Obtiene la información de un camper por ID.

- **POST** `/campers`  
  Crea un nuevo camper.

- **PUT** `/campers/:id`  
  Actualiza la información de un camper por ID.

- **DELETE** `/campers/:id`  
  Elimina un camper por ID.

---

## Pruebas con Insomnia/Postman

1. Abre Insomnia o Postman.
2. Crea una nueva colección llamada `CampuWork`.
3. Agrega las rutas mencionadas arriba usando el método correspondiente (GET, POST, PUT o DELETE).
4. Para las rutas POST y PUT, asegúrate de seleccionar el tipo de cuerpo `JSON` y coloca el ejemplo proporcionado.
5. Envía la petición y revisa la respuesta del servidor.

---

## Notas

- Es obligatorio crear el archivo `.env` con las variables de conexión a la base de datos antes de ejecutar el proyecto.
- Si tienes dudas sobre nuevas rutas, revisa el código fuente o contacta al desarrollador.
- ¡Contribuciones y sugerencias son bienvenidas!

---