let square_element = document.getElementById('square-test');
let square_log = document.getElementById('square-log');
let button = document.getElementById('reset-button');

//console.log(square_element);

square_element.addEventListener('click', function (evento){
    //document.getElementById('square-test').setAttribute("class", "blue-background");
    // let bgColor = evento.target.style.backgroundColor;
    const span = document.createElement('span');
    span.innerText = evento.target.className;

    console.log(span);

    if(evento.target.classList.contains('red-background')) {
        evento.target.className = 'blue-background'
    }
    else {
        evento.target.className = 'red-background'
    }

    // if(bgColor === "red") {
    //     console.log(evento.target.style.backgroundColor);
    //     //evento.target.style.backgroundColor = "blue";
    //     console.log(evento.target.style.backgroundColor);
    // }
    // else {
    //     console.log(evento.target.style.backgroundColor);
    //     //evento.target.style.backgroundColor = "red";
    //     console.log(evento.target.style.backgroundColor);
    // }
    
    square_log.appendChild(span);
});



button.addEventListener('click', function(evento){
    console.log(button);

    square_element.className = '';
    square_log.clear; 
    // while (square_log.hasChildNodes()) {   
    //     square_log.removeChild(square_log.firstChild);
    // }
});