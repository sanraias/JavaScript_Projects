function addition_Function() {
    var addition = 265+125;
    document.getElementById("Add").innerHTML = "265 + 125 = " + addition;
}

function substraction_Function() {
    var substraction = 250-129;
    document.getElementById("Subs").innerHTML = "250 - 129 = " + substraction;
}

function multiplication_Function() {
    var multiplication = 55*69;
    document.getElementById("Mult").innerHTML = "55 by 69 = " + multiplication;
}

function division_Function() {
    var division = 1800/30;
    document.getElementById("Div").innerHTML = "1800 divided 30 = " + division;
}

function more_Math() {
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML = "1 plus 2 multiplied by 10, divided in half and then substracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var mod_Operator = 590%21;
    document.getElementById("Oper").innerHTML = "When you divide 590 by 21 you have a remainder of: " + mod_Operator;
}

function negation_Operator() {
    var A = -1650;
    document.getElementById("Neg").innerHTML= -A;
}

function increment_Operator() {
    var B = 672;
    B++;
    document.getElementById("Incr").innerHTML= B;
}

function decrement_Operator() {
    var C = 26.95;
    C--;
    document.getElementById("Decr").innerHTML = C;
}

window.alert (Math.random() * 205);

function math_Constants() {
    document.getElementById("MathCons").innerHTML =
    "<p><b>Math.E:</b> " + Math.E + "</p>" +
    "<p><b>Math.PI:</b> " + Math.PI + "<p>" +
    "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
    "<p><b>MathLN10:</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.LOG10E:</b> " + Math.LOG10E + "</p>";
}

function math_Round() {
    document.getElementById("Math_Round").innerHTML = Math.round(4.6);
}

function math_Ceil() {
    document.getElementById("Math_Ceil").innerHTML = Math.ceil(15.35);
}

function math_Floor() {
    document.getElementById("Math_Floor").innerHTML = Math.floor(236.35);
}

function math_Trunc() {
    document.getElementById("Math_Trunc").innerHTML = Math.trunc(189.32);
}

function math_Sign() {
    document.getElementById("Math_Sign").innerHTML = Math.sign(-23);
}