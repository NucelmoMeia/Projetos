header = document.getElementsByTagName('header')[0]
navbar = document.getElementById('navbar');
navbarShadow = document.getElementById('navbar_shadow');
navbarHeight = navbar.offsetHeight + 'px';
main_2 = document.getElementById('main_2')
background_img = document.getElementById('background_img');
btn_navbar = document.getElementById('btn_navbar');
initial_section_btn = document.getElementById('initial_section_btn');
hostqler_image_section = document.getElementById('hostqler_image_section');
main2_container = document.getElementById('main2_container');
loadind_image = document.getElementById('loadind_image');
only_to_load = document.getElementById('only_to_load');
body = document.getElementById('body');

function loaded() {
    btn_navbar = document.getElementById('btn_navbar');
    loadind_image = document.getElementById('loadind_image');
    only_to_load = document.getElementById('only_to_load');
    btn_navbar.style.display = 'none';
    loadind_image.style.animation = 'none';
    loadind_image.style.display = 'none';
    only_to_load.style.display = 'block';
    only_to_load.style.opacity = '100';
}
function rolagem() {
    //MOMENTO 0//
    if (window.scrollY > 0) {
        navmenus = document.getElementById('navbar_links');
        header.style.background = "rgba(4, 107, 255, 0.9)";
        header.style.boxShadow = "0px 0px 4px 0px rgba(0, 0, 0, 0.3)";
        header.style.backdropFilter = 'blur(8px)';
        navmenus.style.color = '#000';
    } else if (window.scrollY == 0) {
        navmenus = document.getElementById('navbar_links')
        header.style.boxShadow = "none";
        header.style.backdropFilter = '';
        header.style.background = "transparent";
        navmenus.style.color = '#ccc';
    }
    //MOMENTO 1//
    moment1 = main_2.offsetTop / 3
    if (window.scrollY > moment1) {
        hostqler_image_section.style.opacity = '1';
        hostqler_image_section.style.transition = '0.8s';
        main2_container.style.opacity = '1';
        main2_container.style.transition = '0.8s';

    } else if (window.scrollY < moment1) {
        //main 2
        hostqler_image_section.style.opacity = '0';
        main2_container.style.opacity = '0';
    }
    // Fim do Main_1

    //MOMENTO 2//

    moment2 = initial_section_btn.offsetTop
    if (window.scrollY == moment2 || window.scrollY > moment2) {
        //Navbar Button
        btn_navbar.style.display = 'inline-block';
    }
    else if (window.scrollY < moment2) {
        btn_navbar.style.display = 'none';
        //Navbar Button
        btn_navbar.style.display = 'none';
        btn_navbar.style.opacity = '1';
        btn_navbar.style.color = 'white';
        btn_navbar.style.transition = '5s';
    }
}
rolagem();
window.addEventListener('scroll', rolagem)


