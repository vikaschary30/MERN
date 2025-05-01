
console.log(mysteryvariable);
let mysteryvariable = 10;
console.log(mysteryvariable);

function revealmystery(){
  console.log("Inside the function: ", mysteryvariable);
  let mysteryvariable = 30;
  console.log("Inside the function after declaration: ", mysteryvariable);
}

revealmystery();
console.log("Outside the function: ", mysteryvariable);

