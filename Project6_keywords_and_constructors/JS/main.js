function Vehicle (Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Colour + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}