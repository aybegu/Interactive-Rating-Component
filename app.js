const rating_circles = document.querySelectorAll(".circle");
const submit_button = document.querySelector(".submit_button");
const rate_point = document.getElementById("rate");
const rating_section = document.querySelector(".rating_section");
const thanks_section = document.querySelector(".thanks_section");
let rate = null;

rating_circles.forEach((rating_circles) => {
    rating_circles.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active){
            active.classList.remove("checked");
        }
        const the_circle = e.target;
        the_circle.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate);
    });
});


submit_button.addEventListener("click", () => {
    if (rate) {
      rate_point.innerText = rate;
      rating_section.classList.add("hidden");
      thanks_section.classList.remove("hidden");
    }
  });
