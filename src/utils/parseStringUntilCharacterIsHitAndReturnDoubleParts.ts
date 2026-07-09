type StateMutableOfCompletion = {
    hasCompletedStringManipulation: boolean
};
type ConditionCheckerBasedOnStringAtIndex = (targetString: string) => boolean;
function FilterAllThatIsBehindAConditionChecker(targetString: string[], ConditionChecker: ConditionCheckerBasedOnStringAtIndex, StateMutableOfCompletion: StateMutableOfCompletion) {
    return targetString.filter((value: string, index: number, array: string[]) => {
        if (ConditionChecker(value)) StateMutableOfCompletion.hasCompletedStringManipulation = true;
        if (StateMutableOfCompletion.hasCompletedStringManipulation) {
            return false;
        }
        return true;
    })
}
export function ParseStringUntilCharacterIsHitAndReturnDoubleParts(BaseStringToParse: string, StringFunction: () => string): [string, string] {
    const stringIntoIndividualParts = BaseStringToParse.split("");
    const firstPartitionOfTheStringBeforeTheStringFunctionsReturns: string[] = FilterAllThatIsBehindAConditionChecker(stringIntoIndividualParts, (targetString: string) => {
        const TargetStringToCompareAgainst = StringFunction();
        return TargetStringToCompareAgainst === targetString;
    }, { hasCompletedStringManipulation: false });
    const secondPartitionOfTheStringAfterTheStringFunctionsReturns: string[] = stringIntoIndividualParts.slice(firstPartitionOfTheStringBeforeTheStringFunctionsReturns.length);
    return [firstPartitionOfTheStringBeforeTheStringFunctionsReturns.join(""), secondPartitionOfTheStringAfterTheStringFunctionsReturns.join("")];
}