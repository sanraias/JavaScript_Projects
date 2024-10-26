function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too young":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function my_Vote() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You can't vote":"You are untitled to vote!";
    document.getElementById("Vote").innerHTML = Can_vote;

}

function Kit (Team, Colour, Size) {
    this.Kit_Team = Team;
    this.Kit_Colour = Colour;
    this.Kit_Size = Size;
}
var Thomas = new Kit ("Manchester United", "Red", "Large");
var Felix = new Kit ("PSG", "Blue", "Medium");
var John = new Kit ("Inter Milan", "Yellow", "Small");
function myKeyword() {
    document.getElementById("New_and_This").innerHTML =
    "John is a fan of " + John.Kit_Team + " and the kit colour is "
    + John.Kit_Colour +". He uses the size " + John.Kit_Size + " ."
}

function Phone (Brand, Colour, Model) {
    this.Phone_Brand = Brand;
    this.Phone_Colour = Colour;
    this.Phone_Model = Model;
}

var Phone_A = new Phone ("iPhone", "null", "true");
var Phone_B = new Phone ("Samsung", "Blue", "Galaxy S10");
function ResKeyword() {
    document.getElementById("Reserved").innerHTML =
    "This is my new phone: " + Phone_A.Phone_Brand + ". " +
    "Its colour is " + Phone_A.Phone_Colour + " and the model is "
    + Phone_A.Phone_Model + "."
}

function count_Function() {
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}