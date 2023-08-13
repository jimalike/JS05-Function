let a;
let b;
let c;
let d;

function max(a,b,c,d)  {
   // let long = max.length
   if (a=== undefined && b === undefined && c === undefined && d === undefined){
      return NaN
   } else if (b === undefined && c === undefined && d === undefined){
      return a;
   } else if (c === undefined && d === undefined) {
         if (a > b){
            return  a;  
          }  else if  (b > a){
            return b; }
          }
   else if (d === undefined){
      if (a > b && a > c){
       return  a;   
   }  else if  (b > a && b > c){
      return b;
   } else if (c > a && c > b){
      return c;
   } }
   else {
      if (a > b && a > c && a > d){
         return  a;   
     }  else if  (b > a && b > c && b > d){
         return b;
      } else if (c > a && c > b && c > d){
         return c;
      }  else if (d > a && d > b && d > c){
         return  d;
   }
   }
}
   
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9