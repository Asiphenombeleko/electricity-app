// DOM element(s) references
const topupRadioBtnElement = document.querySelector(".topup");
const topupNowElement = document.querySelector(".topupNow");
const unitsAvailableElement = document.querySelector(".unitsAvailable");
const totalUnitsElement = document.querySelector(".totalUnits");
const totalAmountElement = document.querySelector(".totalAmount");
const advanceTakenElement = document.querySelector(".advanceTaken");
const radioBtnElement = document.querySelector(".radio");
const useNowElement = document.querySelector(".useNow");
const usageRadioElement = document.querySelector(".usage");

if (localStorage["unitsAvailable"]) {
    totalAvailableUnits= JSON.parse(localStorage["unitsAvailable"]);
}

// Factory Function instance
const electricity = Electricity();

// DOM events here
topupNowElement.addEventListener("click", function () {
  var topupRadioBtnElement = document.querySelector(
    'input[name="buyElectricity"]:checked'
  );
  alert("hey");
  var topup = topupRadioBtnElement.value();
  if (topup) {
    topUpElectricity();

  }
  
});

// DOM events here
useNowElement.addEventListener("click", function () {
  var radioBtnElement = document.querySelector(
    'input[name="useElectricity"]:checked'
  );
  var radioBtn = radioBtnElement.value();
  alert("hey");
  if (radioBtn) {
    useAppliance();
  }
});
