# Kodluyoruz Veri Yapıları ve Algoritmalar Birinci Ödev Selection Sort ve Insertion Sort

Bu repo [Kodluyoruz](https://www.kodluyoruz.org) Front-End Eğitiminde oluşturduğumuz ilk repositories Veri Yapıları ve Algoritmalar uygulamalarında birinci örnek. 

## İstenilen Ödev 
[22,27,16,2,18,6] -> Insertion Sort

1) Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

2) Big-O gösterimini yazınız.

3) Time Complexity: Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız

4) [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.
***

## Cevaplar
*  **[22,27,16,2,18,6] -> Insertion Sort Aşamaları**
    1. [22, 27, 16, 2, 18, 6]
    2. [16, 22, 27, 2, 18, 6]
    3. [2, 16, 22, 27, 18, 6]
    4. [2, 16, 18, 22, 27, 6]
    5. [2, 6, 16, 18, 22, 27]
* **[22,27,16,2,18,6] -> Insertion Sort Big-O gösterimi**

    Big-O Gösterimi: O(n^2)
* **[22,27,16,2,18,6] -> Insertion Sort Time Complexity**

    18 sayısı sıralandıktan sonra orta kısımlarda bulunduğu için Avarage Case kapsamındadır.

* **[7,3,5,8,2,9,4,15,6] -> Selection Sort Aşamaları**
    1. [7, 3, 5, 8, 2, 9, 4, 15, 6]
    2. [2, 3, 5, 8, 7, 9, 4, 15, 6]
    3. [2, 3, 4, 8, 7, 9, 5, 15, 6]
    4. [2, 3, 4, 5, 7, 9, 8, 15, 6]
***

### Insertion Sort Code in JavaScript
```js
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
```
### Selection Sort Code in JavaScript
```js
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
```
***
## License
[MIT](https://choosealicense.com/licenses/mit/)