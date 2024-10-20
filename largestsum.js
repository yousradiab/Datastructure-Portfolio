const arr = [8,5,10,7,9,4,15,12,3,13]

let largestSum = 0
let largestSumIndex = 0
let sum = arr[0] + arr[1] + arr[2];

for (let i = 0; i < arr.length-2; i++) {
        if (sum > largestSum) {
        largestSum = sum
        largestSumIndex = i;
        }

        console.log(`i ${i}, sum ${sum}`)
        sum = sum -arr[i]; // remove the first element / dequeue
        sum = sum + arr[i+3]; // add the element last / enqueue
    }
    
    console.log(`largest sum ${largestSum}, at index ${largestSumIndex}`)
