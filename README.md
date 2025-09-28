# Proyecto: Secuencia Fibonacci TDD

Repositorio oficial: [github.com/rgilmejia/testingautomation](https://github.com/rgilmejia/testingautomation)

## Descripción

Este proyecto implementa una función para generar la secuencia de Fibonacci, siguiendo el enfoque de Desarrollo Guiado por Pruebas (TDD) con Jest. Incluye pruebas unitarias exhaustivas y reportes en HTML.

## Requisitos

- Node.js (v16 o superior recomendado)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/rgilmejia/testingautomation.git
    cd testingautomation
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Estructura del proyecto

```
src/
   generarSecuenciaFibonacci.js      # Función principal
tests/
   generarSecuenciaFibonacci.test.js # Pruebas unitarias con Jest
reportes/
   test-report.html                  # Reporte HTML de pruebas
package.json                       # Configuración y scripts
README.md                          # Documentación
```

## Uso

### Ejecutar pruebas unitarias

- Para ejecutar todas las pruebas y ver el resultado en consola:
   ```sh
   npm test
   ```
- Para ejecutar las pruebas en modo silencioso y mostrar los logs en el reporte:
   ```sh
   npm run test:quiet
   ```
   Este comando es un atajo configurado en el archivo `package.json` y ejecuta:
   ```sh
   npx jest --verbose=false
   ```


### Generar y abrir el reporte HTML

El proyecto incluye `jest-html-reporter`. Al ejecutar las pruebas, se genera automáticamente el archivo `reportes/test-report.html` con el resumen de los resultados.

Para abrir el reporte en tu navegador automáticamente, ejecuta:

```sh
npm run report
```


### Ejemplo de uso de la función

```js
const { generarSecuenciaFibonacci } = require('./src/generarSecuenciaFibonacci');
console.log(generarSecuenciaFibonacci(10)); // Output: '01123581313'
```


### Configuración de Jest

- Las pruebas están ubicadas en la carpeta `tests/`.
- El reporte HTML se configura en el archivo `jest.config.js` bajo la sección `reporters`.
- Puedes personalizar la configuración de Jest y del reporte HTML editando `jest.config.js`.

## Detalles de las pruebas

- Las pruebas cubren casos válidos, errores de entrada, formato de salida y propiedades matemáticas de la secuencia.
- Los mensajes de error y los resultados de las pruebas se muestran en el reporte de Jest gracias a los `console.log` en los tests.
- Para que los registros de la consola se muestren en el reporte, utiliza el comando `npm run test:quiet`.

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama para tu feature o fix.
3. Realiza tus cambios y asegúrate de que todas las pruebas pasen.
4. Envía un pull request.

## Soporte

Para dudas o problemas, abre un issue en [GitHub Issues](https://github.com/rgilmejia/testingautomation/issues).