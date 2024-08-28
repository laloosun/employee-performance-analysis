# Employee Performance Analysis Tool

This project analyzes employee performance metrics such as Average Call Handling Time (ACHT), Call Resolution Rate (CRR), and Customer Satisfaction Score (CSS).

## Purpose

This project serves as an exercise in using the `reduce` method and the accumulator (`acc`) in JavaScript to perform powerful data transformations and analyses.

## How to Run

1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Run `node app.js` to see the performance analysis in action.

## Project Structure

- `app.js`: Main JavaScript file that performs the performance analysis.
- `README.md`: Project documentation (this file).

## Example Output

Here is an example of the output you can expect:

Total Employees: 7 Average ACHT: 6.76 Average CRR: 85.29% Average CSS: 4.54 Highest ACHT: 8.1 Lowest ACHT: 5.6 Highest CRR: 92% Lowest CRR: 78% Highest CSS: 4.9 Lowest CSS: 4.0

### ACHT Distribution:

Excellent (<6): 2 Good (6-7): 3 Average (7-8): 1 Needs Improvement (>=8): 1

This output includes important statistics such as the total number of employees, the average ACHT, CRR, and CSS, as well as the highest and lowest values for each metric. Additionally, it provides a distribution of ACHT into different performance categories to help you quickly assess the overall efficiency of your team.

## How `reduce` and `acc` Were Used

### Calculating Performance Statistics

In `app.js`, we used the `reduce` method to traverse through the array of employees and calculate key performance statistics:

```javascript
const performanceStats = employees.reduce(
  (acc, employee) => {
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
  },
  {
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
  }
);
```
