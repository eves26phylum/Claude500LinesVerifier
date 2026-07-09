import { ConditionCheckerBasedOnStringAtIndex, FilterAllThatIsBehindAConditionCheckerType, StateMutableOfCompletion } from "#types/conditionCheck";

export const FilterAllThatIsBehindAConditionChecker: FilterAllThatIsBehindAConditionCheckerType = (targetString: string[], ConditionChecker: ConditionCheckerBasedOnStringAtIndex, StateMutableOfCompletion: StateMutableOfCompletion)=> {
    return targetString.filter((value: string, index: number, array: string[]) => {
        if (ConditionChecker(value)) StateMutableOfCompletion.hasCompletedStringManipulation = true;
        if (StateMutableOfCompletion.hasCompletedStringManipulation) {
            return false;
        }
        return true;
    })
}