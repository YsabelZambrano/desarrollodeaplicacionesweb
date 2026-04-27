# Laboratorio 02: JavaScript (Fronted)
## 1. Integrantes

| Autor                                | Porcentaje |
|--------------------------------------|------------|
| Deyci Andrea Camargo Ramos           | 100%       |
| Viviana Flobele Linares Taco         | 100%       |
| Ysabel Alejandra Zambrano Cruz       | 100%       |
| Suemy Alexandra Figueroa Laruta      | 100%       |

---

## 2. Entregables

| Entregable   | URL                                     |
|--------------|-----------------------------------------|
| Repositorio  | hhttps://github.com/YsabelZambrano/desarrollodeaplicacionesweb.git |
| Video        |      https://youtu.be/bmZmjsJE-Ek     |

---

## 3. Estructura del Proyecto

El repositorio está organizado de la siguiente manera:

* `Index.html`: Página principal del laboratorio.
* `*.css`: Archivos de estilos para cada ejercicio.
* `*.js`: Lógica de programación en JavaScript.
* `resources/`: Carpeta que contiene imágenes y otros activos.
* `Dockerfile`: Configuración para crear la imagen de Docker.
* `000-default.conf`: Configuración personalizada del servidor Apache.
* `jsDesarrollador`: Archivos .js para el desarrollador lo pueda observar.
* `jsDesarrollador`: Archivos .js ofuscados para que no sean visibles para los demás.

## 4. Decripcion del Laboratorio

* Implementar una agenda con Node.js y Express.
* Las actividades deben guardarse como archivos de Markdown.
* Utilizar Docker para desplegar el sitio web: '/lab03'.
* Automatizar el despliegue de la tarea mediante un Dockerfile y aplicar todas las recomendaciones para crear la imagen y el contenedor.

---

## 5. Desplegar contenedor
docker build . -t i_daw_8095

docker run -d -p 8095:3000 --name c_daw_8095 i_daw_8095

---

## 6. Acceso al sitio Web
http://localhost:8088
