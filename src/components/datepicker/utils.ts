export function calcPrevMonth(year: number, month: number) {
  if (month === 1) {
    return {
      year: year - 1,
      month: 12,
    };
  } else {
    return {
      year: year,
      month: month - 1,
    };
  }
}

export function calcNextMonth(year: number, month: number) {
  if (month === 12) {
    return {
      year: year + 1,
      month: 1,
    };
  } else {
    return {
      year: year,
      month: month + 1,
    };
  }
}
