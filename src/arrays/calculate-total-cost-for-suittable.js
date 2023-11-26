/*
  En esta funcion recorremos una matriz de matrizes con numeros enteros
  se hace la suma en forma vertical por fila ejemplo 
   [0, 1, 1, 2],
   [0, 5, 0, 0],
   [2, 0, 3, 3],
    0, 6, 1, 2 => 9
 
  Sumandolo de esta forma primero se hace el bucle por columna y luego por fila
 */

function calculateTotalCostForSuitableRooms(matrix) {
  let totalCost = 0; // Inicializamos la variable totalCost en 0 para llevar un registro de la suma de costos
  const rows = matrix.length; // Obtenemos el número de filas en la matriz
  const cols = matrix[0].length; // Obtenemos el número de columnas en la matriz

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (matrix[row][col] === 0) {
        break;
      }

      totalCost += matrix[row][col]; // Si skip es falso, sumamos el valor de la habitación al totalCost
    }
  }

  return totalCost; // Devolvemos la suma total de los costos de las habitaciones adecuadas
}

// Ejemplo de uso:
const matrix = [
  [0, 1, 1, 2],
  [2, 0, 3, 3],
  [0, 5, 0, 0],
];
const resultado = calculateTotalCostForSuitableRooms(matrix);
console.log(resultado); // La salida será 9
