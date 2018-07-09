document.addEventListener('DOMContentLoaded', function() {

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
            console.log('test');
        };

        if (yoda.checked && trooper.checked || (yoda.checked && vader.checked) || (yoda.checked && trooper.checked && vader.checked)) {
            form.action ="https://www.youtube.com/watch";
        } else if ((trooper.checked) || (vader.checked) ) {
            form.submit(function(){
                // e.preventDefault();
            })
            playMarch();
        } else if (trooper.checked && vader.checked) {
            form.submit(function(){
                // e.preventDefault();
            })
            playMarch();
        } else {
            form.action ="https://www.youtube.com/watch";
        }
    }

    document.addEventListener('submit', function(e) {
        e.preventDefault();
        checkBoxes();
    })
});