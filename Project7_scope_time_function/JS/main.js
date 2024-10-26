var x = 25;
function Add_numbers_1() {
    document.write(25 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var y = 45;
    document.write(100 - x + "<br>");
}
function Add_numbers_4() {
    document.write(y + 29);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

function if_Stat() {
    if (new Date().getFullYear() < 2025) {
        document.getElementById("True_False").innerHTML = "We are in 2024!";   
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_the_day").innerHTML= Reply;    
}



function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";   
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function get_Hours() {
    const d = new Date();
    document.getElementById("Hours").innerHTML= d.getHours();
}

function get_Time() {
    const d = new Date();
    document.getElementById("Time").innerHTML= d.getSeconds();
}
