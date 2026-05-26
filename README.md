# aeroplano-poo-docker
Tarea POO
# ✈️ Proyecto Aeroplano – POO y Docker

## 📌 Descripción

Este proyecto fue desarrollado utilizando Programación Orientada a Objetos (POO), TypeScript, Express y Docker.

La aplicación implementa un sistema de gestión de aeroplanos mediante un CRUD (Create, Read, Update y Delete) y utiliza asociaciones entre clases aplicando conceptos de composición y agregación.

Además, el proyecto cuenta con:

* Backend dockerizado
* Frontend dockerizado
* Repositorio en GitHub
* Comunicación Front ↔ Back mediante API REST

---

# 🛠 Tecnologías utilizadas

### Backend

* Node.js
* Express
* TypeScript

### Frontend

* HTML
* JavaScript

### Contenedores

* Docker

### Control de versiones

* Git
* GitHub

---

# 📂 Estructura del proyecto

```txt
aeroplano-poo-docker
│
├── backend
│   ├── src
│   │   ├── models
│   │   │   ├── agregacion
│   │   │   │   ├── Piloto.ts
│   │   │   │   ├── Aeropuerto.ts
│   │   │   │   └── CompaniaAerea.ts
│   │   │   │
│   │   │   ├── composicion
│   │   │   │   ├── Motor.ts
│   │   │   │   └── Ala.ts
│   │   │   │
│   │   │   └── Aeroplano.ts
│   │   │
│   │   └── server.ts
│   │
│   ├── Dockerfile
│   └── package.json
│
├── frontend
│   ├── index.html
│   └── Dockerfile
│
└── README.md
```

---

# 🧩 Relaciones POO implementadas

## Composición

La composición representa una relación fuerte entre objetos donde una clase depende de otra para existir.

Se implementó mediante:

* Motor
* Ala

Ejemplo:

Un aeroplano posee motores y alas como partes fundamentales de su estructura.

---

## Agregación

La agregación representa una relación más flexible donde los objetos pueden existir de forma independiente.

Se implementó mediante:

* Piloto
* Aeropuerto
* CompaniaAerea

Ejemplo:

Un piloto o un aeropuerto pueden existir aunque el aeroplano no exista.

---

# 🚀 CRUD implementado

Métodos disponibles:

| Método | Endpoint        | Acción               |
| ------ | --------------- | -------------------- |
| GET    | /aeroplanos     | Listar aeroplanos    |
| POST   | /aeroplanos     | Crear aeroplano      |
| PUT    | /aeroplanos/:id | Actualizar aeroplano |
| DELETE | /aeroplanos/:id | Eliminar aeroplano   |

---

# 🐳 Docker

## Backend

Construcción:

```bash
docker build -t aeroplano-backend .
```

Ejecución:

```bash
docker run -p 3001:3000 aeroplano-backend
```

Acceso:

```txt
http://localhost:3001/aeroplanos
```

## Frontend

Construcción:

```bash
docker build -t aeroplano-frontend .
```

Ejecución:

```bash
docker run -p 8080:80 aeroplano-frontend
```

Acceso:

```txt
http://localhost:8080
```

---

# ❓Respuesta actividad práctica

## ¿Cuál es la diferencia en tiempo de ejecución entre composición y agregación?

La diferencia en tiempo de ejecución entre composición y agregación generalmente es mínima y depende de la implementación utilizada.

La composición implica que los objetos internos dependen directamente del objeto principal y suelen crearse o destruirse junto con él.

La agregación mantiene relaciones entre objetos independientes y reutiliza referencias existentes.

La diferencia principal no es el rendimiento sino el diseño del software, ya que la composición representa una relación fuerte de pertenencia y la agregación una relación más flexible.

---

# 👨‍💻 Autor

Federico Montoro
GitHub: https://github.com/Frederick1824
