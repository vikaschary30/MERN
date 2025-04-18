//global variable
let globalv='vikas';
function scopeofvar() {
  console.log(globalv);
}
scopeofvar();
console.log(globalv);

//local variable
function scopeofvar() {
  let localv='vikky';
  console.log(localv); //accessible
}
scopeofvar();
console.log(localv);  //error-localv not defined

//block variable - using let or const
for(let i=0;i<5;i++){
  console.log(i); // accessible
}
console.log(i); // error-i not defined

//block variable - using var
for(var j=0;j<5;j++){
  console.log(j); // accessible
}
console.log(j); // accessible

//variable shadowing
let v='helloo';
function printm(){
  let v='hi';
  console.log(v);
}
printm();
console.log(v);