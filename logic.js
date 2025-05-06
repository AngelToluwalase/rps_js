function initPick() {
    let init = "img/mystery.svg";
    document.getElementById('oppResult').src = init;
}
function rockPick() {
    function genPick() {
        let pick = "img/mystery.svg"; 
        if (Math.floor(Math.random() * 3) == 2) {
            pick = "img/rock.svg"; 
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "img/paper.svg";
        } else {
            pick = "img/scissors.svg";
        }
        document.getElementById('oppResult').src = pick;
        if (pick == "img/rock.svg") {
            document.getElementById('result').innerHTML = "It's a Tie";
        } else if(pick == "img/paper.svg") {
            document.getElementById('result').innerHTML = "You Lose";
        } else {
            document.getElementById('result').innerHTML = "You Win!";
        }
    }
    genPick();
}
function paperPick () {
    function genPick() {
        let pick = "img/mystery.svg";
        if (Math.floor(Math.random()* 3) == 2) {
            pick = "img/rock.svg";
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "img/paper.svg"; 
    } else {
        pick = "img/scissors.svg";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "img/paper.svg") {
        document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "img/scissors.svg") {
        document.getElementById('result').innerHTML= "You Lose";
    } else {
        document.getElementById('result').innerHTML = "You Win!";
    }
} 
genPick ();
}
function scissorsPick(){
    function genPick() {
        let pick = "img/mystery.svg";
        if (Math.floor(Math.random() * 3) == 2)
            pick= "img.rock.svg";
    } else if (Math.floor(Math.random() * 3) == 1) {
        pick = "img/paper.svg";
    } else {
        pick = "img/scissors.svg";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "img/scissors.svg") {
        document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "img/rocks.svg") {
        document.getElementById('result').innerHTML = "You Lose";
    } else {
        document.getElementById('result').innerHTML = "You Win!";
    }
}
genPick ();