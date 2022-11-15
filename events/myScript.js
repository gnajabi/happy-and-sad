//window.confirm("Are you a robot?")
function comeOnGetHappy(){
    document.getElementById('image').src = "smiling-line-icon.png"
    document.getElementById('title').innerHTML = "Yay!"
    hereIAm()
}

function fafafaSadSong(){
    document.getElementById('image').src = "sad-face-icon.png"
    document.getElementById('title').innerHTML = "We're sorry"
    hereIAm()
}

function howToDisappearCompletely(){
    document.getElementById('image').style.display = 'none'
    goodbyeStranger()
}

function hereIAm (){
    document.getElementById('image').style.display = 'block'
}

function goodbyeStranger(){
    document.getElementById('title').innerHTML = "Goodbye!"
}

function helloAgain(){
    document.getElementById('title').innerHTML = "Boo!"
    document.getElementById('image').src = "enemy-ghost-icon.png"
    hereIAm()
}

function test(){
    console.log(test.json);
}