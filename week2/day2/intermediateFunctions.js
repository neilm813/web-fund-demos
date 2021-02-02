function fib(position) {
  const sequence = [0, 1];

  if (position <= 1) {
    return sequence[position];
  }

  for (let i = 2; i <= position; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }

  return sequence[position];
}
