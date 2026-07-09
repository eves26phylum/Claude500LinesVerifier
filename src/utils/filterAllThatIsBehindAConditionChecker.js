"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterAllThatIsBehindAConditionChecker = void 0;
const FilterAllThatIsBehindAConditionChecker = (targetString, ConditionChecker, StateMutableOfCompletion) => {
    return targetString.filter((value, index, array) => {
        if (ConditionChecker(value))
            StateMutableOfCompletion.hasCompletedStringManipulation = true;
        if (StateMutableOfCompletion.hasCompletedStringManipulation) {
            return false;
        }
        return true;
    });
};
exports.FilterAllThatIsBehindAConditionChecker = FilterAllThatIsBehindAConditionChecker;
//# sourceMappingURL=filterAllThatIsBehindAConditionChecker.js.map