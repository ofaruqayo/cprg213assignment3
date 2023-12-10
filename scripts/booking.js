/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let dayCounter = 0;
let totalCost = 0;
let calculatedCost = document.getElementById("calculated-cost");
const daysOfWeek = document.getElementsByTagName("li");
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearBtn = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let number = [];
for (let i = 0; i < daysOfWeek.length; i++) {
    number.push(i);
}
number.forEach(function (day) {
    daysOfWeek[day].onclick = function(){
        if (daysOfWeek[day].classList.contains("clicked")) {
            dayCounter = dayCounter;
        }else{
            daysOfWeek[day].classList.add("clicked");
            dayCounter++;
        }
        display();
    };
});
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", function (){
    costPerDay = 35;
    dayCounter = 0;
    totalCost = 0;
    calculatedCost.innerHTML = 0;
    for (let i = 0; i < daysOfWeek.length; i++) {
        daysOfWeek[i].classList.remove("clicked");
    }
    halfDay.classList.remove("clicked");
    fullDay.classList.add("clicked");
});



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click", function(){
    costPerDay = 20;
    fullDay.classList.remove("clicked");
    halfDay.classList.add("clicked");
    totalCost = dayCounter * costPerDay;
    display();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", function(){
    costPerDay = 35;
    halfDay.classList.remove("clicked");
    fullDay.classList.add("clicked");
    totalCost = dayCounter * costPerDay;
    display();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function automaticDisplay(){
    if (halfDay.classList.contains("clicked")) {
        totalCost = dayCounter*costPerDay;
    }else if (fullDay.classList.contains("clicked")) {
        totalCost = dayCounter * costPerDay;
    }
}
function display() {
    automaticDisplay();
    calculatedCost.innerHTML = totalCost;
    return calculatedCost.innerHTML;
}