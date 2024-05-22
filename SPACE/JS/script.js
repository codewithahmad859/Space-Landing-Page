var body = document.body;
var cursor = document.querySelector("#cursor"); // Corrected selector for the cursor element
var h1 = document.querySelectorAll(".h1")
var tl = gsap.timeline()
body.addEventListener('mousemove', function(e) {
    gsap.to(cursor, {
        x: e.clientX, // Updated to clientX for better cross-browser compatibility
        y: e.clientY  // Updated to clientY for better cross-browser compatibility
    });
});

gsap.to('.fact1', {
    opacity: 1,
    duration: 1,
    delay: .4,
    scrollTrigger: "#about"
});

gsap.to('.circle1', {
    opacity: 1,
    delay: .4,
    duration: 1,
    scrollTrigger: "#about"
});
gsap.to('.fact2', {
    opacity: 1,
    duration: 1,
    delay: 1.5,
    scrollTrigger: "#about"
});

gsap.to('.circle2', {
    opacity: 1,
    delay: 1.5,
    duration: 1,
    scrollTrigger: "#about"
});

gsap.to('.fact3',{
    opacity: 1,
    delay: 1,
    duration: 1,
    scrollTrigger: "#about"
})
gsap.to('.circle3',{
    opacity: 1,
    delay: 1,
    duration: 1,
    scrollTrigger: "#about"
})
gsap.to('.fact4',{
    opacity: 1,
    delay: 2,
    duration: 1,
    scrollTrigger: "#about"
})
gsap.to('.circle4',{
    opacity: 1,
    delay: 2,
    duration: 1,
    scrollTrigger: "#about"
})

tl.from(h1,{
    y:50,
    delay:1,
    stagger:.7,
    duration:2,
    opacity:0
})
 

