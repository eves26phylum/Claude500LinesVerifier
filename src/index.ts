import { test } from "./test/verifyClaude";
import { sampleStringOfClaudesResponse } from "./assets/sample";

{
    const [success, response] = test(sampleStringOfClaudesResponse);
    console.log(`Did Claude say 500 lines? ${success ? "Yes" : "No"}\n${response}`)
}