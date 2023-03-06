/* menu show y hidden */ 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* menu show*/

/* validate if constant exists */


if (navToggle){
    navToggle.addEventListener('click', () =>
    {
        navMenu.classList.add('show-menu')
    })
}

/* menu hidden */
/*validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*remove menu mobile */

const navLink = document.querySelectorAll('.nav__link')

function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the sho-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*accordion skills */

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');


// function toggleSkills() {
//     const parent = this.parentNode;
//     const list = parent.querySelector('.skills__list');
  
//     if (parent.classList.contains('skills__closed')) {
//       // If the section is closed, open it and show the list
//       parent.classList.remove('skills__closed');
//       parent.classList.add('skills__open');
//       list.style.height = 'max-content';
//       list.style.overflow = 'visible';
//       list.style.display = 'block';
//     } else {
//       // If the section is open, close it and hide the list
//       parent.classList.remove('skills__open');
//       parent.classList.add('skills__closed');
//       list.style.height = '0';
//       list.style.overflow = 'hidden';
//       list.style.display = 'none';
//     }
//   }
  

function toggleSkills() {
  let itemClass = this.parentNode.className;
  
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  
  if (itemClass == 'skills__content skills__close' || itemClass == 'skills__content skills__open') {
    this.parentNode.className = 'skills__content skills__closed';
}  
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});





// const skillsContent = document.getElementsByClassName('skills__content'),
//     skillsHeader = document.querySelectorAll('.skills__header')

// function toggleSkills(){
//     let itemClass = this.parentNode.ClassName

//     for (i = 0; i < skillsContent.length; i++){
//         skillsContent[i].className = 'skills__content skills__close'
//     }
//     if (itemClass = 'skills__content skills__close' ) {
//         this.parentNode.className = 'skills__content skills__open'
//     } 
//     // inclusive 
//     // if (itemClass = 'skills_content skills__open') {
//     //     this.parentNode.className = 'skills__content skills__close'
//     // }
//     else {
//         this.parentNode.className = 'skills__content skills__closed'
//     }
    
// }

// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills)
// })



/* ========qualification tabs =======*/




// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//         tabs.forEach((otherTab, otherIndex) => {
//             if (otherIndex !== index) {
//                 otherTab.classList.remove('qualification__active')
//                 tabContents[otherIndex].classList.remove('qualification__active')
//             }
//         })
//         tab.classList.add('qualification__active')
//         tabContents[index].classList.add('qualification__active')
//     })
//     console.log(forEach);
// })






document.addEventListener('DOMContentLoaded', function() {
    // your JavaScript code here
  
  

const tabs = document.querySelectorAll('.qualification__button'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });

    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active');
  });
});


});







// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll('[data-content]') 

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__active')

//         tab.forEach(tab => {
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
    
// })


/*services modal */
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

 let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
 } 

 modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
 } )

 modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
 })






/* portfolio swiper */



let swiperPortfolio = new Swiper ('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});






//  testing modal for demo button

const modalButtons = document.querySelectorAll('.portfolio__button');
const modalClose = document.querySelector('.portfolio__modal-close');
const modalOverlay = document.querySelector('.portfolio__modal-overlay');
const Modal = document.querySelector('.portfolio__modal');

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    Modal.classList.add('portfolio__modal--active');
    modalOverlay.classList.add('portfolio__modal-overlay--active');
  });
});

modalClose.addEventListener('click', () => {
  Modal.classList.remove('portfolio__modal--active');
  modalOverlay.classList.remove('portfolio__modal-overlay--active');
});

modalOverlay.addEventListener('click', () => {
  Modal.classList.remove('portfolio__modal--active');
  modalOverlay.classList.remove('portfolio__modal-overlay--active');
});











/*testimonial */


let swiperTestimonial = new Swiper ('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});






/*scroll sections active link */
const sections = document.querySelectorAll('section[id')

function scrollActive(){
    const scrolly = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* change background header */
function scrollHeader (){
    const nav = document.getElementById('header')
    // when the scroll is greater than 200 viewport height, add the scroll header class to the header tag
    if(this.scrolly >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




/* ===show scroll up ====*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewport height, add the showscroll class 
    if(this.scrolly >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/* dark light theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if user previously selected a topic
if(selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'] (iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark/icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})