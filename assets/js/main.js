document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const navMenu = document.getElementById('myNavMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuBtn = document.querySelector('.nav-menu-btn i');
  const sections = document.querySelectorAll('section');

  // Toggle menu function
  function toggleMenu() {
    navMenu.classList.toggle('responsive');
    menuBtn.classList.toggle('uil-times');
    menuBtn.classList.toggle('uil-bars');
  }

  // Close menu function
  function closeMenu() {
    navMenu.classList.remove('responsive');
    menuBtn.classList.remove('uil-times');
    menuBtn.classList.add('uil-bars');
  }

  // Set active link
  function setActiveLink(id) {
    navLinks.forEach(link => {
      if (link.getAttribute('href').slice(1) === id) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }

  // Scroll event for header shadow and active link
  function handleScroll() {
    const scrollPosition = window.scrollY;

    // Header shadow
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link based on section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Adjust offset as needed
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveLink(section.id);
      }
    });
  }

  // Menu button click event
  menuBtn.addEventListener('click', toggleMenu);

  // Nav link click events
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
      closeMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target) && navMenu.classList.contains('responsive')) {
      closeMenu();
    }
  });

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial call to set the active link on page load
  handleScroll();
});

/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Full Stack Developer"],
    loop : false,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
//  const sr = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 2000,
//         reset: true     
//  })

// /* -- HOME -- */
// sr.reveal('.featured-text-card',{})
// sr.reveal('.featured-name',{delay: 100})
// sr.reveal('.featured-text-info',{delay: 200})
// sr.reveal('.featured-text-btn',{delay: 200})
// sr.reveal('.social_icons',{delay: 200})
// sr.reveal('.featured-image',{delay: 300})


// /* -- PROJECT BOX -- */
// sr.reveal('.project-box',{interval: 200})

// /* -- HEADINGS -- */
// sr.reveal('.top-header',{})

// /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

// /* -- ABOUT INFO & CONTACT INFO -- */
// const srLeft = ScrollReveal({
//   origin: 'left',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srLeft.reveal('.about-info',{delay: 100})
// srLeft.reveal('.contact-info',{delay: 100})

// /* -- ABOUT SKILLS & FORM BOX -- */
// const srRight = ScrollReveal({
//   origin: 'right',
//   distance: '80px',
//   duration: 2000,
//   reset: true
// })

// srRight.reveal('.skills-box',{delay: 100})
// srRight.reveal('.form-control',{delay: 100})


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

// window.addEventListener('scroll', scrollActive)