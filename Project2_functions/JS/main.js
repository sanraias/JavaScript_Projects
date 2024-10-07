function My_First_Function() { //Defining the function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; // Putting the value of the variable into de HTML element with the "Button_Text" Id

}

function my_Voteable_Function() { //Defining the function and naming it
    var age, voteable; //Defining two variables
    age = document.getElementById("age").value; //Giving the variables a value
    voteable = (age < 18)? "Too young":"Old enough"; //If the variable "voteable" is less than 18 the result will be "Too young" if is more than 18 will be "Old enough"
    document.getElementById("demo").innerHTML = voteable; //Putting the value of the variable into the HMTL element
}

function my_Operator() { //Defining the function and naming it
    var sentence = "This is my concatenated"; // Defining the string value of the variable
    sentence += " sentence assignment!"; //Using the += Operator to concatenate the sentence string variable to a new string
    document.getElementById("Operator").innerHTML = sentence; // Putting the value of the variable into the HTML element
}
