const target = document.querySelector('#inicio');
const target2 = document.querySelector('#musicas');
const target3 = document.querySelector('#sobre');
const target4 = document.querySelector('#contato');

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

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo3').classList.remove('fadeOutRight');
            document.querySelector('.sobreDiv').classList.remove('fadeOutLeft');
            document.querySelector('.titulo3').classList.add('fadeInRight');
            document.querySelector('.sobreDiv').classList.add('fadeInLeft');
        }
        else{
            document.querySelector('.titulo3').classList.remove('fadeInRight');
            document.querySelector('.sobreDiv').classList.remove('fadeInLeft');
            document.querySelector('.titulo3').classList.add('fadeOutRight');
            document.querySelector('.sobreDiv').classList.add('fadeOutLeft');
        }
    })
})

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelector('.titulo4').classList.remove('fadeOutLeft');
            document.querySelector('.contatoDiv').classList.remove('fadeOutRight');
            document.querySelector('.titulo4').classList.add('fadeInLeft');
            document.querySelector('.contatoDiv').classList.add('fadeInRight');
        }
        else{
            document.querySelector('.titulo4').classList.remove('fadeInLeft');
            document.querySelector('.contatoDiv').classList.remove('fadeInRight');
            document.querySelector('.titulo4').classList.add('fadeOutLeft');
            document.querySelector('.contatoDiv').classList.add('fadeOutRight');
        }
    })
})




observer.observe(target);

observer2.observe(target2);

observer3.observe(target3);

observer4.observe(target4);