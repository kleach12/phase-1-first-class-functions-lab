const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (name) => drivers.slice(0,2);
returnFirstTwoDrivers();

const returnLastTwoDrivers = (name) => drivers.slice(2,5)
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return () => num * 5;
}

const fareDoubler = (num) => num * 2;

const fareTripler = (num) => num * 3;

function selectDifferentDrivers (drivers, selectingDrivers) {
    return selectingDrivers(drivers);
} 