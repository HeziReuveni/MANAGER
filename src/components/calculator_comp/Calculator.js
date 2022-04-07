import React, { useState } from "react";
import "./Calculator.css";
import {
  salaryWithTrainingFund,
  salaryWithoutTrainingFund,
  costOfTheEmployeeWithCar,
  costOfTheEmployeeWithCarAndTrainingFund,
} from "./Auxiliary";

const Calculator = () => {
  const [salary, setSalary] = useState("");
  const [netSalary, setNetSalary] = useState("");
  const [trainingFund, setTrainingFund] = useState("");
  const [withCar, setWithCar] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [costEmployee, setCostEmployee] = useState("");
  const [infoTrain, setInfoTrain] = useState(false);
  const [infoCar, setInfoCar] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trainingFund === "Yes" && withCar === "No") {
      setNetSalary(salaryWithTrainingFund(salary));
      setCostEmployee(salary * 1.3 * 1.075);
    } else if (trainingFund === "No" && withCar === "No") {
      setNetSalary(salaryWithoutTrainingFund(salary));
      setCostEmployee(salary * 1.3);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (trainingFund === "No" && withCar === "Yes") {
      setNetSalary(salaryWithoutTrainingFund(salary));
      setCostEmployee(costOfTheEmployeeWithCar(salary, carPrice));
    } else if (trainingFund === "Yes" && withCar === "Yes") {
      setNetSalary(salaryWithTrainingFund(salary));
      setCostEmployee(
        costOfTheEmployeeWithCarAndTrainingFund(salary, carPrice)
      );
    }
  };

  return (
    <>
      <div className="calculator">
        <h2>Payroll calculator</h2>
        <div className="content-calculate">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Gross salary</label>
              {infoTrain && (
                <div className="text-info-label">
                  <p>
                    The training fund is an employee savings fund that is
                    currently used as a general non-long-term savings channel.
                    The employee sets aside 2.5% of the salary and the employer
                    sets aside 7.5% of the salary.
                  </p>
                </div>
              )}
              <input
                onChange={(event) => setSalary(event.target.value)}
                type="text"
                id="input-form-id"
                required
                value={salary}
              />
            </div>
            <div>
              <label
                onMouseEnter={() => setInfoTrain(true)}
                onMouseLeave={() => setInfoTrain(false)}
              >
                Training fund
              </label>
              <select onClick={(event) => setTrainingFund(event.target.value)}>
                <option hidden>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label
                onMouseEnter={() => setInfoCar(true)}
                onMouseLeave={() => setInfoCar(false)}
              >
                Company car
              </label>
              {infoCar && (
                <div id="text-info-label-car">
                  <p>
                    Car ownership is part of the social conditions that an
                    employer maintains for the employee. The monthly cost is
                    2.48% of the value of the vehicle.
                  </p>
                </div>
              )}
              <select onClick={(event) => setWithCar(event.target.value)}>
                <option hidden>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            {withCar === "No" && (
              <button id="button-id-calculate">Calculate</button>
            )}
            {withCar === "Yes" && (
              <div id="form-car">
                <form>
                  <label>Enter price car</label>
                  <input
                    id="input-super"
                    type="text"
                    onChange={(event) => setCarPrice(event.target.value)}
                    required
                  />
                  <button id="button-id-calculate" onClick={handleClick}>
                    Calculate
                  </button>
                </form>
              </div>
            )}
          </form>
        </div>
        {salary && costEmployee && (
          <div className="result">
            <p>Net salary: {parseInt(netSalary)}</p>
            <p>Cost employee: {parseInt(costEmployee)}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Calculator;
