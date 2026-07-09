import { FilterAllThatIsBehindAConditionCheckerType } from "#types/conditionCheck";
import { ComposeCharacterFunction } from "../utils/composeCharacterFunction";
import { FilterAllThatIsBehindAConditionChecker } from "../utils/filterAllThatIsBehindAConditionChecker";
import { ParseStringUntilCharacterIsHitAndReturnDoubleParts } from "../utils/parseStringUntilCharacterIsHitAndReturnDoubleParts";
import { SeparateAStringByCharacterFunction } from "../utils/separateByCharacterFunction";
export function test(sample: string) {
    const rawTestArrayOnSplitCharacters = SeparateAStringByCharacterFunction(FilterAllThatIsBehindAConditionChecker, ParseStringUntilCharacterIsHitAndReturnDoubleParts, sample, ComposeCharacterFunction("\n"), { arrayOfStrings: [] });
    const messageToReturnBasedOnIfSuccessful =  `Amount of lines was ${rawTestArrayOnSplitCharacters.length}. Expected length was 500 lines.`;
    return [rawTestArrayOnSplitCharacters.length == 500, messageToReturnBasedOnIfSuccessful];
}