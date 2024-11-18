function count_To_Ten () {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function text_Length () {
    let text = "This is a phrase to check length";
    let length = text.length;
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] +  "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_Pics() {
    var Cat_Picture = [];
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2]= "eating";
    Cat_Picture[3]= "purring";
    document.getElementById("Cat").innerHTML = "In the picture, the cat is " + Cat_Picture[2];
}


function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", colour:"black"};
    Musical_Instrument.colour = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.colour +
    " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function let_Keyword() {
    var X = 82;
    let output = X;
    {
        let X = 33;
        output += "<br>"+ X;
    }
    output += "<br>"+ X;
    document.getElementById("Let").innerHTML = output;
}

let Z = return_Function(4,3);
document.getElementById("Return").innerHTML = Z;

function return_Function(a,b) {
    return a*b;
}

document.getElementById("Name").innerHTML = name_Function("John");

function name_Function(name) {
    return "Hello " + name;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    colour: "red ",
    description: function() {
        return "The car is a " + this.year + this.colour + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;

let text_2 = "";
for (let p = 0; p < 10; p++) {
    if (p === 3) {continue;}
    text_2 += "The number is " + p + "<br>";
}
document.getElementById("Continue").innerHTML = text_2;