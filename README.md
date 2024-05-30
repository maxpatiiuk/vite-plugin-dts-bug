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

    ```yaml
    [vite:dts] You are building a library that may not need to generate declaration files.

    vite v5.2.12 building for production...
    gsrc/main.ts:1:10 - error TS4025: Exported variable 'a' has or is using private name 'A'.

    1 const a: A = "a";
               ~
    src/main.ts:1:10 - error TS2304: Cannot find name 'A'.

    1 const a: A = "a";
               ~

    ✓ 3 modules transformed.

    [vite:dts] Start generate declaration files...
    computing gzip size (0)...[vite:dts] Declaration files built in 426ms.

    dist/index.html                0.29 kB │ gzip: 0.21 kB
    dist/assets/index-BkRC7dge.js  0.74 kB │ gzip: 0.41 kB
    ✓ built in 471ms
    ```

5. In `vite.plugin.ts` comment out line 12, and uncomment line 13
6. Run `npm run build`
7. Build with the workaround succeeds