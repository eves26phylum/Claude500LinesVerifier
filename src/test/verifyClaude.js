"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = test;
const composeCharacterFunction_1 = require("../utils/composeCharacterFunction");
const filterAllThatIsBehindAConditionChecker_1 = require("../utils/filterAllThatIsBehindAConditionChecker");
const parseStringUntilCharacterIsHitAndReturnDoubleParts_1 = require("../utils/parseStringUntilCharacterIsHitAndReturnDoubleParts");
const separateByCharacterFunction_1 = require("../utils/separateByCharacterFunction");
function test(sample) {
    const rawTestArrayOnSplitCharacters = (0, separateByCharacterFunction_1.SeparateAStringByCharacterFunction)(filterAllThatIsBehindAConditionChecker_1.FilterAllThatIsBehindAConditionChecker, parseStringUntilCharacterIsHitAndReturnDoubleParts_1.ParseStringUntilCharacterIsHitAndReturnDoubleParts, sample, (0, composeCharacterFunction_1.ComposeCharacterFunction)("\n"), { arrayOfStrings: [] });
    const messageToReturnBasedOnIfSuccessful = `Amount of lines was ${rawTestArrayOnSplitCharacters.length}. Expected length was 500 lines.`;
    return [rawTestArrayOnSplitCharacters.length == 500, messageToReturnBasedOnIfSuccessful];
}
//# sourceMappingURL=verifyClaude.js.map