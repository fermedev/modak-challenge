## Get started

## Installation

This project use bun, to install bun run this command in your terminal:

```bash
  curl -fsSL https://bun.sh/install | bash
```

Install dependencies with the following command in the root of this project.

```bash
  bun install
```

#### If not, remove bun.lockb and install dependencies with the package manager of you preference.

```bash
  npm install
```

## Generate development build

This proyect use CNG strategy from expo, you will need to generate native modules build by using the following command.

```bash
  bunx expo prebuild
```

## Configuration

#### You will need to setup a new .env.local file, you have an example in the root. Just copy it and rename it to .env.local

## Run your develoment

```bash
   bun run ios | android
```

## Acknowledge

This project uses react-compiler, so you don't need to optimize using memo, useMemo, useCallback.
To succesfully compile it's necessary to strictly follow the Rules of React and Hooks.
You can check compiled optimizations by using the following command.

```bash
bunx react-compiler-healthcheck@latest
```

This project also uses Expo router that gives you deeplinking automatically enabled for all screens.

```bash
bunx uri-scheme open modak-products://product/16 --ios
```
