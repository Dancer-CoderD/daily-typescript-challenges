// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

// js

const first = (arr) => {
  // arr 是不是一个空数组，如果是，那么返回 never

  const [first, ...rest] = arr;
  return first ? first : "never";
  //   if (arr.length === 0) return "never";
  //   return arr[0];
};

// T[number]

type ages = [1];
// union
type t1 = ages[number];
// 看看某个值是不是在 union 里面
type t2 = 1 extends ages[number] ? "true" : "false";
type t3 = 1 extends keyof ages ? "true" : "false";

// 知识点、解法
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性
// 3. extends 组合 union 判断的规则（分布式 T[number]）
// 4. infer 的使用（对应 js 的解构）
