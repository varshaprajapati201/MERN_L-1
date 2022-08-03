var salCalc = {
  hra(basicSalary) {
    return basicSalary * 0.50;
  },
  da(basicSalary) {
    return basicSalary * 0.40;
  },
  ta(basicSalary) {
    return basicSalary * 0.30;
  },
  gs(basicSalary) {
    var hra = salCalc.hra(basicSalary);
    var da = salCalc.da(basicSalary);
    var ta = salCalc.ta(basicSalary);
    return (basicSalary + hra + da + ta);
  }
}
