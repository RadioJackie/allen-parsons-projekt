// Recipe of the Day variables
var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php"
var currentROD = "";
var lastLoad = "";
var currentDay = moment().format("MMDDYY");
var currentRecipe = {};

initialize();

// initializes nav bar
jQuery(document).ready(function(){
    jQuery('.sidenav').sidenav();
  });

// initializes recipe of the day by checking if today was the last load, and rendering either a new random recipe or the one saved to local storage
function initialize() {
    loadLastLoad();
    if (lastLoad === currentDay) {
        loadCurrentRecipe();
        renderRecipe();
    }
    else {
        loadRandomRecipe();
    }
    if (localStorage.getItem("switch") == "light" ){
        if (jQuery("body").hasClass("dark")) {
            jQuery("body").removeClass("dark");
            jQuery(".inner-switch").text("OFF");
        }
    }
    else if (localStorage.getItem("switch") == "dark"){
        jQuery("body").addClass("dark");
        jQuery(".inner-switch").text("ON");
    }
    
    else {
        if (jQuery("body").hasClass("dark")) {
            jQuery("body").removeClass("dark");
            jQuery(".inner-switch").text("OFF");
        }
    }
}

// loads a random recipe, updates last load and saves info to local storage
function loadRandomRecipe() {
    var j$ = jQuery.noConflict();
    j$.ajax({
        url: "https://www.themealdb.com/api/json/v1/1/random.php",
        method: "GET"
    }).then(function (response) {
        currentRecipe = response;
        lastLoad = currentDay;
        saveLastLoad();
        saveCurrentRecipe();
        renderRecipe();
    });
}

// save lastLoad into local memory
function saveLastLoad() {
    localStorage.setItem("lastLoad", lastLoad);
}

// retrieves lastLoad from local memory
function loadLastLoad() {
    var tempLoad = localStorage.getItem("lastLoad");
    if (tempLoad !== null) {
        lastLoad = tempLoad;
    }
}

// save currentRecipe into local memory
function saveCurrentRecipe() {
    localStorage.setItem("currentRecipe", JSON.stringify(currentRecipe));
}

// load currentRecipe from local memory
function loadCurrentRecipe() {
    var tempRecipe = JSON.parse(localStorage.getItem("currentRecipe"));
    if (tempRecipe !== null) {
        currentRecipe = tempRecipe;
    }
}

// renders currently loaded recipe into HTML
function renderRecipe() {
    var j$ = jQuery.noConflict();
    j$("#rodTitle").text(currentRecipe.meals[0].strMeal);
    j$("#rodImg").attr("src", currentRecipe.meals[0].strMealThumb);
    j$("#rodLink").attr("href", currentRecipe.meals[0].strSource);

    j$("#rodIngredientSpan").text(currentRecipe.meals[0].strIngredient1)
    if (currentRecipe.meals[0].strIngredient2 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient2);
    }
    if (currentRecipe.meals[0].strIngredient3 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient3);
    }
    if (currentRecipe.meals[0].strIngredient4 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient4);
    }
    if (currentRecipe.meals[0].strIngredient5 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient5);
    }
    if (currentRecipe.meals[0].strIngredient6 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient6);
    }
    if (currentRecipe.meals[0].strIngredient7 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient7);
    }
    if (currentRecipe.meals[0].strIngredient8 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient8);
    }
    if (currentRecipe.meals[0].strIngredient9 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient9);
    }
    if (currentRecipe.meals[0].strIngredient10 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient10);
    }
    if (currentRecipe.meals[0].strIngredient11 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient11);
    }
    if (currentRecipe.meals[0].strIngredient12 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient12);
    }
    if (currentRecipe.meals[0].strIngredient13 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient13);
    }
    if (currentRecipe.meals[0].strIngredient14 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient14);
    }
    if (currentRecipe.meals[0].strIngredient15 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient15);
    }
    if (currentRecipe.meals[0].strIngredient16 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient16);
    }
    if (currentRecipe.meals[0].strIngredient17 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient17);
    }
    if (currentRecipe.meals[0].strIngredient18 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient18);
    }
    if (currentRecipe.meals[0].strIngredient19 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient19);
    }
    if (currentRecipe.meals[0].strIngredient20 !== "") {
        j$("#rodIngredientSpan").text(j$("#rodIngredientSpan").text() + ", " + currentRecipe.meals[0].strIngredient20);
    }
}

// added joke to index page
jQuery.ajax({
    url:"https://api.spoonacular.com/food/jokes/random?apiKey=fe159fe9965f4cb28a5a0f45fd2ac4cb",
    
    method: "GET",
  }).then(function (response) {
   

    var funnyJoke= joke(response)

    jQuery(".joke").html(funnyJoke);


function joke(response) {
    return (
      "<p>" +
      response.text +
      "<p>" 
  )}});


  jQuery(".inner-switch").on("click", function () {
    if (jQuery("body").hasClass("dark")) {
        jQuery("body").removeClass("dark");
        jQuery("#row-1").removeClass("dark");
        jQuery(".inner-switch").text("OFF");
        localStorage.setItem("switch", "light")

    } else {
        jQuery("body").addClass("dark");
        jQuery("#row-1").addClass("dark");
        jQuery(".inner-switch").text("ON");
        localStorage.setItem("switch", "dark")

    }
});
