export type SingleLetter<T extends string> = T extends `${infer First}${infer Rest}` ? Rest extends "" ? T : never : never;
//# sourceMappingURL=singleLetter.d.ts.map