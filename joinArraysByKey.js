function joinArraysByKey({ leftArr, rightArr, key }) {
  let join = [];
  const resultMap = new Map();

  leftArr.forEach((i) => resultMap.set(i[key], i));

  rightArr.forEach((rigthItem) => {
    const leftItem = resultMap.get(rigthItem[key]);

    if (leftItem === undefined) return;

    join.push({ ...leftItem, ...rigthItem });
  });

  return join;
}

// Ejemplo de uso:
const array1 = [
  { id: 1, nombre: 'A', dato: 'Dato1' },
  { id: 2, nombre: 'B', dato: 'Dato2' },
];

const array2 = [
  { id: 1, otroDato: 'OtroDato1' },
  { id: 3, otroDato: 'OtroDato3' },
];

const resultado = joinArraysByKey({
  leftArr: array1,
  rightArr: array2,
  key: 'id',
});
console.log(resultado);
