function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_Method() {
    let x = document.getElementById("UpperCase").innerHTML;
    document.getElementById("UpperCase").innerHTML = x.toUpperCase();
}

function lowercase_Method() {
    var y = "EVERYTHING IS CRAZY";
    var Lower = y.toLowerCase();
    document.getElementById("LowerCase").innerHTML = Lower;
}

function search_Method() {
    var Phrase = "Please, locate where the 'locate' word occurs!";
    var Locate = Phrase.search("locate")
    document.getElementById("Search").innerHTML = Locate;
}

function string_Method() {
    var number = 182
    document.getElementById("Numbers_to_string").innerHTML = number.toString();
}

function to_Precision_Method() {
    var big = 16.54878123131624
    document.getElementById("Precision").innerHTML = big.toPrecision(5);
}

function fixed_Method() {
    var to_fix = 58.6562
    var fixed = to_fix.toFixed();
    document.getElementById("Fixed").innerHTML = fixed;
}

function value_of_Method() {
    var n = 582
    var value_of = n.valueOf();
    document.getElementById("Valueof").innerHTML = value_of;
}