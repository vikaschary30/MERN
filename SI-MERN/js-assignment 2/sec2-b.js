const user = {
  name: "Alice",
  greetDelayed: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`); 
    }, 1000);
  }
};

user.greetDelayed();

const user1 = {
  name: "Alice",
  greetDelayed: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); 
    }, 1000);
  }
}

user1.greetDelayed();
