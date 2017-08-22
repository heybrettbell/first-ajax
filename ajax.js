document.addEventListener("DOMContentLoaded", function() {

var stepOneButton = document.querySelector('.step_one_button');
var stepThreeButton = document.querySelector('.step_three_button');
var sectionThree = document.querySelectorAll('section');
var stepSevenButton = document.querySelector('.step_seven_button');
var stepEightButton = document.querySelector('.step_eight_button');
var stepNineButton = document.querySelector('.step_nine_button');

stepOneButton.addEventListener('click', function() {
  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "text"
  });

});
// stepThreeButton.addEventListener('click', function() {
//   $.ajax({
//     url: "http://first-ajax-api.herokuapp.com/ping",
//     method: "GET",
//     data: {},
//     dataType: "text"
//   }).done(function (responseData) {
//     var responseP = document.createElement("p");
//     responseP.innerText = responseData;
//     sectionThree[1].appendChild(responseP);
//
// });
// });

stepThreeButton.addEventListener('click', function() {
  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/pong",
    method: "GET",
    data: {},
    dataType: "text"
  }).fail(function (responseData) {
    var responseP = document.createElement("p");
    responseP.innerText = "Better Luck Next Time!";
    sectionThree[1].appendChild(responseP);

  }).always(function () {
    console.log("Request sent!");
  });
});

stepSevenButton.addEventListener('click', function() {
  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/count",
    method: "GET",
    data: {},
    dataType: "text"
  }).done(function (responseCount) {
    var countResponse = document.createElement("p");
    countResponse.innerText = responseCount;
    sectionThree[2].appendChild(countResponse);

});
});

stepEightButton.addEventListener('click', function() {
  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/time",
    method: "GET",
    data: {timezone: 'Asia/Kolkata'},
    dataType: "text"
  }).done(function (responseTime) {
    var timeResponse = document.createElement("p");
    timeResponse.innerText = responseTime;
    sectionThree[3].appendChild(timeResponse);

});
});

stepNineButton.addEventListener('click', function() {
  $.ajax({
    url: "http://first-ajax-api.herokuapp.com/a_car",
    method: "GET",
    data: {},
    dataType: "HTML"
  }).done(function (carResponse) {
    var buildCar = document.createElement("ul");
    buildCar.innerHTML = carResponse;
    sectionThree[4].appendChild(buildCar);

});
});

});
