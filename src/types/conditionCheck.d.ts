export interface StateMutableOfCompletion {
    hasCompletedStringManipulation: boolean;
}
export type ConditionCheckerBasedOnStringAtIndex = (targetString: string) => boolean;
export type FilterAllThatIsBehindAConditionCheckerType = (targetString: string[], ConditionChecker: ConditionCheckerBasedOnStringAtIndex, StateMutableOfCompletion: StateMutableOfCompletion) => string[];
//# sourceMappingURL=conditionCheck.d.ts.map