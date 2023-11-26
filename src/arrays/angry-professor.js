function angryProfessor(k, a) {
  // Write your code here

  const studentOnTime = a.filter((s) => s <= 0);

  if (studentOnTime.length >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}

const TEST_ANGRY_PROFESOR = [-2, -5, 4, 3, 2];

console.log(angryProfessor(3, TEST_ANGRY_PROFESOR));
