# Proyecto Coderhouse

Este repositorio contiene el proyecto presentado para el curso de Next.js en Coderhouse.

## Resumen del Proyecto

Este proyecto es una aplicación web con temática espacial diseñada para demostrar los conceptos aprendidos durante el curso.

La aplicación incluye:

- **Sección de Blog**: Presenta artículos sobre cuerpos celestes. Esta sección demuestra cómo los componentes renderizados en el servidor, especialmente aquellos con poca o ninguna interacción del usuario (como leer artículos), pueden renderizarse más rápido.

- **Sección de Tienda de Productos**: Muestra el enrutamiento dinámico y los componentes interactivos diseñados para uso en el lado del cliente.

- **Sección Administrativa**: Esta sección está protegida por autenticación y utiliza el concepto de Rutas Paralelas. Dependiendo del estado de autenticación del usuario, se renderizará un formulario de inicio de sesión o el panel administrativo.


## Notas Adicionales

- **Internacionalización**: La aplicación admite varios idiomas, implementados según la documentación oficial de Next.js: [Enrutamiento Internacionalizado de Next.js](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

- Dependiendo de la configuración de idioma del navegador, la aplicación comenzará en la ruta `/es/` o `/en/` (predeterminado).

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Inicia el servidor de desarrollo con `npm run dev`

Visita `http://localhost:3000` en tu navegador para ver la aplicación en acción.

---

# Coderhouse Project

This repository contains the project submission for the Next.js course at Coderhouse.

## Project Overview

This project is a space-themed web application designed to demonstrate the concepts learned during the course.

The application includes:

- **Blog Section**: Features articles about celestial bodies. This section demonstrates how server-side rendered components, especially those with little to no user interaction (like reading articles), can render faster.

- **Product Store Section**: Showcases dynamic routing and interactive components designed for client-side usage.

- **Admin Section**: This section is protected by authentication and uses the concept of Parallel Routes. Depending on the user's authentication status, a login form or the admin panel will be rendered.

## Additional Notes

- **Internationalization**: The application supports multiple languages, implemented based on the official Next.js documentation: [Next.js Internationalized Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

- Depending on the browser's language setting, the application will start at either the `/es/` or `/en/` route (default).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`

Visit `http://localhost:3000` in your browser to see the application in action.