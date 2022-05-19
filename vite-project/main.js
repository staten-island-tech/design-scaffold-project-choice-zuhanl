import './style.css';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({scrollTrigger:".Food",delay: "0.2"});

tl.from("h2", {opacity: 0, duration: 0.2, ease: "ease-out"});
tl.from(".Food", {opacity: 0, duration: 0.2, ease: "ease-out"});
tl.from(".att", {opacity: 0, duration: 0.2, ease: "ease-out"});




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


