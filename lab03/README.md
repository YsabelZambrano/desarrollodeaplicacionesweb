# Laboratorio 03: JavaScript (Backend)
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

* `pub/`: contiene los archivos publicos que se muestran en el navegador.
* `css/`: carpeta de estilos del proyecto.
* `style.css`: archivo que define el diseño visual de la pagina.
* `index.html`: pagina principal del laboratorio, donde se estructura el contenido que ve el usuario.
* `package.json`: archivo de configuracion del proyecto Node.js que incluye dependencias, scripts y metadatos.
* `package-lock.json`: archivo que asegura versiones exactas de las dependencias instaladas.
* `Dockerfile`: configuración para crear la imagen de Docker.
* `.dockerignore`: especifica los archivos que no se deben incluir en la imagen Docker.
* `.gitignore`: define los archivos y carpetas que Git debe ignorar.

---

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

http://localhost:8095
