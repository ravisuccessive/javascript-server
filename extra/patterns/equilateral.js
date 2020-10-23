let x;
export default function equilateral (x)
{
      let a= " "
    console.log("print a equilateral triangle with rows "+x);
    for(let i=1;i<=x;i++){
          a="";
    for(let j=i;j<=x;j++){
          a+=" ";
    }
    for (let z=i;z>0;z--){     
         a+="* ";
    }
    console.log(a);
    }
}
  // equilateral(process.argv[2])