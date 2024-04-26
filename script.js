const navbar = document.querySelector('.navv');


window.onscroll = function () { 
    if (window.scrollY >= 100 ) {
        console.log('fbvdjn');
        navbar.style.background = '#FDFDFD';
    } 
    else {
        navbar.style.background = 'transparent';
    }
};