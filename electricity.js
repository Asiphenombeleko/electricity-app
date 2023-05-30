function Electricity() {
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };
  var costAmount = 0
  //create a variable and assign it to false if no advance was taken
  var advancesTaken = false;
  var advancesNotTaken = false;
  //create a variable to store available units

  let unitsAvailable = 0;
  //create a variable for the advance top up and give it a value of 0
  let advance = 0;
  // create a variable that will store used electricity total
  let usedUnits = 0;
  //if the value of amount is 10 the increament units available with 7
  function topUpElectricity(amount) {
    if (advanceTaken(amount)) {
      amount -= advance;
      return advancesTaken;
    } else {
      if (amount == 10) {
        unitsAvailable += 7;
        return unitsAvailable;
      }
      //if the value of amount is 20 the increament units available with 14

      if (amount == 20) {
        unitsAvailable += 14;
        return unitsAvailable;
      }
      //if the value of amount is 50 the increament units available with 35

      if (amount == 50) {
        unitsAvailable += 35;
        return unitsAvailable;
      }
    }
  }

  function getUnitsAvailable() {
    return unitsAvailable;
  }

  /*
   * return true and substract from unit available if there is enough units to use the appliance
   * other wise return false and do nothing.
   */
  function useAppliance(appliance) {
    if (advanceTaken(amount) && advancesTaken !== true) {
      amount -= appliance;
      advancesNotTaken = true;
      return advancesNotTaken;
    } else {
      if (appliance === "Stove") {
        unitsAvailable -= 10;
      }
      if (appliance === "Kettle") {
        unitsAvailable -= 5;
      }
      if (appliance === "TV") {
        unitsAvailable -= 3;
      }
      if (appliance === "Fridge") {
        unitsAvailable -= 13;
      }
    }
  }

  
  function advanceTaken(amount) {
    if (amount === "advance" && advancesTaken !== true) {
      unitsAvailable += 21;
      advancesTaken = true;
      advance = 30;
      return advancesTaken;
    } 
    else {
      return false;
    }
  }

  function totalAmountSpent() {
    
  }

  function totalUnitsBought() {
    
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
