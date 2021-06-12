const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";
var questionlist = ["Always changing, never constant!!", "Repeatedly does one task over and over!!", "Contains information to be read and written!!"];
var cluelist = ["R E V B A I L A", "I U O C N F N T", "S T A E B A A D"];
var positionsy = [60, 160, 260];
var positionsx = [100, 700, 100];
function clues() {
    // for (var i = 0; i == 3; i += 1) {
    fill("white")
    textSize(15)
    text(cluelist[0], positionsx[0], positionsy[0]);
    fill("lightblue")
    text(questionlist[0], positionsx[0], positionsy[0] + 20);
    fill("white")
    textSize(15)
    text(cluelist[1], positionsx[1], positionsy[1]);
    fill("lightblue")
    text(questionlist[1], positionsx[1], positionsy[1] + 20);
    fill("white")
    textSize(15)
    text(cluelist[2], positionsx[2], positionsy[2]);
    fill("lightblue")
    text(questionlist[2], positionsx[2], positionsy[2] + 20);
    // };
};