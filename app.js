let cursor = document.querySelector("#cursor");
let cursor2 = document.querySelector("#cursor2");
let page1 = document.querySelector(".page-1");
let page2 = document.querySelector(".page-2");
let page5 = document.querySelector("#page-5");

// Loader


let ld = gsap.timeline()

function loader() {

    ld.from("#loader h3", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 2
    })
    ld.to("#loader h3", {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
    ld.to("#loader", {
        opacity: 0,
        duration: 0.5
    })
    ld.to("#loader", {
        display: "none",
        duration: 0.5
    })
    ld.from(".page-1-content h1 span", {
        y: 80,
        opacity: 0,
        stagger: 0.10
    })
    ld.from(cursor,{
        delay : 2,
        duration : 1,
        opacity : 0
    })
}

loader()


function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect() {
    page1.addEventListener("mousemove", function cur(dets) {
        cursor.innerHTML = "Play Reel";
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            ease: "back.out(2)",
            duration: 1.5,
        });
    });

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
        });
    });
    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0,
        });
    });
}
cursorEffect();

// page2Animation()

let tl = gsap.timeline();

// Page 1 Animation
// Page 1 Animation

function mainAnimation() {
    tl.from(".page-2-upper-text h1 span", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });

    // Page 2 Animation
    // Page 2 Animation

    tl.from(".page-2-line", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });
    tl.from(".page-2-bottom-text", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });
    tl.from(".page-3-top", {
        y: 100,
        duration: 3,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page-3-top",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });

    // page 4 Animation
    // page 4 Animation


    tl.from(".page-4-upper-text h1 span", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.8,
        scrollTrigger: {
            trigger: ".page-4-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });

    tl.from(".page-4-line", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page-4-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });
    tl.from(".page-4-bottom-text span", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.6,
        scrollTrigger: {
            trigger: ".page-4-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        }
    });

}
mainAnimation()


// page 5 Animation
// page 5 Animation

function page5video() {
    tl.from("#page-5", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#cursor2",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    })
}
page5video()

function cursorEffect2() {
    page5.addEventListener("mousemove", function cur2(dets) {
        cursor2.innerHTML = "Take One!";
        gsap.to(cursor2, {
            x: dets.x,
            y: dets.y,
            ease: "expo.out",
            duration: 3,
            transform: "translate(-50%, -50%)"
        });
    });

    page5.addEventListener("mouseenter", function () {
        gsap.to(cursor2, {
            opacity: 1,
            scale: 1,
        });
    });
    page5.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            opacity: 0,
            scale: 0,
        });
    });
}
cursorEffect2()

function page6text() {
    tl.from(".page-6-upper-text h1 span", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.8,
        scrollTrigger: {
            trigger: "#page-6-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });

    tl.from(".page-6-line", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page-6-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });
    tl.from(".page-6-bottom-text span", {
        y: 100,
        duration: 2,
        opacity: 0,
        stagger: 0.6,
        scrollTrigger: {
            trigger: "#page-6-content",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        }
    });
}
page6text()

// page 8 Animation
// page 8 Animation


    tl.from(".bottom-text h1", {
        y: 100,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page-8",
            scroller: "#main",
            start: "top 50%",
            end: "bottom 100%",
            // markers : true,
            scrub: 2,
        },
    });


// Footer Animation

tl.from(".bottom-container span svg", {
    y: -70,
    duration: 2,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".bottom-container span",
        scroller: "#main",
        start: "top 70%",
        end: "bottom 55%",
        markers : true,
        scrub: 2,
    },
});


// Swiper Js


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
});