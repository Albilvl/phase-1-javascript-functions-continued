// code your solution here
const saturdayFun = (activity = `roller-skate`) => `This Saturday, I want to ${activity}!`

const mondayWork = (todo = `go to the office`) => `This Monday, I will ${todo}.`

function wrapAdjective (feeling= `*`) {
   return function (adjective){
       return `You are ${feeling}${adjective}${feeling}!`
   }
}