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