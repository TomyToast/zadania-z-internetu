document.addEventListener('DOMContentLoaded', function() {
    //e.preventDefault();

    const yoda = document.getElementById('checkbox_yoda');
    const trooper = document.getElementById('checkbox_trooper');
    const vader = document.getElementById('checkbox_vader');
    const form = document.querySelector('form');
    form.action = '#';

    const checkBoxes = function(){

        const playMarch = function(){
            const audio = document.createElement('audio');
    
            form.removeAttribute("action");
            audio.innerHTML = `
                <source src="imperial_march.mp3" type="audio/mpeg">
            `;
            audio.play();
        };

        if (yoda.checked && trooper.checked || (yoda.checked && vader.checked) || (yoda.checked && trooper.checked && vader.checked)) {
            form.action ="https://www.youtube.com/watch";
        } else if (trooper.checked || vader.checked || (trooper.checked && vader.checked)) {
            playMarch();
        } else {
            form.action ="https://www.youtube.com/watch";
        }
    }

    document.addEventListener('submit', function() {
        checkBoxes();
    })
});