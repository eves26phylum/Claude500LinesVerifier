import { CharacterFunction } from "#types/characterFunctionImplementationOutline";
import { FilterAllThatIsBehindAConditionCheckerType } from "#types/conditionCheck.js";
import { ParseStringUntilCharacterIsHitAndReturnDoublePartsType } from "#types/parseStringUntilCharacterFunctionTyping.js";
import { CharacterFunctionState } from "#types/separateCharacterFunctionTypes";
export declare function SeparateAStringByCharacterFunction<T extends string>(FilterAllThatIsBehindAConditionChecker: FilterAllThatIsBehindAConditionCheckerType, ParseStringUntilCharacterIsHitAndReturnDoubleParts: ParseStringUntilCharacterIsHitAndReturnDoublePartsType, targetString: string, characterFunctionToUse: CharacterFunction<T>, thisState: CharacterFunctionState): string[];
//# sourceMappingURL=separateByCharacterFunction.d.ts.map