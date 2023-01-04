type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];

// js

// function Concat(arrA, arrB) {
//   // spread
//   return [...arrA, ...arrB];
// }

// extendswork (infer spread)
// first -> [1, 2, 3] -> 1
// tail -> [1, 2, 3] -> 3
