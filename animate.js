// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });

tl = gsap.timeline();

gsap.from("nav",{
    y:-20,
    delay:3,
    opacity:0,
    duration:1,
    stagger:1
})

tl.from(".hero_sect",{
    opacity:0,
    duration:1,
    delay:7,
    y:100,
    stagger:1
})
gsap.from(".features",{
    // opacity:0,
    duration:1,
    y:-100,
    stagger:1,
    scrollTrigger:{
        trigger:".features",
        scroller:"body",
        // markers:true
    }
})
gsap.from(".gallary",{
    opacity:0,
    duration:1,
    y:-100,
    stagger:1,
    scrollTrigger:{
        trigger:".gallary",
        scroller:"body",
        // markers:true
    }
})
gsap.from(".price",{
    opacity:0,
    duration:1,
    y:-100,
    stagger:1,
    scrollTrigger:{
        trigger:".price",
        scroller:"body",
        // markers:true
    }
})
gsap.from(".join",{
    opacity:0,
    duration:1,
    y:-100,
    stagger:1,
    scrollTrigger:{
        trigger:".join",
        scroller:"body",
        // markers:true
    }
})

