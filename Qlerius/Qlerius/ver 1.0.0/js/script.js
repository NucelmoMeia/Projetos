function retrivingDisplay(){
        viewPort = window.innerHeight;
        nav = document.getElementById('navbar-external');
        navbarshadow = document.getElementById('space');
        navheight = nav.offsetHeight;
        first = document.getElementById('first');
        initialSection = document.getElementById('initial-section');
        initialSection.style.height = viewPort - navheight + "px";
        navbarshadow.style.height =navheight + "px";
        first.style.height = viewPort+ "px";
    }

function retrivingDisplayTest() {
        if (window.scrollY == 0) {retrivingDisplay()}}
retrivingDisplay();
   
window.addEventListener('resize', retrivingDisplayTest)

function navbarAfter(){
    second = document.querySelector('#second')
    if (window.scrollY > 0) {
        nav = document.getElementById('navbar-external');
        navmenus = document.querySelectorAll('.navbar-menu')
        nav.style.boxShadow = "0px 0px 4px 0px rgba(0, 0, 0, 0.3)";
        nav.style.backdropFilter = 'blur(8px)';
        nav.style.background = "rgba(250, 250, 250, 0.9)";
        navmenus.forEach(function(element){
           element.style.color = 'var(--navbar-text-color)'
           element.style.transition = '0.4s'; 
        })
        nav.style.transition = '0.4s';
        }
    if (window.scrollY == 0) {
        nav.style.background = '';
        nav.style.boxShadow = '';
        nav.style.backdropFilter = 'blur(0px)';
        navmenus.forEach(function(element){
           element.style.color = 'lightgray' 
        })
    }
    dim = second.offsetTop - nav.offsetHeight
    if (window.scrollY >= dim) {
        but = document.getElementById('navbar-menu4')
        but.style.display = 'inline-block';
    } else if (window.scrollY < dim) {
        but = document.getElementById('navbar-menu4')
        but.style.display = 'none';
    }
    }
window.addEventListener('scroll', navbarAfter)

function not_avaible() {
        alert("Sorry! It's not avaible at moment!")
    }


function onloadend() {
    first = document.getElementById('first')
    second = document.getElementById('second')
    first.style.display = "block"
    second.style.display = "block"
}
onloadend();

second = document.getElementById('second');
        second.style.padding = nav.offsetHeight + "px";