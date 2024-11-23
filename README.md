# Prueba técnica

El objetivo de esta prueba es conocer un poco mejor cómo trabajas, las buenas prácticas que sigues y tu atención por el
detalle. Valoraremos la sencillez, facilidad para entender el código y la robustez. 
Aspectos que nos facilitan aseguar la calidad, revisar, modificar y mantener el código.  

Para realizar el ejercicio te proporcionaremos un proyecto vacío creado con CRA y un diseño realizado con Adobe XD para
que puedas obtener los materiales necesarios de forma cómoda:

https://xd.adobe.com/view/2119e5a1-31d4-42e2-5edd-4e565781bb65-5728/flow/

Una vez implementado tendrás que ponernos un Pull Request para que podamos preguntarte por tu código o sugerir alguna
mejora. De esta manera nos podremos conocer un poco mejor, ya que las revisiones de código forman parte de nuestro día a
día :)

Te sugerimos que empieces implementando la mecánica básica del ejercicio y posteriormente añadas los detalles y mejoras
que consideres, de esta manera tendrás algo revisable aunque se te acabe el tiempo.
 

## Descripción del ejercicio

Se trata de implementar un juego clásico; el memory. La mecánica es bastante sencilla:

Al empezar la partida tienes una parrilla de tarjetas vistas del reverso. Las tarjetas contienen una serie de parejas de
imágenes que se colocan de forma aleatoria en cada tirada. Puedes descubrir dos tarjetas a la vez:

* Si las tarjetas son iguales se quedan descubiertas.
* Si las tarjetas son distintas se vuelven a poner del reverso para
que sigas buscando parejas. 
* El juego termina cuando hayas revelado todas las parejas.

## Pasos para preparar el entorno para realizar la prueba

1) Es necesario tener instalado node >= 10 y yarn.
2) Clonas este repo
3) Ejecutas "yarn" en la carpeta del proyecto
4) Ejecutas "yarn start" para comenzar a desarrollar en http://localhost:3000


## Consideraciones y decisiones en el desarrollo:

### ¿Por qué ViteJS sobre CRA?
  - El [proyecto original](https://github.com/iseazy/iseazy-frontend/) necesita una actualización de dependencias y una versión de node que no está cerca de la última estable. 
  - [ViteJS](https://vite.dev/) es un empaquetador bastante más ligero y rápido, con un esqueleto de funciones bastante más escueto que, bajo mi punto de vista, es adecuado para configurar lo que realmente se precise. 
  - En este caso, hemos optado por una plantilla de Vite que añadía muchas de las cosas que hemos empleado (React, typescript, test (vitest en lugar de Jest aunque está basado en éste), tailwind y algunas configuraciones de Pretties y Eslint muy cómodas).
  
### Estructura de carpetas/ficheros
He intentado seguir una estructura basada en una separación de funcionalidades clara pero a la vez mantenible y escalable.
![File structure](/src/assets/file_structure.png)
He intentado seguir la estructura descrita en la segunda imágen. El número de componenetes utilizados no da para separar los mismos por funcionalidad, pero me parece adecuada la separación de funcionalidades del store, los tipos, los posibles custom hooks (ninguno de momento), la internacionalización, etc. Si siguiéramos desarrollando el juego, pasaríamos a organizar la carpeta componentes en módulos o features, con lo que estaríamos en la estructura 3.
 


### Test
Los tests son imprescindibles para mantener y asegurar la consistencia del código. De momento sólo están testeados algunos reducers.
Sobre la localización de los archivos de test, normalmente se ubican en una carpeta **test** al mismo nivel de la carpeta **src** y mantener en esta carpeta una estructura de espejo de **src** sólo con archivos de tests. En este caso, los archivos test están al mismo nivel que el archivo testado.

Evolución:
- Persistencia. Si bien en caso de recargar iríamos a la página de bienvenida, podríamos guardar en localStorage o sessionStorage el estado de las cartas y cargarlos si se refresca sin finalizar el juego. Esto lo podríamos hacer con `sessionStarage` o con `localStorage`. En mi opinión `sessionStorage` sería mejor opción por el hecho de ser menos 'agresivo' (se eliminan los datos al cerrar la pestaña o el navegador, los datos sólo están disponibles en la pestaña usada mientras que los datos en `localStorage` han de ser eliminados manualmente.

- Obtener imágenes aleatorias de una API externa consiguiendo así que no sean siempre las mismas. Para ello tendríamos que hacer una llamada http a una API externa. Con Redux, una forma de implementar esto sería añadir un thunk para operaciones asincrónicas.

##### Esta propuesta de solución está generada desde [esta plantilla](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate).

