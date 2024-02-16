$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide montant
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });


    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    //saisie animation
    var typed = new Typed(".typing", {
        strings: ["Blockchain Developer", "Web entrepreneur","Web Developer", "Web Designer", "Consultant Blockchain", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Blockchain Developer", "Web entrepreneur", "Web Developer", "Web Designer","Consultant Blockchain", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });





    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            },
        }
    });
    
});

//function lire plus lire moins
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Lire plus";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnText.innerHTML = "Lire moins";
        moreText.style.display = "inline";
    }
    }


 // Récupère les données du formulaire
 const form = document.getElementById('contact-form');
 // Ajoute un gestionnaire d'événement 'submit' au formulaire
 form.addEventListener('submit', (event) => {
    // Empêche l'envoi du formulaire
    event.preventDefault();
    // Récupère les valeurs des champs de formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    // Valide les données
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Tous les champs sont obligatoires !');
        return;
      }
    });