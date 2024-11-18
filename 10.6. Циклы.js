let num = [1,1,1,1];

let examinationNum = num.every(element => element === num[0]);

console.log(examinationNum)






let arr = [0, 1, 2, 3, 4, null, 'a', 5, 6, 4, 0, undefined];

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

arr.forEach(element => {
    if (typeof element === 'number' && !isNaN(element)){
      
      if (element === 0) {
            zeroCount++;
        
        } else if (element % 2 === 0) {
            evenCount++;
          
        } else {
            oddCount++;
        }
    }
});

console.log(`Чётных чисел: ${evenCount}`);
console.log(`Нечётных чисел: ${oddCount}`);
console.log(`Нулей: ${zeroCount}`);