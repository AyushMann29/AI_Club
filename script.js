function vanish(number) {
    document.getElementById(number).classList.add('anime');
    setTimeout(function() {
      document.getElementById(number).style.visibility = 'hidden';
    }, 1000);
}

function goBack() {
    var animatedElements = document.getElementsByClassName('anime');
    for (var i = 0; i < animatedElements.length; i++) {
        animatedElements[i].style.visibility = 'visible';
        animatedElements[i].classList.remove('anime');
    }
}

function carrd(){
    window.location.href="https://ayurep.carrd.co/"
}