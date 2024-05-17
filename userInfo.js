const formatArrayString = require("./arrayManipulation.js")

function userProfile([...names], [...modifiedNmaes]){
    let object = []
    let i = -1;
    while(i < names.length - 1){
        i++;
        object.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNmaes[i] 
        })
    }
    return object;
}

var names = ["john", "enock", "queenson", "eric"]

console.log(userProfile(names, formatArrayString(names, [1, 2, 3, 4]) ))