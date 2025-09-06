#  Evidencia de Conversión del Proyecto Campuslands a Express

Este documento presenta la **conversión del proyecto de Campuslands** a una aplicación con **Express**, donde cada comando o función ahora es un **endpoint REST**.

Cada endpoint se encuentra documentado con:
- Verbo HTTP  
- URL  
- Body (si aplica)  
- Parámetros (`req`)  
- Respuesta (`res`)  
- Funcionalidad  

---

## 1.  Coordinadores (`coordinator.js`)

###  Crear Coordinador
- **Verbo:** `POST`  
- **URL:** `/api/coordinators`  
- **Body (JSON):**
```json
{
  "id": "COO01",
  "nombre": "Consuelo",
  "email": "consuelo@campus.com"
}
```
- **req:** recibe datos desde `req.body`  
- **res:** devuelve objeto creado con confirmación  
-  **Funcionalidad:** Registrar un nuevo coordinador en el sistema.



###  Listar Coordinadores
- **Verbo:** `GET`  
- **URL:** `/api/coordinators`  
- **Body:** N/A  
- **req:** no recibe parámetros  
- **res:** devuelve un array con todos los coordinadores  
-  **Funcionalidad:** Consultar todos los coordinadores registrados.



###  Editar Coordinador
- **Verbo:** `PUT`  
- **URL:** `/api/coordinators/:id`  
- **Body (JSON):**
```json
{
  "email": "nuevo_correo@campus.com"
}
```
- **req:** usa `req.params.id` para identificar el coordinador y `req.body` con los datos a modificar  
- **res:** devuelve confirmación con datos actualizados  
-  **Funcionalidad:** Actualizar datos de un coordinador existente.



###  Eliminar Coordinador
- **Verbo:** `DELETE`  
- **URL:** `/api/coordinators/:id`  
- **Body:** N/A  
- **req:** usa `req.params.id`  
- **res:** confirmación de eliminación  
-  **Funcionalidad:** Eliminar un coordinador del sistema.



## 2.  Menús (`menus.js`)

###  Ver Menús
- **Verbo:** `GET`  
- **URL:** `/api/menus`  
- **Body:** N/A  
- **req:** no recibe parámetros  
- **res:** listado de menús disponibles  
- **Funcionalidad:** Consultar las opciones de menú.


## 3.  Reportes (`reports.js`)

###  Generar Reporte General
- **Verbo:** `GET`  
- **URL:** `/api/reports/general`  
- **Body:** N/A  
- **req:** puede usar `req.query` para filtros opcionales (ejemplo: fecha, rango, categoría)  
- **res:** devuelve reporte consolidado  
-  **Funcionalidad:** Generar un reporte general del sistema.



###  Generar Reporte por ID
- **Verbo:** `GET`  
- **URL:** `/api/reports/:id`  
- **Body:** N/A  
- **req:** usa `req.params.id`  
- **res:** devuelve reporte detallado del registro solicitado  
-  **Funcionalidad:** Consultar reporte individual.



## 4.  Servidor Principal (`index.js`)

- Levanta el servidor con **Express**.  
- Configura middlewares (`express.json()`).  
- Conecta las rutas de cada módulo:  
  - `/api/coordinators`  
  - `/api/menus`  
  - `/api/reports`  
- **req:** solicitudes entrantes  
- **res:** respuestas de cada módulo  
-  **Funcionalidad:** Punto de entrada de la aplicación Express.



#  Conclusión

La conversión del proyecto a **Express** permite que:
- Cada comando/función original ahora sea un **endpoint REST**.  
- Toda la interacción se realice con **req/res en JSON**.  
- El sistema pueda ser consumido desde cualquier **frontend o cliente externo**.  

