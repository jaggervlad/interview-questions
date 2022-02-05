const types = [
  { id: 1, nombre: 'Comedia' },
  { id: 2, nombre: 'Accion' },
  { id: 3, nombre: 'Suspenso' },
];

const data = [
  { id: 1, type: 1, qtity: 5 },
  { id: 1, type: 1, qtity: 5 },
  { id: 1, type: 2, qtity: 555 },
  { id: 1, type: 3, qtity: 45 },
  { id: 1, type: 2, qtity: 100 },
  { id: 1, type: 3, qtity: 200 },
  { id: 1, type: 1, qtity: 55 },
];

const totalOfData = {};

data.forEach((item) => {
  const { type, qtity } = item;

  totalOfData[type] = totalOfData[type] ?? 0;
  totalOfData[type] += qtity;
});

console.log(
  types
    .map((type) => ({
      ...type,
      totalData: totalOfData[type.id],
    }))
    .sort((a, b) => b.totalData - a.totalData)
    .map((i) => i.nombre)
);
