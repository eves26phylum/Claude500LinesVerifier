import { CharacterFunction } from "#types/characterFunctionImplementationOutline";
import { FilterAllThatIsBehindAConditionCheckerType } from "#types/conditionCheck.js";
import { ParseStringUntilCharacterIsHitAndReturnDoublePartsType } from "#types/parseStringUntilCharacterFunctionTyping.js";
import { CharacterFunctionState } from "#types/separateCharacterFunctionTypes";

export function SeparateAStringByCharacterFunction<T extends string>(FilterAllThatIsBehindAConditionChecker: FilterAllThatIsBehindAConditionCheckerType, ParseStringUntilCharacterIsHitAndReturnDoubleParts: ParseStringUntilCharacterIsHitAndReturnDoublePartsType, targetString: string, characterFunctionToUse: CharacterFunction<T>, thisState: CharacterFunctionState) {
    const doubleSplitOnCurrentTargetString = ParseStringUntilCharacterIsHitAndReturnDoubleParts(FilterAllThatIsBehindAConditionChecker, targetString, characterFunctionToUse);
    thisState.arrayOfStrings.push(doubleSplitOnCurrentTargetString[0]);
    if (doubleSplitOnCurrentTargetString[1] !== "") {
        SeparateAStringByCharacterFunction(FilterAllThatIsBehindAConditionChecker, ParseStringUntilCharacterIsHitAndReturnDoubleParts, doubleSplitOnCurrentTargetString[1], characterFunctionToUse, thisState);
    }
    return thisState.arrayOfStrings;
}