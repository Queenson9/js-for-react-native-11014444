function processArrary([...numbers]) {
    let i = -1;
    while(i < numbers.length - 1){
        i++;
        if(numbers[i] % 2 === 0) {
            numbers[i] = Math.pow(numbers[i], 2)
        }else{
            numbers[i] = Math.pow(numbers[i], 3)
        }
    }
    return numbers
}

console.log(processArrary([1, 2, 3, 4, 5]))

function formatArrayString([...array], [...processA]){
     let i = -1;
     let processAr = processArrary(processA)
     while(i < array.length - 1){
        i++;
        let StringArr = array[i];
        let processArr = processAr[i]

        if(processArr % 2 === 0){
            array[i] = StringArr.toUpperCase()
        }else {
            array[i] = StringArr.toLowerCase()
        }
    }
    return array;
}

console.log(formatArrayString(["enock", "samuel", "babe", "frank"], [1, 2, 3, 4]))

module.exports = formatArrayString;