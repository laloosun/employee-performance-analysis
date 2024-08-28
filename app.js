const employees = [
    { id: 'E001', ACHT: 7.2, CRR: 85, CSS: 4.5 },
    { id: 'E002', ACHT: 5.6, CRR: 90, CSS: 4.8 },
    { id: 'E003', ACHT: 8.1, CRR: 78, CSS: 4.0 },
    { id: 'E004', ACHT: 6.7, CRR: 88, CSS: 4.9 },
    { id: 'E005', ACHT: 5.9, CRR: 92, CSS: 4.7 },
    { id: 'E006', ACHT: 7.5, CRR: 80, CSS: 4.3 },
    { id: 'E007', ACHT: 6.3, CRR: 84, CSS: 4.6 },
  ];
  
  const performanceStats = employees.reduce((acc, employee) => {
    acc.totalEmployees++;
    acc.sumACHT += employee.ACHT;
    acc.sumCRR += employee.CRR;
    acc.sumCSS += employee.CSS;
    acc.highestACHT = Math.max(acc.highestACHT, employee.ACHT);
    acc.lowestACHT = Math.min(acc.lowestACHT, employee.ACHT);
    acc.highestCRR = Math.max(acc.highestCRR, employee.CRR);
    acc.lowestCRR = Math.min(acc.lowestCRR, employee.CRR);
    acc.highestCSS = Math.max(acc.highestCSS, employee.CSS);
    acc.lowestCSS = Math.min(acc.lowestCSS, employee.CSS);
    return acc;
  }, {
    totalEmployees: 0,
    sumACHT: 0,
    sumCRR: 0,
    sumCSS: 0,
    highestACHT: -Infinity,
    lowestACHT: Infinity,
    highestCRR: -Infinity,
    lowestCRR: Infinity,
    highestCSS: -Infinity,
    lowestCSS: Infinity,
  });
  
  const averageACHT = performanceStats.sumACHT / performanceStats.totalEmployees;
  const averageCRR = performanceStats.sumCRR / performanceStats.totalEmployees;
  const averageCSS = performanceStats.sumCSS / performanceStats.totalEmployees;
  
  console.log(`Total Employees: ${performanceStats.totalEmployees}`);
  console.log(`Average ACHT: ${averageACHT.toFixed(2)}`);
  console.log(`Average CRR: ${averageCRR.toFixed(2)}%`);
  console.log(`Average CSS: ${averageCSS.toFixed(2)}`);
  console.log(`Highest ACHT: ${performanceStats.highestACHT}`);
  console.log(`Lowest ACHT: ${performanceStats.lowestACHT}`);
  console.log(`Highest CRR: ${performanceStats.highestCRR}%`);
  console.log(`Lowest CRR: ${performanceStats.lowestCRR}%`);
  console.log(`Highest CSS: ${performanceStats.highestCSS}`);
  console.log(`Lowest CSS: ${performanceStats.lowestCSS}`);
  
  const ACHTDistribution = employees.reduce((acc, employee) => {
    if (employee.ACHT < 6) {
      acc.excellent++;
    } else if (employee.ACHT < 7) {
      acc.good++;
    } else if (employee.ACHT < 8) {
      acc.average++;
    } else {
      acc.needsImprovement++;
    }
    return acc;
  }, {
    excellent: 0,
    good: 0,
    average: 0,
    needsImprovement: 0
  });
  
  console.log('ACHT Distribution:');
  console.log(`Excellent (<6): ${ACHTDistribution.excellent}`);
  console.log(`Good (6-7): ${ACHTDistribution.good}`);
  console.log(`Average (7-8): ${ACHTDistribution.average}`);
  console.log(`Needs Improvement (>=8): ${ACHTDistribution.needsImprovement}`);