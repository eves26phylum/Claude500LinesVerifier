"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyClaude_1 = require("./test/verifyClaude");
const sample_1 = require("./assets/sample");
{
    const [success, response] = (0, verifyClaude_1.test)(sample_1.sampleStringOfClaudesResponse);
    console.log(`Did Claude say 500 lines? ${success ? "Yes" : "No"}\n${response}`);
}
//# sourceMappingURL=index.js.map