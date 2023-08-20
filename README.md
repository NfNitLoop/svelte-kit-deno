Experimenting in making a SvelteKit app that can be used with `deno` run, compile, install, etc.

For examlpe, you can start a local SvelteKit server from this code by just running:

```
deno run --allow-net https://raw.githubusercontent.com/NfNitLoop/svelte-kit-deno/main/main.ts
```

Development
-----------

While there are tools like create-vite-extra/[template-deno-svelte-ts], the
resulting project doesn't work well in IDEs (at least, in VSCode). Deno doesn't
directly support unknown file extensions like `.svelte`, so trying to edit such
files inside of a Deno project doesn't give you any IDE assistance.

[template-deno-svelte-ts]: https://github.com/bluwy/create-vite-extra/tree/master/template-deno-svelte-ts

The `svelte-in-node` sub-prjoect is a SvelteKit project using Vite in Node. For development,
you can open up that directory as the root of your project in your IDE.

Otherwise, you can use the root of the Git repository as a Deno project.

* `deno task dev` will run the Node/Vite project in dev mode with HMR. 
* `deno task build` will do a production build of the server and embed it
   to run well from within Deno.
