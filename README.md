# @x12i/xentra-identity usage example

Identity provider adapter interface for Xentra.

This consuming application demonstrates **implement a typed identity-verification port in a consuming application** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Implement an identity provider against Xentra's shared interface.
- Keep identity resolution separate from domain permission logic.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/xentra-identity)
- [Implementation monorepo](https://github.com/x12i/xentra)
- [Reviewed package source](https://github.com/x12i/xentra/tree/004372e6695509bf2e95d2e4e53d4534e81dd312/packages/identity)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Type-contract consumption

The actual application record is in [`src/consumer.ts`](src/consumer.ts). `npm start` first runs the pinned TypeScript compiler against the installed package, including an intentional invalid assignment checked with `@ts-expect-error`, then executes the local fixture. This demonstrates type compatibility; it is not runtime validation of untrusted JSON or a live backend integration.
