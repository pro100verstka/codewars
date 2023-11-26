function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (75 < exam <= 90 || projects >= 5) {
      return 90;
    } else if (50 <= exam <= 75 || projects >= 2) {
      return 75;
		} else {
      return 0;
    }
  }

