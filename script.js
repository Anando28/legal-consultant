/* ==========================================
   Premium Legal Consultant Website
   script.js
========================================== */

/* Loader */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


/* Sticky Header */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* Scroll Progress */

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});


/* Mobile Menu */

const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

menuBtn.onclick = () => {

    menu.classList.toggle("active");

};


/* Close Menu */

document.querySelectorAll("#menu a").forEach(link => {

    link.onclick = () => {

        menu.classList.remove("active");

    }

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   FAQ Accordion
========================================== */

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const icon = button.querySelector("i");

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

        } else {

            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.display = "none";
            });

            document.querySelectorAll(".faq-question i").forEach(i => {
                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");
            });

            answer.style.display = "block";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

        }

    });

});


/* ==========================================
   Back To Top
========================================== */

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   Scroll Animation
========================================== */

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* ==========================================
   Contact Form
========================================== */

const form = document.querySelector(".contact form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}


/* ==========================================
   Image Hover Effect
========================================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/* ==========================================
   Counter Animation
========================================== */

const counters=document.querySelectorAll(".experience-box h2");

const speed=50;

counters.forEach(counter=>{

const animate=()=>{

const target=+counter.innerText.replace("+","").replace("%","");

let count=0;

const update=()=>{

count+=Math.ceil(target/speed);

if(count<target){

if(counter.innerText.includes("%")){

counter.innerText=count+"%";

}else{

counter.innerText=count+"+";

}

requestAnimationFrame(update);

}else{

counter.innerText=counter.innerText;

}

};

update();

};

animate();

});


console.log("Premium Legal Consultant Website Loaded Successfully.");