function diamond(num){
   let s ="";
   let j = num;
   for(let i=1; i<=num; i++){
      s= "  ".repeat(j);
      console.log(s," *  ".repeat(i));
      s = "";
      j--;
   }
      j = 1;
      for(i=num; i>=1; i--){
         s= "  ".repeat(j);
         console.log(s," *  ".repeat(i));
         s="";
         j++;
      }
   }
   
   diamond(process.argv[2]);


