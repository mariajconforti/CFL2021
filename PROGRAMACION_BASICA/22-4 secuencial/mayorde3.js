console.log("buscar mayor");
let readlineSync =require("readline-sync");
let valor1 =readlineSync.questionInt("ingrese primer numero");
let valor2=readlineSync.questionInt("ingrese segundo numero");
let valor3=readlineSync.questionInt("ingrese tercer numero");
if (valor1<valor2)
  if (valor2<valor3)
   console.log("el mayor es",valor3)
   else
   console.log("el mayor es",valor2)
else
  if(valor1<valor3)
    console.log("el mayor es",valor3)
  else
    console.log("el mayor es",valor1)


