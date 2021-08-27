
// grab everything we need
let buttons = document.querySelectorAll('.move_button');


// deifne our function w'll need
function moveButton(){

    //Get a random number for the top, left offset
    const offset_top   = Math.random() * (window.innerHeight - this.clientHeight);
    const offset_left  = Math.random() * (window.innerWidth - this.clientWidth);


    //apply those number to the buttons
    this.style.top  = offset_top + 'px';
    this.style.left = offset_left + 'px';
}

// add event listener
buttons.forEach(button => button.addEventListener('mouseenter', moveButton));