const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  let dateObj1 = new Date(date1), dateObj2 = new Date(date2);

  if (isNaN(dateObj1) || isNaN(dateObj2)) {
    return "Error: Invalid input provided.";
  }

  const years = Math.abs(
    dateObj1.getFullYear() - dateObj2.getFullYear()
  );

  const months = Math.abs(
    dateObj1.getMonth() - dateObj2.getMonth()
  );

  return `Time elapsed: ${years} years, ${months} months`;
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
