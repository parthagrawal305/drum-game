// rather than making this much variables, we can make it in the switch (one at a time) But it's slower to run

function audio(char) {
    switch (char) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
        case "s":
            var tom_3 = new Audio('sounds/tom-2.mp3');
            tom_3.play();
            break;
        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

for (var i = 0; i < document.querySelectorAll(".drum ").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        audio(this.innerHTML);
    });
};

document.addEventListener('keypress', function (event) {
    const keyName = event.key ;
    audio(keyName);
})

// document.getElementsByClassName("w drum").addEventListener("click", handleClick);

/*
for (var i = 0; i < document.querySelectorAll(".drum ").length;i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
};

function handleClick() {
    alert("clicked");
}

/*  
for (var i = 0; i < document.querySelectorAll(".drum ").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        alert("clicked");
    });
};
*/
/*
function add(num1, num2){
    return (num1+num2);
}
function multiply(num1, num2){
    return (num1*num2);
}
function substract(num1, num2){
    return (num1-num2);
}
function divide(num1, num2){
    return (num1/num2);
}
function calculator(num1, num2, operator){
    return operator(num1,num2);
}

console.log(calculator(2,5,divide));
*/


/*
function HouseKeeper(name, age, hasWorkPremit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPremit = hasWorkPremit;
    this.languages = languages;
    this.clean = function () {
        alert(this.name + " at work.")
        alert("cleaning in progress...");
        wait(3000);
        alert("Cleaning complete.");
    };
};
var housekeeper1 = HouseKeeper("Jenny", 19, true, ["Latin", "English"]);
alert("Hi, I'm" + housekeeper1.name + ".\n I can speak " + houseKeeper1.languages[0] + " and " + houseKeeper1.languages[1] + ".");
housekeeper1.clean;
*/

/*
function BellBoy(name, age, hasWorkPremit, languages) {
this.name = name;
this.age = age;
this.hasWorkPremit = hasWorkPremit;
this.languages = languages;
};

var BellBoy1 = new BellBoy("timmy", 18, true, ["russian", "English"]);
var BellBoy2 = new BellBoy("johan", 21, true, ["latin", "English"]);
var BellBoy3 = new BellBoy("kenny", 24, true, ["german", "English"]);
console.log(x.name);
*/
// function play() { 
//     tom_1.play();
//     tom_2.play();
//     tom_3.play();
//     tom_4.play();
//     snare.play();
//     crash.play();
//     kick_bass.play();
// }