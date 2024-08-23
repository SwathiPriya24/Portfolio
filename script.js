

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

    document.querySelector('.navIcon').addEventListener('click', function () {
        document.querySelector('.navList').classList.toggle('show');
    });

});


document.addEventListener('DOMContentLoaded', function () {

    handleScrollTopSec()
});




// TRACK BAR STARTS HERE 

const skillsSection = document.getElementById('skills');
const windowHeight = window.innerHeight;
let animationStarted = false;

function checkScroll() {
    if (!animationStarted) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.75) {
            startAnimation();
            animationStarted = true;
        }
    }
}

function startAnimation() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        skillLevel.style.animationPlayState = 'running';
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkScroll);


function handleScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    const targetHeight = 100; // Height in pixels where you want the animations to trigger
    // const targetHeight2 = 100; // Height in pixels where you want the animations to trigger
    if (scrollPosition >= targetHeight) {

        document.querySelector('.aboutmeLeft').classList.add('animate-right');
        document.querySelector('.aboutmeRight').classList.add('animate-left');
        document.querySelector('.educationmain').classList.add('animate-left');
        window.removeEventListener('scroll', handleScroll);


    }

}


function handleScrollContact() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    const targetHeight = 10; // Height in pixels where you want the animations to trigge
    // const targetHeight2 = 100; // Height in pixels where you want the animations to tr
    if (scrollPosition >= targetHeight) {

        document.querySelector('.aboutmeLeft').classList.add('animate-right');
        document.querySelector('.aboutmeLeft').classList.add('animate-left');
        document.querySelector('.educationmain').classList.add('animate-right');
  
        window.removeEventListener('scroll', handleScrollContact);


    }


}

function handleScrollTopSec() {

    if (true) {


        document.querySelector('.aboutLeft').classList.add('animate-left');
        document.querySelector('.aboutRight').classList.add('animate-right');



        window.removeEventListener('scroll', handlehandleScrollTopSecScroll);
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScroll);

