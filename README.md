# Actividad del módulo 6: análisis de gastos en JavaScript

**Estudiante:** Pan Lijian Wong  
**Carrera:** Técnico en Desarrollo de Software

Programa autónomo que analiza seis gastos, calcula sus totales y promedio, los clasifica por nivel y genera un informe en la consola. Utiliza HTML5 y JavaScript puro, sin bibliotecas externas ni manipulación del DOM.

## Ejecutar la actividad

1. Descarga el repositorio con **Code → Download ZIP** y extrae su contenido.
2. Abre `tarea-6/index.html` en Chrome, Edge u Opera.
3. Presiona **Ctrl + Shift + J** para abrir la consola.
4. Recarga la página con **Ctrl + R** para ver toda la salida.

La página contiene un título y la indicación de abrir la consola. La tabla, los resultados y el informe JSON aparecen únicamente en la consola del navegador.

## Archivos

| Ruta | Contenido |
| --- | --- |
| `tarea-6/index.html` | Página que enlaza `script.js`. |
| `tarea-6/script.js` | Datos, funciones, clasificación e informe final. |
| `tarea-6/capturas/` | Carpeta reservada para las tres capturas solicitadas. |

## Funciones implementadas

| Función | Responsabilidad |
| --- | --- |
| `calcularTotal(gastos)` | Valida los montos con `typeof` y los suma mediante `for`. |
| `calcularPromedio(gastos)` | Calcula el promedio y lanza un error si el arreglo está vacío. |
| `filtrarPorCategoria(gastos, categoria)` | Construye un nuevo arreglo con los gastos de una categoría. |
| `obtenerMayorGasto(gastos)` | Devuelve el objeto de mayor monto o `null` si no hay gastos. |
| `clasificarGasto(monto)` | Usa `if / else if / else` para devolver Alto, Medio o Bajo. |
| `describirCategoria(categoria)` | Describe las categorías mediante `switch` y `default`. |
| `crearContadorDeAltos()` | Conserva un contador interno mediante un cierre. |

También se utiliza una función flecha para mostrar los montos con dos decimales. Los recorridos emplean bucles `for` y los nuevos elementos se agregan por índice, sin `map`, `filter`, `reduce` ni `push`.

## Resultados

| Gasto | Monto | Categoría | Nivel |
| --- | ---: | --- | --- |
| Aporte al alquiler | $110.00 | vivienda | Alto |
| Libro de programación | $62.50 | educacion | Medio |
| Almuerzo del viernes | $18.00 | alimentacion | Bajo |
| Recargas de transporte | $24.00 | transporte | Bajo |
| Audífonos para estudiar | $135.00 | tecnologia | Alto |
| Servicio de internet | $42.00 | servicios | Bajo |

- **Total gastado:** $391.50.
- **Promedio por gasto:** $65.25.
- **Mayor gasto:** Audífonos para estudiar, $135.00, categoría `tecnologia`.
- **Cantidad de gastos altos:** 2.
- **Filtro elegido:** `educacion`, con el libro de programación de $62.50.

El informe final se muestra con `JSON.stringify(informe, null, 2)` e incluye `total`, `promedio`, `cantidadAltos`, `mayorGasto` y `resumenPorCategoria`.

## Manejo de errores

El flujo principal utiliza `try...catch` y muestra `error.message` con `console.error` si ocurre un problema. Un bloque independiente prueba `calcularPromedio([])` y captura este mensaje intencional:

```text
Error controlado esperado: No se puede calcular el promedio de un arreglo vacío.
```

Este mensaje es parte de la actividad y no indica un fallo de sintaxis.

## Validación y capturas pendientes

Se comprobó la sintaxis con `node --check tarea-6/script.js` y la ejecución con Node.js. Se verificaron los totales, los límites de clasificación, el filtro, el mayor gasto y la conservación del contador.

**Antes de entregar, falta ejecutar el programa en el navegador y agregar estas tres capturas reales dentro de `tarea-6/capturas/`:**

| Nombre obligatorio | Qué debe mostrar |
| --- | --- |
| `captura-01-tabla.png` | La tabla con los seis gastos y sus cinco propiedades. |
| `captura-02-totales.png` | Total, promedio, gasto mayor, cantidad de altos, filtro e informe JSON. |
| `captura-03-error-controlado.png` | El mensaje del error controlado por el arreglo vacío. |

La carpeta se conserva con `.gitkeep` hasta añadir las imágenes. La entrega en eCampus debe realizarse con el enlace del repositorio público.
