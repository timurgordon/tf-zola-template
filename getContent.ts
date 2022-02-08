// Fetches website content via RMB and creates content directory, 
// from which the static website is generated

import { HTTPMessageBusClient } from "ts-rmb-http-client";

async function main() {
    const dstNodeId = 4;

    async function deploy() {
        try {
            // must find way to get twinId and proxyUrl
            // perhaps use getMyTwinId @ grid3_client_ts/src/clients/tf-grid/twins.ts
            const rmb = new HTTPMessageBusClient(0, "https://gridproxy.test.grid.tf", "https://graphql.dev.grid.tf/graphql", "<mnemonics>");
            const msg = rmb.prepare("zos.statistics.get", [dstNodeId], 0, 2);
            const retMsg = await rmb.send(msg, "{'test':'test'}");
            const result = await rmb.read(retMsg);
            console.log(`the read response is:`);
            console.log(result);
        } catch(err) {
            // fails at node/httpClient.js:142 when signing
            // or cannot verify signature at node/httpClient.js:167 when provided mnemonics
            console.log(err)
        }
    }

    deploy();
}

main();

/* Once content .md files can be fetched using RMB, this will auto build the content dir.

const fs = require("fs")
const initDir = 'content'
const initMDFile = 'content/_index.md'
const initValue = ``

if(!fs.existsSync(initDir)) {
  fs.mkdirSync(initDir)
}
if(!fs.existsSync(initMDFile)) {
  fs.writeFileSync(initMDFile, initValue)
}
*/