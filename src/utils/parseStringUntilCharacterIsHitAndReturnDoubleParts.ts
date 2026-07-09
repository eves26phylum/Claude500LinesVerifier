import { FilterAllThatIsBehindAConditionCheckerType } from "#types/conditionCheck.js";
import { ParseStringUntilCharacterIsHitAndReturnDoublePartsType } from "#types/parseStringUntilCharacterFunctionTyping.js";

export const ParseStringUntilCharacterIsHitAndReturnDoubleParts: ParseStringUntilCharacterIsHitAndReturnDoublePartsType = (FilterAllThatIsBehindAConditionChecker: FilterAllThatIsBehindAConditionCheckerType, BaseStringToParse: string, StringFunction: () => string): [string, string] => {
    const stringIntoIndividualParts = BaseStringToParse.split("");
    const firstPartitionOfTheStringBeforeTheStringFunctionsReturns: string[] = FilterAllThatIsBehindAConditionChecker(stringIntoIndividualParts, (targetString: string) => {
        const TargetStringToCompareAgainst = StringFunction();
        return TargetStringToCompareAgainst === targetString;
    }, { hasCompletedStringManipulation: false });
    const secondPartitionOfTheStringAfterTheStringFunctionsReturns: string[] = stringIntoIndividualParts.slice(firstPartitionOfTheStringBeforeTheStringFunctionsReturns.length + 1);
    return [firstPartitionOfTheStringBeforeTheStringFunctionsReturns.join(""), secondPartitionOfTheStringAfterTheStringFunctionsReturns.join("")];
}