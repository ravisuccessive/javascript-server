
export default function diamon(n) {
  let whilte_space = "";
  let j = n;
  for (let i = 1; i <= n; i++) {
    whilte_space =" ".repeat(j);
    console.log(whilte_space,'* '.repeat(i));
    whilte_space="";
    j--;
  }
  for (let i = n; i >= 1; i--) {
    whilte_space =" ".repeat(j);
    console.log(whilte_space,' *'.repeat(i));
    whilte_space="";
    j++;
  }
}

