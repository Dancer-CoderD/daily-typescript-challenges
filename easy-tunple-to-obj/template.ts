type TupleToObject<T extends readonly any[]> = {
  [P in keyof T]: P;
};
