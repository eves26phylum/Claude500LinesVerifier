import { SingleLetter } from "./singleLetter";

export type CharacterFunction<T extends string> = () => SingleLetter<T>;