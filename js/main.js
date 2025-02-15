


var ts = gsap.timeline({ repeat: -1, repeatDelay: 0 });


ts.to(".logo-icon", {
  rotation: 90,
  duration: 2
})
.to(".logo-icon", {
  rotation: 180,
  duration: 2
})
.to(".logo-icon", {
  rotation: 270,
  duration: 2
})
.to(".logo-icon", {
  rotation: 360,
  duration: 2
});



// Select the arrow line and arrowhead
const arrowLine = document.querySelector(".about-arrow-line ");
const arrowHead = document.querySelector(".about-arrow-angle");

// Get the total length of the path
const lineLength = arrowLine.getTotalLength();

// Set initial stroke-dasharray and stroke-dashoffset values for the line
arrowLine.style.strokeDasharray = lineLength;
arrowLine.style.strokeDashoffset = lineLength;

// GSAP animation for the line
gsap.to(arrowLine, {
  strokeDashoffset: 0, // Animate to reveal the line
  duration: 3, // Animation duration
  scrollTrigger: {
    trigger: ".about-arrow-line",
    scroller:"#main-container", // Element to trigger the animation
    start: "top 15%", // Start when the SVG enters the viewport
    end: "top 0%", 
    scrub: true,
    
   
    
  },
});

// GSAP animation for the arrowhead (fade in)
gsap.fromTo(
  arrowHead,
  { opacity: 0, scale: 0.5 }, // Start with transparency and smaller size
  {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".about-arrow-angle",
      scroller:"#main-container",
      
      start: "top 15%", // Arrowhead appears after the line is mostly drawn
      end: "top 0%",
      scrub: true,
      
      
    },
  }
);



gsap.from(".step-box-design .process-col",{
  y:100,
  opacity:0,
  
  stagger:0.5,
  scrollTrigger: {
      trigger: ".step-box-design",
      scroller: "#main-container",
      start: "top top",
      end: "+=1200",
      scrub: true, 
      pin: true, 

    }
});

gsap.to("#projects .project-details",{
  x:"-110%",
  scrollTrigger: {
      trigger: "#projects",
      scroller: "#main-container",
      start: "top top",
      end: "+=1000",
      scrub: true, 
      pin: true, 
      duration:2,
      
     
    }
});





const imgDivs = document.querySelectorAll(".imaget");
imgDivs.forEach((imgDiv) => {
    imgDiv.addEventListener("mouseenter", function () {
        cursor.innerHTML = "View More";
        gsap.to(cursor, {
            scale: 6,
            padding:5,
            lineHeight:1,
            
        });
    });

    imgDiv.addEventListener("mouseleave", function () {
        cursor.innerHTML = "";
        gsap.to(cursor, {
            scale: 1,
            padding:0,
        });
    });
});




function addVideoHoverEffect(elements, videoSrc) {
  elements.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // Create a video element dynamically
      const videoElement = document.createElement("video");
      videoElement.src = videoSrc; // Video source passed as an argument
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.style.width = "100%"; // Match the size of the cursor
      videoElement.style.height = "100%";
      videoElement.style.objectFit = "cover"; // Ensures the video fits within the cursor
      videoElement.id = "cursor-video"; // Add an ID for easy reference

      // Clear any existing content in the cursor and append the video
      cursor.innerHTML = "";
      cursor.appendChild(videoElement);

      // Animate the cursor on hover
      gsap.to(cursor, {
        scale: 12,
        backgroundColor: "transparent", // Make background transparent for the video
         // Optional blend mode
      });
    });

    item.addEventListener("mouseleave", function () {
      // Remove the video from the cursor
      const videoElement = document.querySelector("#cursor-video");
      if (videoElement) {
        videoElement.remove();
      }

      // Clear the cursor content and reset its styles
      cursor.innerHTML = "";
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "black", // Reset background color
       // Reset blend mode
      });
    });
  });
}

// Add hover effect for .brand-text with its video
const brandTextElements = document.querySelectorAll(".brand-text");
addVideoHoverEffect(brandTextElements, "video/cursor-websites.mp4");

// Add hover effect for .experience-text with its video
const experienceTextElements = document.querySelectorAll(".experience");
addVideoHoverEffect(experienceTextElements, "video/cursor-brands.mp4");


gsap.to("#testimonials .testimonials-compliment",{
  x:"-100%",
  scrollTrigger: {
      trigger: "#testimonials",
      scroller: "#main-container",
      start: "top top",
      end: "+=700",
      scrub: 0.5, 
      pin: true, 
      duration:1,
      
     
    }
});



gsap.to(".design-purpose .btn-loop", {
  x: "-130%",              
  duration: 20,             
  repeat: -1,             
  ease: "linear",          
          
});




const vidDivs = document.querySelectorAll(".video-pl");

vidDivs.forEach((vidDiv) => {
  vidDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "Play";
    gsap.to(cursor, {
      scale: 6,
      padding: 5,
      lineHeight: 1,
    });
  });

  vidDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      scale: 1,
      padding: 0,
    });
  });

  // Toggle fullscreen on click
  vidDiv.addEventListener("click", function (event) {
    // Prevent default play/pause behavior
    event.preventDefault();

    // Toggle fullscreen
    if (!document.fullscreenElement) {
      vidDiv.requestFullscreen()
        .then(() => console.log("Entered fullscreen"))
        .catch((err) => console.error("Error entering fullscreen:", err));
    } else {
      document.exitFullscreen()
        .then(() => console.log("Exited fullscreen"))
        .catch((err) => console.error("Error exiting fullscreen:", err));
    }
  });
});




// Create a timeline with ScrollTrigger
const riseUpTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#rise-up", // Element to trigger the timeline
    scroller: "#main-container", // Custom scroller (use "body" if not applicable)
    start: "top top", // Start animation when #rise-up hits the center of the viewport
    end: "+=1000", // Continue animation for 700px of scrolling
    scrub: 0.5, // Smooth scrubbing effect
    pin: true, // Pins the section during the scroll
  },
});

// Add animations to the timeline
riseUpTimeline
  .to("#rise-up .video-scale", {
    scale:1,
    duration: 1,
  })

  .to("#rise-up .colabrat", {
    opacity:1,
    duration: 1,
  })
  .to("#rise-up .left-mask", {
    x: 0, // Move left mask to its original position
    duration: 1, // Duration of the animation
    ease: "bounce.out", // Smooth easing for the movement
  })
  .to(
    "#rise-up .right-mask",
    {
      x: 0, // Move right mask to its original position
      duration: 1,
      ease: "bounce.out",
    },
    "<" // Start this animation at the same time as the left-mask animation
  )
  .to(
    "#rise-up .logo-textanimate h2",
    {
      y: 0, // Move the text into view
      duration: 1,
      ease: "bounce.out", // Bounce easing for the text
    },
    "-=0.5" 
  );






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
 
