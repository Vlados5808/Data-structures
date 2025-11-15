function showAddresses(base, size, n) {
  for (let i = 0; i < n; i++) {
    console.log(base + i * size);
  }
}
showAddresses(1000, 4, 5);