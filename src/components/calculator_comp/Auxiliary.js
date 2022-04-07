const salaryWithTrainingFund = (salary) => {
  if (salary <= 6450) {
    return salary * 0.9 * 0.975;
  } else if (salary > 6450 && salary <= 9240) {
    return salary * 0.86 * 0.975;
  } else if (salary > 9240 && salary <= 14840) {
    return salary * 0.8 * 0.975;
  } else if (salary > 14840 && salary <= 20620) {
    return salary * 0.69 * 0.975;
  } else if (salary > 20620 && salary <= 42910) {
    return salary * 0.65 * 0.975;
  } else if (salary > 42910 && salary <= 55270) {
    return salary * 0.53 * 0.975;
  } else if (salary > 55270) {
    return salary * 0.5 * 0.975;
  }
};

const salaryWithoutTrainingFund = (salary) => {
  if (salary <= 6450) {
    return salary * 0.9;
  } else if (salary > 6450 && salary <= 9240) {
    return salary * 0.86;
  } else if (salary > 9240 && salary <= 14840) {
    return salary * 0.8;
  } else if (salary > 14840 && salary <= 20620) {
    return salary * 0.69;
  } else if (salary > 20620 && salary <= 42910) {
    return salary * 0.65;
  } else if (salary > 42910 && salary <= 55270) {
    return salary * 0.53;
  } else if (salary > 55270) {
    return salary * 0.5;
  }
};

const costOfTheEmployeeWithCar = (salary, price) => {
  return salary * 1.3 + price * 0.0248;
};

const costOfTheEmployeeWithCarAndTrainingFund = (salary, price) => {
  return salary * 1.3 + salary * 0.075 + price * 0.0248;
};

export {
  salaryWithTrainingFund,
  salaryWithoutTrainingFund,
  costOfTheEmployeeWithCarAndTrainingFund,
  costOfTheEmployeeWithCar,
};
