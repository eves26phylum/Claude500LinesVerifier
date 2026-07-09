import { FilterAllThatIsBehindAConditionCheckerType } from "./conditionCheck";

export type ParseStringUntilCharacterIsHitAndReturnDoublePartsType = (FilterAllThatIsBehindAConditionChecker: FilterAllThatIsBehindAConditionCheckerType, BaseStringToParse: string, StringFunction: () => string) => [string, string]