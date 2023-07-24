/**
 * This roughly equates to the index.js and handler.js that
 * are provided by `svelte-adapter-deno`, with the following changes:
 * 
 * 1. No support (yet) for deno-deploy.
 * 2. Doesn't read files from FS, but uses embedded files.  
 *    This makes code useable from deno run/install/compile.
 * 
 * @module
 */

import { Server as SvelteServer } from "../svelte-in-node/build/server/index.js";
import { manifest } from "../svelte-in-node/build/server/manifest.js"
import { oak, serveDir } from "./deps/embedder.ts"
import svelteClient from "./embeded/client/dir.ts"


export async function server() {
    const app = new oak.Application()
    app.use(logger)

    const router = new oak.Router()
    serveDir(router, "/", svelteClient)
    app.use(router.routes())
    app.use(router.allowedMethods())

    // Will serve a 404, so must come last:
    app.use(await serverSide())

    app.addEventListener('listen', (event) => {
        console.log(`Listening on http://${event.hostname}:${event.port}`);
    });
    
    try {
        await app.listen({ port: 0 })
    } catch(err) {
        console.error('error', err);
    }
}


async function serverSide() {
    const server = new SvelteServer(manifest);
    await server.init({env: {}})


    const handler: oak.Middleware = async (ctx) => {
        const { originalRequest } = ctx.request
        // We rely on this being an oak NativeRequest, which has an inner Request type
        // which is compatible w/ Svelte's requirements:
        // TODO: type-checked cast:
        const svelteReq = (originalRequest as any).request

        const ssr = await server.respond(svelteReq, {
            getClientAddress() {
                const ip = ctx.request.ip

                // TODO: Is this used? 
                console.log("getClientAddress: ", ip)
                return ip
            }
        })

        const response = ctx.response
        response.body = ssr.body
        response.status = ssr.status
        response.headers = ssr.headers

    }
    return handler
}

async function logger(ctx: oak.Context, next: () => Promise<unknown>) {
    try {
        await next()
    } finally {
        const req = ctx.request
        const res = ctx.response
        console.log(`${res.status}: ${req.url.pathname}`)
    }

}
