// Function for the Tax
function calculatePayeeTax(salary) {
    let tax = 0;
    if (salary > 24000) {
      tax = (salary - 24000) * 0.3 + 5040;
    } else if (salary > 16400) {
      tax = (salary - 16400) * 0.25 + 2880;
    } else if (salary > 11200) {
      tax = (salary - 11200) * 0.2 + 1440;
    } else if (salary > 4800) {
      tax = (salary - 4800) * 0.15 + 600;
    } else if (salary > 2400) {
      tax = (salary - 2400) * 0.1 + 180;
    } else if (salary > 0) {
      tax = salary * 0.05;
    }
    return tax;
  }
  
  // Function to calculate NHIF Deduction
  function calculateNHIF(salary) {
    let nhif = 0;
    if (salary >= 6000 && salary <= 7999) {
      nhif = 150;
    } else if (salary >= 8000 && salary <= 11999) {
      nhif = 300;
    } else if (salary >= 12000 && salary <= 14999) {
      nhif = 400;
    } else if (salary >= 15000 && salary <= 19999) {
      nhif = 500;
    } else if (salary >= 20000 && salary <= 24999) {
      nhif = 600;
    } else if (salary >= 25000 && salary <= 29999) {
      nhif = 750;
    } else if (salary >= 30000 && salary <= 34999) {
      nhif = 850;
    } else if (salary >= 35000 && salary <= 39999) {
      nhif = 900;
    } else if (salary >= 40000 && salary <= 44999) {
      nhif = 950;
    } else if (salary >= 45000 && salary <= 49999) {
      nhif = 1000;
    } else if (salary >= 50000 && salary <= 59999) {
      nhif = 1100;
    } else if (salary >= 60000 && salary <= 69999) {
      nhif = 1200;
    } else if (salary >= 70000 && salary <= 79999) {
      nhif = 1300;
    } else if (salary >= 80000 && salary <= 89999) {
      nhif = 1400;
    } else if (salary >= 90000 && salary <= 99999) {
      nhif = 1500;
    } else if (salary >= 100000) {
      nhif = 1700;
    }
    return nhif;
  }
  
  // Function to calculate NSSF Deduction
  function calculateNSSF(salary) {
    let nssf = 0;
    if (salary > 6000 && salary <= 18000) {
      nssf = salary * 0.06;
    } else if (salary > 18000) {
      nssf = 1080;
    }
    return nssf;
  }