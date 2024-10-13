let cursor = document.querySelector("#cursor")
let page1 = document.querySelector(".page-1")

function cursorEffect() {
    page1.addEventListener("mousemove",function cur (dets) {
        cursor.innerHTML = "Play Reel"
        gsap.to(cursor,{
            x : dets.x,
            y : dets.y,
            ease : "back.out(2)",
            duration : 0.8,
        })
    })
page1.addEventListener("mouseenter",function () {
    gsap.to(cursor,{
        opacity : 1,
        scale : 1
    })
})
page1.addEventListener("mouseleave",function (dets) {
    gsap.to(cursor,{
        opacity : 0,
        scale : 0
    })
})
}
cursorEffect()