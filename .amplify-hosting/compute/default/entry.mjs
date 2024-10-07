import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CkutVNrY.mjs';
import { manifest } from './manifest_Doc_aquC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///C:/Users/vinuk/Videos/Captures/New%20folder/interstellar-iron/.amplify-hosting/static/",
    "server": "file:///C:/Users/vinuk/Videos/Captures/New%20folder/interstellar-iron/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
