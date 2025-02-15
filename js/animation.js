// Check if the #founders section exists before applying any animations
const foundersElement = document.querySelector("#founders");

if (foundersElement) {
  // Pin the #founders section during scroll
  gsap.to(foundersElement, {
    scrollTrigger: {
      trigger: foundersElement,
      scroller: "#main-container",  // Make sure the scroller is correct
      start: "top top",
      end: "+=1000",  // Adjust the scroll range as needed
      scrub: true,
      pin: true,
      // Optional: To see the start/end points of ScrollTrigger
    }
  });

  // Check if the first cube exists and animate its rotation
  const firstCube = document.querySelector("#founders .cube.is--1");
  if (firstCube) {
    gsap.to(firstCube, {
      rotationX: 90,
      scrollTrigger: {
        trigger: foundersElement,
        scroller: "#main-container",  // Ensure scroller is correct
        start: "top top",
        end: "+=1000", // Adjust as needed
        scrub: true,
        // Optional: To see the start/end points of ScrollTrigger
      }
    });
  }

  // Check if the second cube exists and animate its rotation
  const secondCube = document.querySelector("#founders .cube.is--2");
  if (secondCube) {
    gsap.to(secondCube, {
      rotationX: -90,
      scrollTrigger: {
        trigger: foundersElement,
        scroller: "#main-container",  // Ensure scroller is correct
        start: "top top",
        end: "+=1000", // Adjust as needed
        scrub: true,
        // Optional: To see the start/end points of ScrollTrigger
      }
    });
  }
}



const elementt = document.querySelector("#query-section .query-section");
const triggerElement = document.querySelector("#query-section");

if (elementt && triggerElement) {
    gsap.to(elementt, {
        scale: 0.7,
        scrollTrigger: {
            trigger: triggerElement,
            scroller: "#main-container",
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
           
        }
    });
} 



const agencyImageElement = document.querySelector("#agency-image .agency-img");

if (agencyImageElement) {
    gsap.to(agencyImageElement, {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "#agency-image",
            scroller: "#main-container",
            start: "top 50%",
            end: "bottom 50%",
            scrub: true, 
        }
    });
}




const skewa = document.querySelectorAll(".skew-div");

// Loop through each element with the class .skew-div
skewa.forEach((skewas) => {
  let scrollTrigger = ScrollTrigger.create({
    trigger: skewas,
    scroller: "#main-container",
    start: "top 50%",
    end: "bottom top",
    scrub: 0.5,
    onUpdate: (self) => {
      // Update the skew based on scroll velocity
      let skewValue = self.getVelocity() / 200; // Adjust divisor for smoother skew
      gsap.to(skewas, {
        skewY: skewValue,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    onLeave: () => resetSkew(skewas),
    onEnterBack: () => resetSkew(skewas),
    onLeaveBack: () => resetSkew(skewas),
  });

  // Function to reset the skew
  function resetSkew(element) {
    gsap.to(element, {
      skewY: 0, // Reset to the original state
      duration: 0.5,
      ease: "power1.out",
    });
  }
});






