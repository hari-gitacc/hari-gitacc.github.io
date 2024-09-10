document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const navMenu = document.getElementById('myNavMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuBtn = document.querySelector('.nav-menu-btn i');
  const sections = document.querySelectorAll('section');

  let lastScrollTop = 0;
  const delta = 3;
  const navbarHeight = header.offsetHeight;

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

  // Scroll event for header shadow, active link, and headroom-like behavior
  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Headroom-like behavior
    if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
      // Scrolling down
      header.style.top = `-${navbarHeight}px`;
    } else {
      // Scrolling up
      header.style.top = '0';
    }

    lastScrollTop = scrollTop;

    // Header shadow
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link based on section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Adjust offset as needed
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
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
 document.addEventListener('DOMContentLoaded', function() {
  const scrollIconBox = document.querySelector('.scroll-icon-box');
  
  if (scrollIconBox) {
      scrollIconBox.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor behavior
          this.style.display = 'none'; // Hide the element
          
          // Optionally, you can still perform the scroll action:
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  }
});

// document.addEventListener('scroll', function() {
//   var aboutSection = document.getElementById('about');
//   var scrollButton = document.querySelector('.scroll-icon-box');
//   var aboutRect = aboutSection.getBoundingClientRect();

//   // Check if the top of the section is less than or equal to the window height
//   if (aboutRect.top <= window.innerHeight) {
//       scrollButton.style.display = 'none'; // Hide the button
//   } else {
//       scrollButton.style.display = 'block'; // Show the button if user scrolls up
//   }
// });

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