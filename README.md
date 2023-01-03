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
