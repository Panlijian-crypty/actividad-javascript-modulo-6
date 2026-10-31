"use strict";

const gastos = [
  { descripcion: "Aporte al alquiler", monto: 110, categoria: "vivienda" },
  { descripcion: "Libro de programación", monto: 62.5, categoria: "educacion" },
  { descripcion: "Almuerzo del viernes", monto: 18, categoria: "alimentacion" },
  { descripcion: "Recargas de transporte", monto: 24, categoria: "transporte" },
  { descripcion: "Audífonos para estudiar", monto: 135, categoria: "tecnologia" },
  { descripcion: "Servicio de internet", monto: 42, categoria: "servicios" }
];

function calcularTotal(gastos) {
  let total = 0;
  for (let indice = 0; indice < gastos.length; indice++) {
    const gasto = gastos[indice];
    if (typeof gasto.monto !== "number" || !Number.isFinite(gasto.monto)) {
      throw new Error(`El monto de "${gasto.descripcion}" debe ser un número finito.`);
    }
    total += gasto.monto;
  }
  return total;
}

function calcularPromedio(gastos) {
  if (gastos.length === 0) {
    throw new Error("No se puede calcular el promedio de un arreglo vacío.");
  }
  return calcularTotal(gastos) / gastos.length;
}

function filtrarPorCategoria(gastos, categoria) {
  const gastosFiltrados = [];
  for (let indice = 0; indice < gastos.length; indice++) {
    if (gastos[indice].categoria === categoria) {
      gastosFiltrados[gastosFiltrados.length] = gastos[indice];
    }
  }
  return gastosFiltrados;
}

function obtenerMayorGasto(gastos) {
  if (gastos.length === 0) {
    return null;
  }
  let mayorGasto = gastos[0];
  for (let indice = 1; indice < gastos.length; indice++) {
    if (gastos[indice].monto > mayorGasto.monto) {
      mayorGasto = gastos[indice];
    }
  }
  return mayorGasto;
}

function clasificarGasto(monto) {
  if (monto >= 100) {
    return "Alto";
  } else if (monto >= 50 && monto < 100) {
    return "Medio";
  } else {
    return "Bajo";
  }
}

function describirCategoria(categoria) {
  switch (categoria) {
    case "vivienda":
      return "Gastos del hogar y alojamiento";
    case "educacion":
      return "Materiales y recursos para estudiar";
    case "alimentacion":
      return "Compra de alimentos y comidas";
    case "transporte":
      return "Traslados y movilidad";
    case "tecnologia":
      return "Dispositivos y accesorios electrónicos";
    case "servicios":
      return "Servicios de uso habitual";
    default:
      return "Otros gastos sin categoría reconocida";
  }
}

function crearContadorDeAltos() {
  let cantidad = 0;
  return function () {
    cantidad++;
    return cantidad;
  };
}

const formatearDinero = (monto) => `$${monto.toFixed(2)}`;

try {
  const gastosClasificados = [];
  const contarGastoAlto = crearContadorDeAltos();
  let cantidadAltos = 0;

  for (let indice = 0; indice < gastos.length; indice++) {
    const gasto = gastos[indice];
    const nivel = clasificarGasto(gasto.monto);
    gastosClasificados[gastosClasificados.length] = {
      descripcion: gasto.descripcion,
      monto: gasto.monto,
      categoria: gasto.categoria,
      nivel: nivel,
      descripcionCategoria: describirCategoria(gasto.categoria)
    };
    if (nivel === "Alto") {
      cantidadAltos = contarGastoAlto();
    }
  }

  const total = calcularTotal(gastos);
  const promedio = calcularPromedio(gastos);
  const mayorGasto = obtenerMayorGasto(gastos);
  const categoriaElegida = "educacion";
  const gastosPorCategoria = filtrarPorCategoria(gastos, categoriaElegida);
  const resumenPorCategoria = {};

  for (let indice = 0; indice < gastos.length; indice++) {
    const gasto = gastos[indice];
    if (resumenPorCategoria[gasto.categoria] === undefined) {
      resumenPorCategoria[gasto.categoria] = 0;
    }
    resumenPorCategoria[gasto.categoria] += gasto.monto;
  }

  console.log("LISTADO DE GASTOS CLASIFICADOS");
  console.table(gastosClasificados);
  console.log(`Total gastado: ${formatearDinero(total)}`);
  console.log(`Promedio por gasto: ${formatearDinero(promedio)}`);
  if (mayorGasto !== null) {
    console.log(`Gasto más alto: ${mayorGasto.descripcion}; monto: ${formatearDinero(mayorGasto.monto)}; categoría: ${mayorGasto.categoria}.`);
  }
  console.log(`Cantidad de gastos de nivel Alto: ${cantidadAltos}`);
  console.log(`Gastos de la categoría elegida "${categoriaElegida}":`, gastosPorCategoria);

  const informe = {
    total: total,
    promedio: promedio,
    cantidadAltos: cantidadAltos,
    mayorGasto: mayorGasto,
    resumenPorCategoria: resumenPorCategoria
  };
  console.log("INFORME FINAL EN FORMATO JSON");
  console.log(JSON.stringify(informe, null, 2));
} catch (error) {
  console.error(`Error al procesar los gastos: ${error.message}`);
}

try {
  calcularPromedio([]);
} catch (error) {
  console.error(`Error controlado esperado: ${error.message}`);
}
