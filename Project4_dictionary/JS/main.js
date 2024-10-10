function my_Dictionary() {
    var Player = {
        Age: 23,
        Height: "1.80 m",
        Number: 8,
        Position: "CM",
        Footed: "Left"
    };
    document.getElementById("Dictionary").innerHTML = Player.Height;
}

function my_Sec_Dictionary() {
    var Colours = {
        Anna: "Black",
        Pedro: "Beige",
        John: "White",
        Carlos: "Red",
        Paul: "Black",
        Anna: "Blue",
    };
    delete Colours.Anna;
    document.getElementById("Colours").innerHTML = Colours.Anna;
}