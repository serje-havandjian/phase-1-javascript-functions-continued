// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
let activity = "roller-skate"
saturdayFun()


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

mondayWork(activity)

function wrapAdjective(adjective = "*"){
    return function (paraDefault = "special"){
        return `You are ${adjective}${paraDefault}${adjective}!`
    }
}

wrapAdjective("Amazing")("Cool!")