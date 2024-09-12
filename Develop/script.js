const employeesArray = [];
const collectEmployees = function() {
  const employees = [];
  // for (let i = 0; i < 3; i++) { 
  //   const firstName = window.prompt(`Please enter Employee ${i + 1}'s first name.`);
  //   const lastName = window.prompt(`Please enter Employee ${i + 1}'s last name.`);
  //   let salary = parseFloat(window.prompt(`Please enter Employee ${i + 1}'s salary.`));
  //   const employee = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     salary: salary
  // };

  let x = true;
  while (x) {
    const firstName = window.prompt(`Please enter Employee first name.`);
    const lastName = window.prompt(`Please enter Employee last name.`);
    let salary = parseFloat(window.prompt(`Please enter Employee salary.`));
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }
    employees.push(employee);
    x = confirm("Did you want to add another employee?");
}


return employees;
} 
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  const averageSalary = totalSalary / employeesArray.length; // array length is number of items in array

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "CAD"
  })}`);
};
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log("Random Employee:");
  console.table(randomEmployee);

  
};
//   ====================
//   STARTER CODE
//   Do not modify any of the code below this line:
// */

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}


// Event listener for adding employees and tracking data
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', trackEmployeeData);