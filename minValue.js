function min_value(number, arr) {
  // Filtra los valores en el arreglo que sean mayores o iguales al número dado
  const filteredArr = arr.filter((value) => value >= number);

  // Si el arreglo filtrado está vacío, devuelve undefined
  if (filteredArr.length === 0) {
    return undefined;
  }

  // Encuentra el valor mínimo en el arreglo filtrado
  const minValue = Math.min(...filteredArr);

  return minValue;
}

// Ejemplo de uso
const result = min_value(4, [0, 1, 1, 2]);
console.log(result); // De
