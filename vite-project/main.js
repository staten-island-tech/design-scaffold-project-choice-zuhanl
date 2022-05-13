import './style.css';

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


