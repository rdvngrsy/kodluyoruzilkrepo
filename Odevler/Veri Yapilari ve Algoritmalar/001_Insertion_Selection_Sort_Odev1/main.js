function insertionSort(arr) {                           
    for (let i = 1; i < arr.length; i++) {              
      let currentValue = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentValue;
    }
    return arr;
  }

function selectionSort(inputArr) {          
    let n = inputArr.length;                
    for(let i = 0; i < n; i++) {

        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}


console.log("Insertion Sort")
console.log(insertionSort([22,27,16,2,18,6]))  

console.log("Selection Sort")
console.log(selectionSort([7,3,5,8,2,9,4,15,6]));