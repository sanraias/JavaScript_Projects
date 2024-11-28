function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms ["myForm"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    let z = document.forms ["myForm"]["country"].value;
    if (z == "") {
        alert("Country must be selected");
        return false;
    }

}