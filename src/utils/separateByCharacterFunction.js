"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparateAStringByCharacterFunction = SeparateAStringByCharacterFunction;
function SeparateAStringByCharacterFunction(FilterAllThatIsBehindAConditionChecker, ParseStringUntilCharacterIsHitAndReturnDoubleParts, targetString, characterFunctionToUse, thisState) {
    const doubleSplitOnCurrentTargetString = ParseStringUntilCharacterIsHitAndReturnDoubleParts(FilterAllThatIsBehindAConditionChecker, targetString, characterFunctionToUse);
    thisState.arrayOfStrings.push(doubleSplitOnCurrentTargetString[0]);
    if (doubleSplitOnCurrentTargetString[1] !== "") {
        SeparateAStringByCharacterFunction(FilterAllThatIsBehindAConditionChecker, ParseStringUntilCharacterIsHitAndReturnDoubleParts, doubleSplitOnCurrentTargetString[1], characterFunctionToUse, thisState);
    }
    return thisState.arrayOfStrings;
}
//# sourceMappingURL=separateByCharacterFunction.js.map