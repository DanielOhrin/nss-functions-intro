const fillGasTank = (gallons) => {
    gallons > 15 ? console.log("You cannot add this much gas to the tank") : console.log(`I filled the tank with ${gallons} of gas`)
}

fillGasTank(15)