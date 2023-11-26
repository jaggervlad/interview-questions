function minJumps(nums) {
  const n = nums.length;
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      // Si ya alcanzamos el final, no es necesario continuar
      if (currentEnd >= n - 1) {
        break;
      }
    }
  }

  return jumps;
}

// Ejemplo de uso
const nums = [2, 3, 1, 1, 4];
console.log('Min Jumps', minJumps(nums)); // Imprimirá el número mínimo de saltos necesarios
