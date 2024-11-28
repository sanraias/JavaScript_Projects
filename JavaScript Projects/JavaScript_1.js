function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a delicious food!";
    switch (Foods) {
        case "Lasagna":
            Food_Output = "Lasagna" + Food_String;
        break;
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
        break;
        case "Hot Dogs":
            Food_Output = "Hot Dogs" + Food_String;
        break;
        case "Bacon Roll":
            Food_Output = "Bacon Roll" + Food_String;
        break;
        case "Noodles":
            Food_Output = "Noodles" + Food_String;
        break;
        case "Chicken Wings":
            Food_Output = "Chicken Wings" + Food_String;
        break;
        default:
            Food_Output = "Please enter the food exactly as written on the above list";

    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#c82124";
ctx.beginPath();
ctx.arc(250,125,90,0,2*Math.PI);
ctx.fill();
ctx.stroke();

const g = document.getElementById("myCanvas2");
const xxx = g.getContext("2d");

const grad = xxx.createLinearGradient(0,0,350,0);
grad.addColorStop(0, "blue");
grad.addColorStop(1, "black");

xxx.fillStyle = grad;
xxx.fillRect(0,0,500,250);
