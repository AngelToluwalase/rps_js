function initPick() {
    let init = "m_icon.jpg";
    document.getElementById('oppResult').src = init;
}
function rockPick() {
    function genPick() {
        let pick = "m_icon.jpg"; 
        if (Math.floor(Math.random() * 3) == 2) {
            pick = "r_icon.png"; 
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "p_icon.png";
        } else {
            pick = "s_icon.png";
        }
        document.getElementById('oppResult').src = pick;
        if (pick == "r_icon.png") {
            document.getElementById('result').innerHTML = "It's a Tie";
        } else if(pick == "p_icon.png") {
            document.getElementById('result').innerHTML = "You Lose";
        } else {
            document.getElementById('result').innerHTML = "You Win!";
        }
    }
    genPick();
}
function paperPick () {
    function genPick() {
        let pick = "m_icon.jpg";
        if (Math.floor(Math.random()* 3) == 2) {
            pick = "r_icon.png";
        }
    }
        if (Math.floor(Math.random() * 3) == 1) {
            pick = "p_icon.png"; 
    } else {
        pick = "s_icon.png";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "p_icon.png") {
        document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "s_icon.png") {
        document.getElementById('result').innerHTML= "You Lose";
    } else {
        document.getElementById('result').innerHTML = "You Win!";
    }
} 
genPick ();

function scissorsPick(){
    function genPick() {
        let pick = "m_icon.jpg";
        if (Math.floor(Math.random()) * 3 == 2) {
            pick= "r_icon.png";
        }
    }
    if (Math.floor(Math.random()) * 3 == 1) {
        pick = "p_icon.png";
    } else {
        pick = "s_icon.png";
    }
    document.getElementById('oppResult').src = pick;
    if (pick == "s_icon.png") {
        document.getElementById('result').innerHTML = "It's a Tie";
    } else if (pick == "r_icon.png") {
        document.getElementById('result').innerHTML = "You Lose";
    } else {
        document.getElementById('result').innerHTML = "You Win!";
    }
}
genPick ();