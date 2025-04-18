function groupByCategory(items, categoryKey){
  const res= {};
  for(let i of items){
    let category= i[categoryKey];
    if(!res[category]){
      res[category]=[];
    }
    res[category].push(i);
  }
  return res;
}
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Banana', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Lettuce', category: 'Vegetable' },
  { name: 'Chicken', category: 'Meat' }
];
console.log(groupByCategory(items, 'category'));