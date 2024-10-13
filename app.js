let cursor = document.querySelector("#cursor")
let main = document.querySelector("#main")

function cursor1() {
    main.addEventListener("mousemove",function cur (dets) {
        cursor.innerHTML = "Play Reel"
        gsap.to(cursor,{
            x : dets.x,
            y : dets.y,
            ease : "back.out(3)",
            duration : 2,
            
        })
    })
    
}

cursor1()