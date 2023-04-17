const alpha = /[a-z]/g
const notBinary = /[2-9]/g

function binaryToDecimal(binary) {
    let valid = true
    let binaryArray = binary.split('');
    binaryArray.forEach(item => {
        if(alpha.test(item) || notBinary.test(item)) valid = false
    });
    if(valid){
            let count = 0;
    let postion = 1;
    while(binaryArray.length > 0){
        count += binaryArray.pop() * postion;
        postion = postion * 2;
    }
    return count
    } else return `${binary} is not binary`
}

console.log(binaryToDecimal("101010")); // 42
console.log(binaryToDecimal("101100000")); // 352
console.log(binaryToDecimal("1")); // 1
console.log(binaryToDecimal("13298436")); // "13298436 is not a valid binary string"
console.log(binaryToDecimal("abc")); // "abc is not a valid binary string"

function binaryConverter(valueArray){

}