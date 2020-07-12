// create an array of image sources;
"use strict";

let images = [
  "img/web-apps-with-ajax-500x386.png",
  "img/ajax-and-fetch-500x386.png",
  "img/app-building-with-vanillajs-500x386.png",
  "img/functional-programming-with-js-es6-500x386.png",
  "img/HTTP-essential-training-500x386.png",
  "img/JavaScript-essential-training-500x386.png",
];
let i = 0;

//add initial image to canvas
let canvas = document.getElementById("canvas");
let slider0 = document.querySelector(".sl0");
let slider1 = document.querySelector(".sl1");
let slider2 = document.querySelector(".sl2");
let slider3 = document.querySelector(".sl3");
let slider4 = document.querySelector(".sl4");
let slider5 = document.querySelector(".sl5");

canvas.style.background = `url(${images[0]}) center no-repeat`;

let str1 = "sl";
//add eventListeners to arrows
let arrowL = document.querySelector("#left");
let arrowR = document.querySelector("#right");

arrowL.addEventListener("click", function (e) {
  e.preventDefault;
  canvas.classList.remove("run-animation");
  void canvas.offsetWidth;
  canvas.classList.add("run-animation");
  i--;
  if (i < 0) i = images.length - 1;

  canvas.style.background = `url(${images[i]}) center no-repeat`;
  function sliderDot(pos) {
    switch (pos) {
      case 0:
        slider0.classList.add("active-slider");
        function slidercheck0() {
          if (
            slider1.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass0() {
              slider1.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass0();
          }
        }
        slidercheck0();
        break;
      case 1:
        slider1.classList.add("active-slider");
        function slidercheck1() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass1() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass1();
          }
        }
        slidercheck1();
        break;
      case 2:
        slider2.classList.add("active-slider");
        function slidercheck2() {
          if (
            slider0.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass2() {
              slider0.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass2();
          }
        }
        slidercheck2();
        break;
      case 3:
        slider3.classList.add("active-slider");
        function slidercheck3() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass3() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass3();
          }
        }
        slidercheck3();
        break;
      case 4:
        slider4.classList.add("active-slider");
        function slidercheck4() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass4() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass4();
          }
        }
        slidercheck4();
        break;
      case 5:
        slider5.classList.add("active-slider");
        function slidercheck5() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider")
          ) {
            function removeClass5() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
            }
            removeClass5();
          }
        }
        slidercheck5();
        break;
    }
  }
  sliderDot(i);

  //let lists = this.slider.querySelectorAll("li");
  //  [].forEach.call(listKid, function (el, images) {
  //    if (images[i] !== el[i]) {
  //      listKid.classList.remove("active-slider");
  //    } else {
  //      listKid.classList.add("active-slider");
  //    }
  //  });
  //
  //  for (let i = 0; i < document.querySelector("slider-parent li").length) {
  //      if
  // }

  //
  //slider.classList.add("active-slider");
  //console.log(slider);
  //
  //let x = i;
  //
  //console.log(x + 1);

  //let activator = function (i) {
  // document
  // .querySelector("." + str1 + slidePosition[i])
  // .classList.add("active");

  // };
});
arrowR.addEventListener("click", function (e) {
  e.preventDefault;
  canvas.classList.remove("run-animation");
  void canvas.offsetWidth;
  canvas.classList.add("run-animation");
  i++;
  if (i >= images.length) {
    i = 0;
  }
  canvas.style.background = `url(${images[i]}) center no-repeat`;
  function sliderDot(pos) {
    switch (pos) {
      case 0:
        slider0.classList.add("active-slider");
        function slidercheck0() {
          if (
            slider1.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass0() {
              slider1.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass0();
          }
        }
        slidercheck0();
        break;
      case 1:
        slider1.classList.add("active-slider");
        function slidercheck1() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass1() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass1();
          }
        }
        slidercheck1();
        break;
      case 2:
        slider2.classList.add("active-slider");
        function slidercheck2() {
          if (
            slider0.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass2() {
              slider0.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass2();
          }
        }
        slidercheck2();
        break;
      case 3:
        slider3.classList.add("active-slider");
        function slidercheck3() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass3() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass3();
          }
        }
        slidercheck3();
        break;
      case 4:
        slider4.classList.add("active-slider");
        function slidercheck4() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider") ||
            slider5.classList.contains("active-slider")
          ) {
            function removeClass4() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
              slider5.classList.remove("active-slider");
            }
            removeClass4();
          }
        }
        slidercheck4();
        break;
      case 5:
        slider5.classList.add("active-slider");
        function slidercheck5() {
          if (
            slider0.classList.contains("active-slider") ||
            slider2.classList.contains("active-slider") ||
            slider3.classList.contains("active-slider") ||
            slider4.classList.contains("active-slider") ||
            slider1.classList.contains("active-slider")
          ) {
            function removeClass5() {
              slider0.classList.remove("active-slider");
              slider2.classList.remove("active-slider");
              slider3.classList.remove("active-slider");
              slider4.classList.remove("active-slider");
              slider1.classList.remove("active-slider");
            }
            removeClass5();
          }
        }
        slidercheck5();
        break;
    }
  }
  sliderDot(i);
});

//arrows.forEach(function (arrow) {
//  arrow.addEventListener("click", function (e) {
//    if (e.target.id === "left") {
//      e.preventDefault;
//      canvas.classList.remove("");
//      //check to see if at beginning of array
//      i--;
//      if (i < 0) {
//        i = images.length - 1;
//      }
//      canvas.style.background = `url(${images[i]}) center no-repeat`;
//    } else if (e.target.id === "right") {
//      i++;
//      if (i >= images.length) {
//        i = 0;
//      }
//      canvas.style.background = `url(${images[i]}) center no-repeat`;
//    }
//  });
//});
