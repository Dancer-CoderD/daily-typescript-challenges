type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js

// function readonly(obj) {
//   const result = {};

//   for (const key in obj) {
//     result["readonly" + key] = obj[key];
//   }

//   return result;
// }

// 1. 返回一个对象
// 2. 遍历 obj （js 对象 ts 接口）
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj（接口）里面的值
