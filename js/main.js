var currentSection = 1;
var bg = $(".bg-gradient");
var bgTop = $(".bg-gradient-top")
var back = false;

var gradients = [
    "linear-gradient(#ff5a5a 50%, #42264c)",
    "linear-gradient(#51c46a 50%, #036378)",
    "linear-gradient(#ad2bcf 50%, #0be3f1)",
    "linear-gradient(#cf2b40 50%, #2f0f0f)"
];

var currentGradient = 0;

function transGrad (newGrad) {

    if (back) {
        bgTop.css("background", gradients[newGrad]);
        bgTop.css("opacity", 1);
    } else {
        bg.css("background", gradients[newGrad]);
        bgTop.css("opacity", 0);
    }

    back = !back;
}

function squig (num) {
    document.querySelector(".squig1").classList.remove("active-squig");
    document.querySelector(".squig2").classList.remove("active-squig");
    document.querySelector(".squig3").classList.remove("active-squig");
    document.querySelector(".squig4").classList.remove("active-squig");

    var currentSquig = ".squig" + num;
    document.querySelector(currentSquig).classList.add("active-squig");
}

window.addEventListener('scroll', function(e) {


    if (window.pageYOffset >= $(".proj-4").offset().top-150) {
        if (currentSection != 4) {
            transGrad(3);
            currentSection = 4;

            squig(4);
        }

    } else if (window.pageYOffset >= $(".proj-3").offset().top-150) {
        if (currentSection != 3) {
            transGrad(2);
            currentSection = 3;

            squig(3);
        }

    } else if (window.pageYOffset >= $(".proj-2").offset().top-150) {
        if (currentSection != 2) {
            transGrad(1);
            currentSection = 2;

            squig(2);
        }

    } else if (window.pageYOffset >= $(".proj-1").offset().top-150) {
        if (currentSection != 1) {
            transGrad(0);
            currentSection = 1;

            squig(1);
        }
    }

});
