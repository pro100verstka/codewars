function past(h, m, s) {
  if (0 <= h <=23 && 0 <= m <=59 && 0 <= s <=59 ) {
		return (h * 3600 + m * 60 + s) * 1000
	}
}
