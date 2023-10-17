export type PartialNestedObject<T> = {
  [K in keyof T]?: T[K] extends object ? PartialNestedObject<T[K]> : T[K];
};
