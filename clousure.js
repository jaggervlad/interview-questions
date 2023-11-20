function secretScope() {
  let increment = 0;

  return () => {
    increment++;
    increment++;
    increment++;
    increment++;
    return increment;
  };
}

const getSecretScope = secretScope();

console.log(getSecretScope());
