function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
}

function my_FunctionA() {
    document.getElementById("Test2").innerHTML= isNaN('This is a string');
}

function my_FunctionB() {
    document.getElementById("Test3").innerHTML= isNaN('231285');
}

function my_FunctionC() {
    document.getElementById("Infinity").innerHTML= 2E310;
}

function my_FunctionD() {
    document.getElementById("NonInfinity").innerHTML= 1.7976931348623157E308;
}

function my_FunctionE() {
    document.getElementById("NegInfinity").innerHTML= -3E310; 
}

function my_FunctionF() {
    document.getElementById("Boolean").innerHTML= 10<2;
}

console.log(2+2);

console.log(2234<55);

function my_FunctionG() {
    document.getElementById("Equal").innerHTML= 10==10;
}

function my_FunctionH() {
    document.getElementById("Equal2").innerHTML= (10+5)==25;
}

function my_FunctionI() {
    A = 10;
    B = 10;
    document.getElementById("Triple").innerHTML= A === B;
}

function my_FunctionJ() {
    A = 10/2/2024;
    B = 5;
    document.getElementById("Triple2").innerHTML= A === B;
}

function my_FunctionK() {
    A = "Five";
    B = 5;
    document.getElementById("Triple3").innerHTML= A === B;
}

function my_FunctionL() {
    A = 12/3/2022;
    B = 13/1/1999;
    document.getElementById("Triple4").innerHTML= A === B;
}

function my_FunctionM() {
    document.getElementById("Op1").innerHTML= 5 > 2 && 10 > 4;
}

function my_FunctionN() {
    document.getElementById("Op2").innerHTML= 5 > 10 || 10 < 4;
}

function not_Function() {
    document.getElementById("Not").innerHTML= !(6 < 90);
}