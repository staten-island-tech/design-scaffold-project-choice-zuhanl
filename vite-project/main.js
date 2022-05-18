import './style.css';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({scrollTrigger:".pic",delay: "0.3"});

tl.from("h1", {opacity: 0, duration: 0.3, ease: "ease-out"});
tl.from(".home", {opacity: 0, duration: 0.3, ease: "ease-out"});
tl.from(".pic", {opacity: 0, duration: 0.3, ease: "ease-out"});



const DOMSelectors = {
    buttontheme: document.getElementById("btn69"),
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


