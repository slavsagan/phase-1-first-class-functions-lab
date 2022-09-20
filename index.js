const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
/*--------------- Optional with loop -------------------------*/
// function returnFirstTwoDrivers(params) {
// const newArr = []
// for (let i = 0; i < 2; i++) {
//   const elements = drivers[i]
//   newArr.push(elements)
// }
// return newArr
// }
// console.log(returnLastTwoDrivers())

function returnFirstTwoDrivers(newArr) {
  return newArr.slice(0, 2)
}
console.log(returnFirstTwoDrivers(drivers))

function returnLastTwoDrivers(newArr) {
  return newArr.slice(2, 4)
}
console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0])
console.log(selectingDrivers[1])

function createFareMultiplier() {
  return function (a) {
    return a ** 2
  }
}
const fareQuintupler = createFareMultiplier()
console.log(fareQuintupler(5))

const fareDoubler = (a) =>
  a * 2 /*--- Short way in arrow function if block in one line */
console.log(fareDoubler(10))

const fareTripler = (a) => a * 3
console.log(fareTripler(12))

function selectDifferentDrivers(arr, fun) {
  return fun(arr)
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))

/* ------------- Optional in arrow function ---------------------*/
// selectDifferentDrivers = (arr, fun) => fun(arr)
// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))
