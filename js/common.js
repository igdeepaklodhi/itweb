gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main-container"),
  smooth: true,
  smartphone: {
    smooth: true, // Enable smooth scroll on mobile
  },
  tablet: {
    smooth: true, // Enable smooth scroll on tablet
  }
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


var main = document.querySelector("body")
var cursor = document.querySelector(".cursor")



main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease: "back.out",
        
        
    })
})

const texts = document.querySelectorAll(".hover-text");

texts.forEach((text) => {
  text.addEventListener("mousemove", (event) => {
    const rect = text.getBoundingClientRect(); // Get the position and size of the element
    const offsetX = (event.clientX - rect.left - rect.width / 2) / 5; // Horizontal movement
    const offsetY = (event.clientY - rect.top - rect.height / 2) / 5; // Vertical movement

    // Apply GSAP animation for smooth movement
    gsap.to(text, {
      x: offsetX,
      y: offsetY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  text.addEventListener("mouseleave", () => {
    
    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});


var tl = gsap.timeline()
gsap.to(".query .btn-loop", {
    x: "-200%",              
    duration: 20,             
    repeat: -1,             
    ease: "linear",          
            
  });

  const navAnimated = document.querySelectorAll(".nav-animation");
navAnimated.forEach((navAnimated) => {
  navAnimated.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
          scale: 8,
          backgroundColor:"white",
             mixBlendMode: 'difference'
          
   
      });
    
  });

  navAnimated.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
          scale: 1,
          backgroundColor:"black",
          mixBlendMode: 'normal'
         
      });
  });
});


const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav-mobile");

const nv = gsap.timeline({ 
    paused: true, 
    onStart: () => { 
        // 🟢 Header animation will play every time menu opens
        gsap.from("#header-menu", { 
            opacity: 0, 
            y: -40, 
            duration: 0.6,
            delay: 0.8
        });
        gsap.from(".mobile-time", { 
          opacity: 0, 
          y: 40, 
          duration: 0.6,
          delay: 0.8
      });
      gsap.from(".responsive-content ul li", { 
        opacity: 0, 
    y: 20, 
    stagger: 0.2, 
    duration: 0.6,
    delay: 0.8, 
    });
    gsap.from(".media-responsive ul li", { 
      opacity: 0, 
  y: 20, 
  stagger: 0.2, 
  duration: 0.6,
  delay: 0.8, 
  });
    } 
});

// 🟢 Navigation Menu Animation (Reversible)
nv.to(nav, { 
    opacity: 1, 
    visibility: "visible", 
    duration: 0.5, 
    ease: "power2.out" 
})

  .to(".before-nav-anim", { 
    y:"-100%",
    stagger: 0.2, 
    duration: 0.2 
  }, "-=0.1")

  .to(".befor-nav-animate", { 
    zIndex:"-1"
  });
  

  

// 🟢 Open Menu
menuBtn.addEventListener("click", () => {
    nv.play();
});

// 🔴 Close Menu (Reverse Only `nv`, Not Header)
closeBtn.addEventListener("click", () => {
    nv.reverse();
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert hours to 12-hour format
  hours = hours % 12 || 12; // If hours is 0, display 12

  // Select all elements with class 'clock' and update them
  document.querySelectorAll('.clock').forEach(clockElement => {
      clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  });
}

// Update clock every second
setInterval(updateClock, 1000);

// Call once to avoid delay
updateClock();

