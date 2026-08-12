/*=========================================================
            OPALESCENT INSURANCE AGENCY
                 MAIN JAVASCRIPT FILE

    This file controls:

    ✓ Mobile Navigation
    ✓ Sticky Navigation
    ✓ Scroll Reveal Animation
    ✓ Animated Statistics
    ✓ Premium Calculator
    ✓ Quote Form Validation
    ✓ Testimonial Slider
    ✓ Back To Top Button
    ✓ Smooth User Experience

=========================================================*/



/*=========================================================
                WAIT UNTIL PAGE LOADS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {



/*=========================================================
                    MOBILE MENU
=========================================================*/


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        console.log("MENU BUTTON CLICKED");

        navLinks.classList.toggle("active");

    });

} 

/*=========================================================
            CLOSE MENU AFTER CLICKING A LINK
=========================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=========================================================
        CLOSE MENU WHEN CLICKING OUTSIDE
=========================================================*/

document.addEventListener("click", (event) => {
    // Check if menuBtn and navLinks exist on the current page
    if (menuBtn && navLinks) {
        if (
            !menuBtn.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            navLinks.classList.remove("active");
        }
    }
});

/*
document.addEventListener("click",(event)=>{

    if(

        !menuBtn.contains(event.target)

        &&

        !navLinks.contains(event.target)

    ){

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-times");

        menuIcon.classList.add("fa-bars");

    }

});  */



/*=========================================================
                STICKY HEADER
=========================================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(255,255,255,.95)";

        header.style.backdropFilter="blur(15px)";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

    }

    else{

        header.style.background="transparent";

        header.style.boxShadow="none";

    }

});



/*=========================================================
                SCROLL REVEAL
=========================================================*/

const revealItems=document.querySelectorAll(

".card,.hero,.why-us,.stat,.testimonial,.cta"

);

function reveal(){

    revealItems.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        if(revealTop<windowHeight-120){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();



/*=========================================================
        SET INITIAL STATE FOR REVEAL ITEMS
=========================================================*/

revealItems.forEach(item=>{

    item.style.opacity="1";

    item.style.transform="translateY(40px)";

    item.style.transition="all .8s ease";

});



/*=========================================================
            BACK TO TOP BUTTON
=========================================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="top-button";

document.body.appendChild(topBtn);



window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});



topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*=========================================================
            PREMIUM ESTIMATOR
=========================================================*/

window.calculatePremium=function(){

    const insurance=document.getElementById("insuranceType");

    const amount=document.getElementById("insuredAmount");

    const output=document.getElementById("premiumOutput");

    if(!insurance || !amount || !output){

        return;

    }

    const value=parseFloat(amount.value);

    if(isNaN(value)||value<=0){

        output.innerHTML="Please enter a valid amount.";

        return;

    }

    const rates={

        motor:.05,

        health:.04,

        home:.03,

        business:.06

    };

    const premium=value*rates[insurance.value];

    output.innerHTML=

    `<strong>Estimated Premium:</strong>

     KES ${premium.toLocaleString()}`;

};



/*=========================================================
            QUOTE REQUEST FORM
=========================================================*/

const quoteForm=document.getElementById("quoteForm");

if(quoteForm){

quoteForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(

"Thank you for requesting a quotation.\n\nOur advisor will contact you shortly."

);

    quoteForm.reset();

});

}



/*=========================================================
            TESTIMONIAL SLIDER
=========================================================*/

const testimonials=document.querySelectorAll(".testimonial");

let current=0;

function showTestimonial(){

    testimonials.forEach((card,index)=>{

        card.style.display=index===current

        ?

        "block"

        :

        "none";

    });

}

if(testimonials.length){

    showTestimonial();

    setInterval(()=>{

        current++;

        if(current>=testimonials.length){

            current=0;

        }

        showTestimonial();

    },5000);

}



/*=========================================================
            ANIMATED STATISTICS
=========================================================*/

const counters=document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

    const target=parseInt(counter.innerText);

    let count=0;

    const timer=setInterval(()=>{

        count+=Math.ceil(target/80);

        if(count>=target){

            count=target;

            clearInterval(timer);

        }

        counter.innerText=count+"+";

    },20);

});



});
