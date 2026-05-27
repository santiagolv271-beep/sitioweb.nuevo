# Política de Seguridad — Hugo López y Hnos. S.A.

## Sitio web oficial

Este repositorio contiene el sitio web estático de Hugo López y Hnos. S.A.

---

## Protecciones implementadas

### En el código del sitio
- **Content Security Policy (CSP):** restringe de dónde se pueden cargar scripts, estilos e imágenes
- **X-Content-Type-Options: nosniff:** evita que el navegador interprete archivos como un tipo diferente al declarado
- **Referrer-Policy strict-origin:** controla la información que se comparte al navegar a otros sitios
- **Sin dependencias externas de JavaScript:** no se usa ninguna librería de terceros (sin jQuery, sin CDN de scripts)
- **Formulario de contacto:** los datos se envían cifrados por HTTPS a través de formsubmit.co

### En GitHub
- Secret scanning activo (detecta tokens o claves que se suban por error)
- Security advisories habilitados

---

## Cómo reportar una vulnerabilidad

Si encontrás un problema de seguridad en este sitio, escribinos a:

**info@hugolopezyhnos.com**

Describí:
1. Qué encontraste
2. Cómo reproducirlo
3. Qué impacto podría tener

Respondemos dentro de las 48 horas hábiles.

---

## Buenas prácticas para mantener el sitio seguro

- **No subir archivos `.env`** ni ningún archivo con contraseñas o claves API
- **No publicar tokens de acceso** a GitHub, servicios externos ni APIs
- **Revisar el código** antes de cada commit si se agregaron datos sensibles
- **Mantener actualizado** el repositorio y revisar las alertas de Dependabot

---

## Alcance

Este repositorio es un sitio web estático (HTML/CSS/JS). No tiene:
- Backend ni servidor de aplicaciones
- Base de datos
- Sistema de login ni datos de usuarios
- Procesamiento de pagos

La superficie de ataque es mínima por diseño.
