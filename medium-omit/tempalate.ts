type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// 知识点
// 1. 如何循环一个 interface ？
// 2. as 语法的作用？

// 解法
// 1. 判断入口时的数据类型，是否需要加以约束。
// 2. 判断需要返回什么。

// 因此这道题，还有另外一种解法，应用我们之前写过的方法：

// 可以判断出，入口数据类型为 Union，因此应用 Pick，并将 P 约束为 T 类型。
// type OmitPick<T, K extends keyof T> = { [P in K]: T[P] };
// 可以判断出，我们需要返回 P 里面是否有 T 没有包含的类型，因此应用 Exclude。
// type OmitExclude<T, K extends T> = T extends K ? never : T;
// 结合使用
// type MyOmit<T, K extends keyof T> = OmitPick<T, OmitExclude<keyof T, K>>;
