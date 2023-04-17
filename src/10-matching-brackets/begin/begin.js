console.log(`${matchingBrackets("[hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[hello][world][]")} should be true`); // true
console.log(`${matchingBrackets("]hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[[[as;dfi")} should be false`); // false
console.log(`${matchingBrackets("[hello][world]")} should be true`); // true

const bracketArray = [];

function matchingBrackets(value){
    let counter = 0;
    let bracketArray = value.split('');
    for(elem of bracketArray){
        if(elem === '['){
            counter++;
        }else if(counter === 0 && elem === ']'){
            counter = -1;
            break;
        }else if(counter > 0 && elem === ']'){
            counter--;
        }
    }
    
    if(counter === 0) return true;
    else return false
}
