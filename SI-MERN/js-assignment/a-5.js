const obj = {
  age: 20,
  haslicense: true,
  temp: 40,
  humidity: 76,
  role: 'editor',
  isActive: true
}
function evaluateConditions(obj){
  if(obj.age>18 && obj.haslicense===true){
    return 'Eligible to drive';
  }
  if(obj.temp>30 || obj.humidity>70){
    return 'Warning: High discomfort level';
  }
  if((obj.role==='admin' || obj.role==='editor') && obj.isActive===true){
    return 'Access granted';
  }
  return 'No condition is met';
}
console.log(evaluateConditions(obj));