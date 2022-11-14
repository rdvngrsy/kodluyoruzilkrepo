# Kodluyoruz Veri Yapıları ve Algoritmalar İkinci Ödev Merge Sort

Bu repo [Kodluyoruz](https://www.kodluyoruz.org) Front-End Eğitiminde oluşturduğumuz ilk repositories Veri Yapıları ve Algoritmalar uygulamalarında ikinci örnek. 

## İstenilen Ödev 
[16,21,11,8,12,22] -> Merge Sort

1) Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
2) Big-O gösterimini yazınız.
***

## Cevaplar
*  **[16,21,11,8,12,22] -> Merge Sort Aşamaları**
    <pre>
                [16,21,11,8,12,22]
            [16,21,11]      [8,12,22]
        [16,21] [11]            [8,12] [22]
    [16] [21] [11]                [8] [12] [22]
        [16,21] [11]             [8,12] [22]
            [11,16,21]      [8,12,22]
                [8,11,12,16,21,22]
    </pre>
* **[16,21,11,8,12,22] -> Merge Sort Big-O gösterimi**

    Big-O Gösterimi: O(nlog(n))
***

### Merge Sort Code in JavaScript
```js
function merge(left, right) {
  let sortedArr = [] 
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([16,21,11,8,12,22]));
```

***
## License
[MIT](https://choosealicense.com/licenses/mit/)