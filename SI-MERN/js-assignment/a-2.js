function findLongestPalindrome(str){
  let longind=0;
  let longsize=1;
  for(let i=0;i<str.length;i++){
    let l=i-1;
    let r=i+1;
    while(l>=0 && r<str.length && str[l]===str[r]){
      if((r-l+1)>longsize){
        longind=l;
        longsize=r-l+1;
      }
      l--;
      r++;
    }
    l=i-1;
    r=i;
    while(l>=0 && r<str.length && str[l]===str[r]){
      if((r-l+1)>longsize){
        longind=l;
        longsize=r-l+1;
      }
      l--;
      r++;
    }
  }
  return str.substring(longind,longind+longsize);
}
str='12321';
console.log(findLongestPalindrome(str));