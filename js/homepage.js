//GLOBAL VARIABLES
let returnTrip = false;
let currentBookingStep = { step: 1 };

//LOAD ACTIONS DONE AFTER DOM IS MOUNTED
document.getElementById("step-2").style.display = "none";

//OTHER FUNCTIONS

const bookingStepHighlight = new Proxy(currentBookingStep, {
  set(target, key, value) {
    target[key] = value;
    document.querySelectorAll(".step").forEach((step) => {
      step.classList.remove("step-active");
    });
    document.getElementById(`txt-step-${value}`).classList.add("step-active");
  },
});

const incrementStep = () => {
  if (returnTrip === false && bookingStepHighlight.step === 1) {
    bookingStepHighlight.step = 3;
  } else if (returnTrip === true) {
    bookingStepHighlight.step = 2;
  }
}; // this is a buggy function lol

const showTravelerDropdown = () => {
  const travelerDropdown = document.getElementById("travelerDropdown");
  if (
    travelerDropdown.style.display === "none" ||
    travelerDropdown.style.display === ""
  ) {
    travelerDropdown.style.display = "flex";
  } else {
    travelerDropdown.style.display = "none";
  }
};
// Add event listener after DOM is loaded
document
  .getElementById("travelerBtn")
  .addEventListener("click", showTravelerDropdown);

//HANDLES TRIP BUTTONS ACTIVE STATE
const tripButtons = document.querySelectorAll(".trip-rounds");
tripButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    tripButtons.forEach((button) =>
      button.classList.remove("trip-rounds-active")
    );
    this.classList.add("trip-rounds-active");
    if (this.id === "one-way-btn") {
      returnTrip = false;
    } else if (this.id === "return-btn") {
      returnTrip = true;
    }
    //console.log(returnTrip);
    if (returnTrip === false) {
      document.getElementById("step-2").style.display = "none";
    } else {
      document.getElementById("step-2").style.display = "flex";
    }
  });
});

const search = () => {
  const elementIDs = {
    destinationInputId: "destination",
    originInputId: "from-origin",
    departDateInputId: "depart-date",
    returnDateInputId: "return-date",
  };
  const searchData = {
    numberOfTravelers: 1,
    returnTrip: returnTrip,
    origin: "",
    destination: "",
    departureDate: "",
  };
  for (const IdKey of elementIDs) {
    const value = document.getElementById(elementIDs[IdKey]).value;
  }
};

const flights = document.querySelectorAll(".flight-card");
flights.forEach((flight) => {
  flight.addEventListener("click", function () {
    if (currentBookingStep === 1) {
      sessionStorage.setItem(
        "departingFlight",
        flight.getAttribute("flight-code")
      );
    } else if (currentBookingStep === 2) {
      sessionStorage.setItem(
        "returningFlight",
        flight.getAttribute("flight-code")
      );
    }
    incrementStep();
    console.log(bookingStepHighlight, currentBookingStep, "ttt");
    //const f = sessionStorage.getItem("departingFlight");
    //console.log(f);
  });
});

/*
const navStepHighlight = () => {
  let step = "step-"
  if () {

  }
  document.getElementById()
}
*/

//ANYTHING ABOVE THIS COMMENT WORKS FINE

const dateInput = document.getElementById("return-date");
const today = new Date();

// Set minimum date to today
dateInput.min = today.toISOString().split("T")[0];

// Set maximum date (e.g., 1 year from today)
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 1);
dateInput.max = maxDate.toISOString().split("T")[0];

// Set default date (e.g., 1 week from today)
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + 7);
dateInput.valueAsDate = defaultDate;
