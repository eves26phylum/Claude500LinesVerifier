"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseStringUntilCharacterIsHitAndReturnDoubleParts = void 0;
const ParseStringUntilCharacterIsHitAndReturnDoubleParts = (FilterAllThatIsBehindAConditionChecker, BaseStringToParse, StringFunction) => {
    const stringIntoIndividualParts = BaseStringToParse.split("");
    const firstPartitionOfTheStringBeforeTheStringFunctionsReturns = FilterAllThatIsBehindAConditionChecker(stringIntoIndividualParts, (targetString) => {
        const TargetStringToCompareAgainst = StringFunction();
        return TargetStringToCompareAgainst === targetString;
    }, { hasCompletedStringManipulation: false });
    const secondPartitionOfTheStringAfterTheStringFunctionsReturns = stringIntoIndividualParts.slice(firstPartitionOfTheStringBeforeTheStringFunctionsReturns.length + 1);
    return [firstPartitionOfTheStringBeforeTheStringFunctionsReturns.join(""), secondPartitionOfTheStringAfterTheStringFunctionsReturns.join("")];
};
exports.ParseStringUntilCharacterIsHitAndReturnDoubleParts = ParseStringUntilCharacterIsHitAndReturnDoubleParts;
//# sourceMappingURL=parseStringUntilCharacterIsHitAndReturnDoubleParts.js.map