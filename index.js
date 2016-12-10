var a = Number(prompt('Solve Quadratic Equation ax2 + bx + c = 0, enter value A'));
var b = Number(prompt('Solve Quadratic Equation ax2 + bx + c = 0, enter value B'));
var c = Number(prompt('Solve Quadratic Equation ax2 + bx + c = 0, enter value C'));

function EquationD (a,b,c) {
var d = Math.pow(b,2) - 4 * a * c; 
  if(d<0)
 {return 'D<0, please enter valid A, B, C value';}
 else
 {return d;}

} 
var dd =  EquationD (a,b,c);

function EquationX1(a,b,dd) {
 var x1 = ( -b + Math.sqrt(dd)) / 2 * a;
 return x1;
}
function EquationX2(a,b,dd) {
 var x2 = ( -b - Math.sqrt(dd)) / 2 * a;
 return x2;
}
var result1 = EquationX1(a,b,dd);
document.write("X1 = ",result1,"  ");
var result2 = EquationX2(a,b,dd);
document.write("X2 = ", result2);