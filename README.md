# daily-typescript-challenges

### 2022/12/26

> easy-pick

- in -> mapped an union
- todo[key] -> indexed
- keyof -> lookup
- extends -> constraints

### 2022/12/27

> easy-readonly

- in -> mapped a interface
- readonly -> readonly

### 2022/12/28

> easy-tuple-to-obj

- in -> mapped a array
- @ts-expect-error -> 注释

### 2022/12/29

> easy-first-of-array

- extends
- tuple["length"]
- extends + union type (unsupport)
- infer

### 2022/12/30

> easy-tuple-of-length

- tuple["length"] -> value
- array["length"] -> type of number
- as const + typeof -> readonly

### 2023/1/1

> easy-exclude

- extends
- T extends U ? never : T;

### 2023/1/2

> easy-await

- infer
- T extends Promise<infer X> ? T : never;

### 2023/1/3

> easy-if

- 类型兼容性
- null 在严格模式和非严格模式下的区别
- - Important!
- - https://www.typescriptlang.org/docs/handbook/type-compatibility.html

### 2023/1/4

> easy-concat

- spread
- [...T]

### 2023/1/5

> easy-includes

- infer-spread
- extends 约束
- 模块规范：
- 文件内有 export/import 那么该文件是模块
- 使用时需要有对应的导出和引入
- 文件内没有时就是全局可用的

### 2023/1/5

> easy-push-unshift

- spread
- [...T, U]
