var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectplanbutton = document.querySelectorAll('.plan button');


var togglebutton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__link--cta');

// console.log(backdrop);
for (var i = 0; i < selectplanbutton.length; i++) {
    selectplanbutton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add("open");
        backdrop.style.display ="block"
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
    });
}

backdrop.addEventListener("click", function() {
    mobilenav.style.display = 'none';
    // mobilenav.classList.remove('open');
    closemodal();
});



function closemodal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
   
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.style.display ="none"
    modal.addEventListener("click", closemodal);

    setTimeout(function() {
        backdrop.classList.remove('open');
    }, 10);
    
}


togglebutton.addEventListener('click', function() {
    mobilenav.style.display = 'block'
    // backdrop.style.display = 'block'
    mobilenav.classList.add('open');
    backdrop.style.display ="block"
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);

});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation end', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration', event);
})