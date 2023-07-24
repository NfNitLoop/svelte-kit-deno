// Creates "embedded" versions of files that can be `deno run` or `deno install`ed.

import * as embedder from "./src/deps/embedder.ts"

export const options = {
    importMeta: import.meta,

    mappings: [
        {
            sourceDir: "svelte-in-node/build/client",
            destDir: "src/embeded/client"
        },

    ]
}
export {embedder}

if (import.meta.main) {
    await embedder.main({options})
}