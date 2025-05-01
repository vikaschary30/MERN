Problem 1:For first console, the count increments and becomes1. for second, the count increments and 2. Because the function exp is same. But for the third console, the count starts working from beginning ie 0, Because the function exp is different. The point is we think that the count is dependent but it is independent.

Problem 2:I think the expected output is "Hello, Alice!","Hello, Charlie!", But the output has come are different because the var executes after last value of i. Var is function-scoped not block-scoped. We can fix it by using let keyword which is a block-scoped.

Section 2- Part 1: When you try to access a variable before it's declared it says undefined. Var is function scoped, it can be accessed through out the function. There are two scopes for function. there are two scopes for mysteryvariable one is local and the other is global.
          Task: Hoisting is a behaviour of js where declarations are moved to the top before executing.
          Ex: console.log(a);
              var a=5
              console.log(a);
              let a=5;
              1. After rewriting code and using let instead of var, thrwos a reference error. as they are in Temporal Dead Zone.
              2. Hoisting with var makes the declaration to the top and is assigned as undefined so you won't get an error but you will an output as undefined. Hoisting with let and const can be hoisted but not intitialized with anything, so they stay in a state called TDZ
          
          Part 2: This inside setTimeout refers to "Alice". The this keyword refers to current object that is being called.
          Task: 1. Because the function inside setTimeout function, the this doesn't refer to Alice. In greetDelayed() method, this is          
                   determined by how it is called.
                2. Using this in a variable helps in pointing to the correct object. 
                3. Arrow functions use lexical binding, this binding which means they get this from scope where they are defined.
        
          Part 3: In JS, when we create a function inside another function, the inner function can access outer function's variables, this         is called Closure. Closure helps in creating independent state without using global variables. Each time we call setUpCounter(), we get a new independent counter with its own count.

          Part 4: When a function is called with fewer args, the ones which are missing are assigned as undefined. When a function is called
          with more args, the ones extra are usually ignored, they don't cause any erros. The '...args' parameter allows a function to accept many args as an array.
          Task: 1.Less Arguments: The args missed are assigned as undefined.
                  More Arguments: More args are usually ignored.
                2.'...args' parameter helps to take multiple args in form of array, which makes it easier to accept many arguments.
                  Syntax: function fn(...args){
                    
                  }
    
