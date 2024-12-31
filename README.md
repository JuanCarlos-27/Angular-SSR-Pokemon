# Pokemon App

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.6.

## Descripción

Esta es una aplicación Angular 19 diseñada con fines didácticos, utilizando Server Side Rendering (SSR). La aplicación muestra una lista de Pokemones y permite ver los detalles de cada uno de ellos.

Se ha implementado `NgOptimizedImage` para optimizar la carga de imágenes de los Pokemones. Además, se han utilizado características como Signals y técnicas de SEO para mejorar la indexación de la aplicación.

También se ha creado un pequeño sistema de paginación para facilitar la navegación a través de la lista de Pokemones.

La aplicación también utiliza las ViewTransitions API nativas para mejorar la experiencia de usuario con transiciones suaves entre vistas.

## Tecnologías Utilizadas

### Tailwind CSS

Utiliza [Tailwind CSS](https://tailwindcss.com/) para el diseño de la interfaz :) y un diseño responsivo.

### PokeAPI

Los datos de los Pokemones provienen de [PokeAPI](https://pokeapi.co/), una API RESTful gratuita. Más información en la [documentación oficial](https://pokeapi.co/docs/v2).

## Captura de Pantalla

![image](https://github.com/user-attachments/assets/aefaf8d4-56df-4416-8732-1a9ca19bd077)

![image](https://github.com/user-attachments/assets/ddd17e38-c514-43f6-b7fe-4bf7085f4471)

## Servidor de Desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.
