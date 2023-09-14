/**
 * Copy your sorting algorithms in here.
 * They must be named `bubbleSort` and `mergeSort`, and take an array param.
 */

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR BUBBLE SORT IMPLEMENTATION

function bubbleSort(array, comparador)
{
  comparador = comparador || ((n1, n2) => n1 - n2);
  let isSwapped;

  do
  {
    isSwapped = false;
    for (let i = 0; i < array.length - 1; i++)
    {
      if (array[i] > array[i + 1])
      {
        swap(array, i, i + 1);
        isSwapped = true;
      }
    }
  }
  while (isSwapped);
  return array;
}

function swap(arr, i1, i2)
{
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR MERGE SORT IMPLEMENTATION

function split(wholeArray) 
{
  let middle = Math.ceil(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arrIzq, arrDer) 
{
  let nuevoArray = [];
  let punteroIzq = 0;
  let punteroDer = 0;

  while (punteroIzq < arrIzq.length && punteroDer < arrDer.length)
  {
    if (arrIzq[punteroIzq] <= arrDer[punteroDer])
    {
      nuevoArray.push(arrIzq[punteroIzq]);
      punteroIzq++;
    }
    else
    {
      nuevoArray.push(arrDer[punteroDer]);
      punteroDer++;
    }
  }
  while (punteroIzq < arrIzq.length)
  {
    nuevoArray.push(arrIzq[punteroIzq]);
    punteroIzq++;
  }
  while (punteroDer < arrDer.length)
  {
    nuevoArray.push(arrDer[punteroDer]);
    punteroDer++;
  }
  return nuevoArray;
}

function mergeSort(array, comparador)
{
  comparador = comparador || ((n1, n2) => n1 - n2);
  if (array.length <= 1)
  {
    return array;
  }
  let [arrIzq, arrDer] = split(array);
  return merge(mergeSort(arrIzq), mergeSort(arrDer));
}

function quickSort(array) {
  if (array.length <= 1)
  {
      return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++)
  {
    if (array[i] < pivot) {
      left.push(array[i]);
    } 
    else
    {
      right.push(array[i]);
    }
  }
  return [quickSort(left).concat([pivot]), quickSort(right)];
}

var arrToSort = [4, 8, 2, 9];
var sorted = arrToSort.sort(); 

console.log(sorted); 
