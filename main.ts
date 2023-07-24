/**
 * Run the FeoBlog client.
 */

import {server} from "./src/server.ts"


async function main() {
    // TODO: Cliffy options!

    await server()
}




if (import.meta.main) {
    await main()
}