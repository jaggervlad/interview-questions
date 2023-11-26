const users = [
  { id: 1, name: 'Sebastian Acosta', isActive: false },
  { id: 2, name: 'Karla Caldas', isActive: true },
  { id: 3, name: 'Jorge Acosta', isActive: true },
];

function checkIsNameExits(name, arr) {
  const exist = arr.findIndex((el) =>
    el.name.split(' ')[0].toLowerCase().includes(name.toLowerCase())
  );

  return exist === -1 ? false : true;
}

console.log(checkIsNameExits('jorgess', users));
