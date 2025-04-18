
function processTransactions(transactions){
  let bal=0;
  let depo=0;
  let withdr=0;
  for(let transac of transactions){
    if(transac.type === 'deposit'){
      bal+=transac.amount;
      depo+=transac.amount;
    }
    else if(transac.type==='withdrawal'){
      bal-=transac.amount;
      withdr+=transac.amount;
    }
  }
  return {
    balance: bal,
    totaldepo: depo,
    totalwith: withdr 
  };
}

const Transactions= [
  {type: 'deposit', amount: 500},
  {type: 'deposit', amount: 1500},
  {type: 'withdrawal', amount: 700},
  {type: 'deposit', amount: 100},
  {type: 'withdrawal', amount: 1000},
];
console.log(processTransactions(Transactions));
