
import initModal from "./modal.js";
import toolTip from "./toolTip.js";


// Changing content clicking on the image
function initTabNav() {

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


if (tabMenu.length && tabContent.length) {
tabContent[0].classList.add('active')

function activeTab (index) {

    tabContent.forEach((section) => {
        section.classList.remove('active');
    })

    tabContent[index].classList.add('active');
};

tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index)
    })
})

};

};

// Changing content clicking on the FAQ questions

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    
    if(accordionList.length) {
    
    accordionList[0].classList.add('active');
    accordionList[0].nextElementSibling.classList.add('active');
    
    function activeAccordion(){
        this.classList.toggle('active')
        this.nextElementSibling.classList.toggle('active');
    }
    
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
    }
};

// Animation when scrolling the page

function initAnimateScroll() {

    const sections = document.querySelectorAll('.js-scroll');
    const middleWindow = window.innerHeight * .6;

    function scrollAnimation(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - middleWindow;

            

            if(sectionTop < 0){

                section.classList.add('active');

            }


        })

    };
    scrollAnimation();

    window.addEventListener('scroll', scrollAnimation);
}


initTabNav();
initAccordion();
initAnimateScroll();
initModal();
toolTip();


