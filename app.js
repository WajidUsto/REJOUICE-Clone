let cursor = document.querySelector("#cursor");
let page1 = document.querySelector(".page-1");
let page2 = document.querySelector(".page-2");

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
            duration: 0.8,
        });
    });

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
        });
    });
    page1.addEventListener("mouseleave", function (dets) {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0,
        });
    });
}
cursorEffect();

// function page2Animation() {

// }

// page2Animation()

let tl = gsap.timeline();

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
        markers : true,
        scrub: 2,
    },
});

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
        markers : true,
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
        markers : true,
        scrub: 2,
    },
});
tl.from(".page-3-top", {
    y: 100,
    duration: 2,
    opacity: 0,
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".page-3",
        scroller: "#main",
        start: "top 50%",
        end: "bottom 100%",
        markers : true,
        scrub: 1,
    },
});
