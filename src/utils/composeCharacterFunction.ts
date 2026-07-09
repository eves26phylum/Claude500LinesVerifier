import { CharacterFunction } from "../types/characterFunctionImplementationOutline";
import { SingleLetter } from "../types/singleLetter";

export function ComposeCharacterFunction<T extends string>(characterString: SingleLetter<T>): CharacterFunction<T> {
    return () => {
        const char: SingleLetter<T> = characterString;
        return char;
    };
}