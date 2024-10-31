const searchData = {
  numberOfTravelers: 1,
  returnTrip: false,
  origin: "",
  destination: "",
  departureDate: "",
  //...(returnTrip ? { returnDate: "" } : {}),
}; //test this

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
