const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.49595dbd.js","app":"_app/immutable/entry/app.1d275df6.js","imports":["_app/immutable/entry/start.49595dbd.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.74f4580b.js","_app/immutable/entry/app.1d275df6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7e6319f2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-490e85da.js')),
			__memo(() => import('./chunks/1-2df36a4c.js')),
			__memo(() => import('./chunks/2-d4f4ffbc.js')),
			__memo(() => import('./chunks/3-a1c1646b.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
