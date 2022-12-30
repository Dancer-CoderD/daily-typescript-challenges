type Length<T extends readonly any[]> = T["length"];

// js

function getLength(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}

// 知识点
// 什么是 tuple 类型
// - 定死定长的数组类型（类数组类型）
// tuple 和普通的数组有什么区别
// - tuple["length"] 取出来是值
// - Array["length"] 取出来是 type->number
