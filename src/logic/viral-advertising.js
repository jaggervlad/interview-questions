function viralAdvertising(n) {
  // Write your code here
  let acumativeLikes = 0;
  let shared = 5;

  for (let day = 1; day <= n; day++) {
    const liked = Math.floor(shared / 2);
    acumativeLikes += liked;
    shared = liked * 3;
  }

  return acumativeLikes;
}

console.log(viralAdvertising(5));
