function remainder(n, m) {
  if (n > m) {
		return n % m;
	} else if (n < m) {
		return m % n;
	} else if (m < 0 || n < 0) {
		return n % m;
	} else if (m === 0 || n === 0) {
		return NaN;
}
}
