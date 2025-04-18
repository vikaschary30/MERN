function createCalculator(a, b){
  return {
    add: function add(a, b){
      return a+b;
    },
    sub: function sub(a, b){
      return a-b;
    },
    mul: function multiply(a, b){
      return a*b;
    },
    div: function division(a, b){
      return a/b;
    }, 
  };
}
const calci=createCalculator();
console.log(calci.add(4,2));
console.log(calci.sub(4,2));
console.log(calci.mul(4,2));
console.log(calci.div(4,2));