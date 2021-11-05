const target = document.querySelector('#inicio');
const target2 = document.querySelector('#musicas');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('.col-12')[0].classList.remove("fadeOutLeft");
            document.querySelectorAll('.col-12')[0].classList.add("fadeInLeft");
            document.querySelectorAll('.col-12')[1].classList.remove("fadeOutRight");
            document.querySelectorAll('.col-12')[1].classList.add("fadeInRight");        }
        else{
            document.querySelectorAll('.col-12')[0].classList.add("fadeOutLeft");
            document.querySelectorAll('.col-12')[0].classList.remove("fadeInLeft");
            document.querySelectorAll('.col-12')[1].classList.add("fadeOutRight");
            document.querySelectorAll('.col-12')[1].classList.remove("fadeInRight");
        }
    })
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo2').classList.remove('fadeOutLeft');
            document.querySelector('.carouselMusicas').classList.remove('fadeOutRight');
            document.querySelector('.titulo2').classList.add('fadeInLeft');
            document.querySelector('.carouselMusicas').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo2').classList.remove('fadeInLeft');
            document.querySelector('.carouselMusicas').classList.remove('fadeInRight');
            document.querySelector('.titulo2').classList.add('fadeOutLeft');
            document.querySelector('.carouselMusicas').classList.add('fadeOutRight');
        }
    })
})









observer.observe(target);

observer2.observe(target2);