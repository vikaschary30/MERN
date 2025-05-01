function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}
const a= createGreeting("Hello");
console.log(a("World"));
const b= createGreeting("Hi");
console.log(b("Vikas"));

function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}

const h= createSecretHolder(55);
console.log(h.getSecret());
h.setSecret(62);

function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  }
}
const sh= createSecretHolder(55);
console.log(sh.getSecret()); 
sh.setSecret(62);
console.log(sh.getSecret());
console.log(sh.secret);