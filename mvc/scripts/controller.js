function compute() {
  var basicSalary = document.getElementById('salary').value
  basicSalary = parseInt(basicSalary);
  document.getElementById('hra').innerText = salCalc.hra(basicSalary);
  document.getElementById('da').innerText = salCalc.da(basicSalary);
  document.getElementById('ta').innerText = salCalc.ta(basicSalary);
  document.getElementById('gs').innerText = salCalc.gs(basicSalary);

}


// Print the result on span tag
