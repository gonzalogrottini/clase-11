const oreo =10;
const kitkat =15;
const kinder =25;
let ingreso ="kinder";

if( ingreso== "oreo")
{
preciof=oreo;
}
else if (ingreso=="kitkat")
{
    preciof=kitkat;
}
else
{
preciof=kinder;
}
console.log('el helado cuesta :'+preciof);

let expr= "pescado";
switch (expr) {
case "case" :
comsole.log ("te ofrecemos vino tinto");
break;
case "pescado":
console.log("te ofrecemos vino blanco");
break;
case "verdura":
console. log ("te ofrecemos agua");
break
default:
console. log("elija carne, pescado o verdura.");
}

let count = 20;
while (count > 0) {
if(count<=11)
{
    console.log("el numero fue menor a 11");
    
}
else{
    console.log("el numero es mayor a 11");
}
count = count -1
}