// =========== left list ===================
(function () {
    let leftListWidth = $(".left-list").outerWidth(true);
    $(".left-list").css("left", `-${leftListWidth}px`);
})();
// to open left nav
$(".home-content span").click(function () {
    let leftListWidth = $(".left-list").outerWidth(true);
    $(".left-list").animate({ left: "0px" }, 500);
    $(".home-content span").animate({ marginLeft: `${leftListWidth}px` }, 150);
    $(".home-content h1").animate({ marginLeft: "150px" }, 500);
    $(".home-content p").animate({ marginLeft: "150px" }, 500);

});
// to close left nav
$(".left-list .closebtn").click(function () {
    let leftListWidth = $(".left-list").outerWidth(true);
    $(".left-list").animate({ left: `-${leftListWidth}px` });
    $(".home-content span").animate({ marginLeft: `0px` }, 150);
    $(".home-content h1").animate({ marginLeft: "0px" }, 500);
    $(".home-content p").animate({ marginLeft: "0px" }, 500);
});
// =============== duration ====================
$("#duration h3").click(function (eInfo) {
    $(".content-singer").not($(eInfo.target).next()).slideUp(500);
    $(eInfo.target).next().slideToggle(500);
})
// ================== details =====================
// Set the date we're counting down to
let countDownDate = +new Date("2024-12-20");

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = +new Date();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    if (distance > 0) {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Set time to html 
        document.querySelector("#details .card .day").innerHTML = days + " D";
        document.querySelector("#details .card .hour").innerHTML = hours + " h";
        document.querySelector("#details .card .minute").innerHTML = minutes + " m";
        document.querySelector("#details .card .second").innerHTML = seconds + " s";
    } else {
        document.querySelector("#details .row").innerHTML = `<p class="h1 text-center text-dark">EXPIRED</p>`;
    }

}, 1000);
// ===================== form number limit======================
let count = 0;
let maxNum = 100;
document.querySelector("textarea").addEventListener("input", function () {
    let inputValue = $("textarea").val();
    count = inputValue.length;
    document.querySelector(".content-form span").innerHTML = maxNum - count;
    if (count > 100) {
        document.querySelector(".content-form span").innerHTML = "your available character finished";
    }
})