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
        } else if {
            pick = "img/scissors.svg";
        }
    }
}