# IndustrialSuite · Web corporativa

Sitio estático original y separado del producto privado. Marca: IndustrialSuite. Producto principal: ScadaSuite. No contiene código, capturas, certificados, binarios, proyectos, rutas de instalación o datos de la instalación industrial.

## Vista previa y comprobación

Con Node.js 22 o posterior, sin instalar dependencias:

```text
npm run check
npm run preview
```

Abrir http://127.0.0.1:5370/industrialsuite-web/. La vista previa escucha solo en loopback. No es el Server de ScadaSuite.

## Publicación autorizada

Repositorio independiente: BeboPuente/industrialsuite-web. URL prevista: https://bebopuente.github.io/industrialsuite-web/.

Para GitHub Free, Pages requiere repositorio público. Una vez creado y autorizado el repositorio, seleccionar Settings → Pages → Build and deployment → GitHub Actions. Restringir el entorno github-pages a main. El workflow comprueba enlaces/contenido y despliega únicamente dist; las PR solo validan. No utiliza PAT, claves o servicios externos. HTTPS debe mantenerse activado en Pages. Las rutas relativas permiten el subdirectorio del proyecto.

El conector IndustrialSuite_GIP disponible no ofrece creación de repositorios ni cambios administrativos de Pages. Esos pasos debe completarlos el titular; no se sustituye la conexión por Git local autenticado con otra cuenta. Conceder a IndustrialSuite_GIP acceso al nuevo repositorio para subir archivos. No tocar BeboPuente/IndustrialSuite.

## Datos pendientes y uso en Partner Center

No se han proporcionado ni autorizado nombre legal, datos identificativos, domicilio o correo profesional. Contacto y páginas legales lo indican expresamente. Antes de declarar el sitio completo ante Microsoft, completar con datos reales autorizados y revisar las políticas. Esta web no valida automáticamente una actividad empresarial ni acredita propiedad de un dominio de correo: el subdominio github.io no proporciona un buzón profesional propio.

La web no incluye formularios, analítica, cookies propias, almacenamiento local ni fuentes de terceros. GitHub puede tratar datos técnicos como proveedor de alojamiento; se enlaza su política. El contenido es informativo, sin contratación, pagos ni servicio SCADA alojado. Revisar las condiciones de Pages antes de ampliar ese alcance.

Las capacidades descritas no son una certificación de seguridad funcional ni una garantía de prestaciones. No se ofrecen descargas sin validar. No se inventan clientes, certificaciones, direcciones, correos o estadísticas.

## Mantenimiento

Editar dist para contenido/estilo y ejecutar la comprobación antes de subir. El workflow publica cambios aprobados de main. Para retirar el sitio, usar Settings → Pages → Unpublish; no eliminar repositorios ni datos del producto. Conservar la versión previa para revertir mediante un commit normal. Los cambios legales requieren aprobación del titular.
