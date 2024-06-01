function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(28.2915637,-16.6291304),
        zoom:5,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
};
function myFunction() {
    document.getElementById("uitkomst").innerHTML = "Bedankt.";
    };
var question = "none";
var input = "none";
var answer = "none";
var correct = 0;
var incorrect = 0;
var ask = function () {
    input = prompt(question);
};
function score() {
    if (input == answer) {
        correct = correct + 1;
    } else {
        incorrect = incorrect + 1;
        alert("incorrect");
    }
};
question = "Wat is mijn naam?";
answer = "Petra";
ask();
score();
question = "Wat mijn geboorteplaats?";
answer = "Amsterdam";
ask();
score();
question = "Waar woon ik nu?";
answer = "Maastricht";
ask();
score();
question = "Hoeveel kinderen heb ik?";
answer = "2";
ask();
score();
question = "Wat is mijn lievelingsdier?";
answer = "Hond";
ask();
score();
alert("Goed gedaan, je hebt " + correct + "vragen goed van de 5.");

