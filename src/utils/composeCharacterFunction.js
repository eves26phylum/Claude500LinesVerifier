"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposeCharacterFunction = ComposeCharacterFunction;
function ComposeCharacterFunction(characterString) {
    return () => {
        const singleLetterCharacterToReturnForPleasurableResults = characterString;
        return singleLetterCharacterToReturnForPleasurableResults;
    };
}
//# sourceMappingURL=composeCharacterFunction.js.map