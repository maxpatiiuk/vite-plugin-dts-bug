# vite-plugin-dts ignores tsconfig's "files" configuration

This is a minimal reproduction of vite-plugin-dts ignoring the "files"
configuration option in tsconfig.json, leading to a TypeScript error at build
time.

See `vite.config.ts`, `tsconfig.broken.json`, and `tsconfig.works.json`.

`tsconfig.working.json` provides a workaround for the issue. But ideally,
"files" should be respected, to match tsc behavior.

## Reproduction

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. See error - bug
5. In `vite.plugin.ts` comment out line 12, and uncomment line 13
6. Run `npm run build`
7. Build with the workaround succeeds
