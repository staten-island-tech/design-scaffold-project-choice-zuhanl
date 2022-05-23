import './style.css';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({scrollTrigger:".Food",delay: "0.3"});
const Bru = gsap.timeline({scrollTrigger:".att",delay: "0.3"});
const cheese = gsap.timeline({scrollTrigger:".region",delay: "0.3"})

tl.from(".Food", {opacity: 0, duration: 0.3, ease: "ease-out"});
Bru.from(".att", {opacity: 0, duration: 0.3, ease: "ease-out"});
cheese.from(".region", {opacity:0, duration: 0.3, ease: "ease-out"});

const DOMSelectors = {
    buttontheme: document.getElementById("btn69"),
    hometheme: document.getElementById("btn1"),
    foodtheme: document.getElementById("btn2"),
    attrtheme: document.getElementById("btn3"),
    regiontheme: document.getElementById("btn4"),
    Fod: document.getElementById("Fod"),
    Hom: document.getElementById("Hom"),
    At: document.getElementById("At"),
    Reg: document.getElementById("Reg"),
};
  
DOMSelectors.buttontheme.addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });


