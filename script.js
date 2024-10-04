
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}





function navAnimation() {
  var nav = document.querySelector("nav")

  nav.addEventListener("mouseenter", function () {
      let tl = gsap.timeline()

      tl.to(".bottom-nav", {
          height: "21vh",
          duration: 0.5
      })
      tl.to(".nav-part2 h5", {
          display: "block",
          duration: 0.1

      })
      tl.to(".nav-part2 h5 span", {
          y: 0,
          // duration:0.3,
          stagger: {
              amount: 0.5
          }
      })
  })
  nav.addEventListener("mouseleave", function () {
      let tl = gsap.timeline()
      tl.to(".nav-part2 h5 span", {
          y: 25,
          stagger: {
              amount: 0.2
          }
      })
      tl.to(".nav-part2 h5", {
          display: "none",
          duration: 0.1
      })
      tl.to(".bottom-nav", {
          height: 0,
          duration: 0.2
      })
  })
}

 function page2animation(){
    var rightelem =document.querySelectorAll(".right-elem");
rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter", ()=>{
        gsap.to(elem.childNodes[3] ,{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave", ()=>{
        gsap.to(elem.childNodes[3] ,{
            opacity:0,
            scale:0

        })
    })
    elem.addEventListener("mousemove" , (dets)=>{
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-150
        })
       
        })

})
 }

  function page3VideoAnimation(){
    var page3center =document.querySelector(".page3-center");
  var video =document.querySelector(".page3 video");
  page3center.addEventListener("click", ()=>{
    video.play();
    gsap.to(video ,{
        transform:"scaleX(1)  scaleY(1)",
        opacity:1,
        borderRadius:0
    })
  })
  video.addEventListener("click",()=>{
    video.pause()
    gsap.to(video ,{
        transform:"scaleX(0.7)  scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
  })

  var sections =document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity =1
        elem.childNodes[3].play()

    })
    elem.addEventListener("mouseleave",()=>{
        elem.childNodes[3].style.opacity =0
        elem.childNodes[3].load()

    })

})
  }

  function page7animaiton(){
    gsap.from(".bottom7-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".bottom7-part2",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from(".bottom7-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".bottom7-part3",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from(".bottom7-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:".bottom7-part4",
            scroller:".main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}

function loadinganimetion(){
    var tl = gsap.timeline()
tl.from(".page1",{
    opacity:0,
    duration:0.1,
    delay:0.2

})
tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"200px",
    duration:1.5,
    ease:"expo.out"

    
})
tl.from("nav", {
    opacity:0,
    delay:-0.2
})
tl.from(".page1 h1 , .page1 p ,.page1 div" , {
    opacity:0,
    duration:0.5,
    stagger:0.2
})

}



locomotive()
loadinganimetion();
navAnimation();
page2animation();
page3VideoAnimation();
page7animaiton();





