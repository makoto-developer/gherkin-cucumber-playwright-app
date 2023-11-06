# Frontend

## Requirement

|key|value|
|:---|:---|
|Nodejs|v20, `asdf install`でインストールしておいてください。|
|pnpm|`npm i -g pnpm`でインストールしておいてください。|

## Getting Started

Downloads dependences.

```shell
pnpm install
```

Starting server.

```shell
pnpm dev
```


## Setup Notes

create next.js app

```shell
$ pnpm create-next-app
✔ What is your project named? … online-shop
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
Creating a new Next.js app in /Users/user/online-shop.

Using pnpm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- eslint
- eslint-config-next

Packages: +278
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 286, reused 278, downloaded 0, added 278, done

dependencies:
+ @types/node 20.8.10
+ @types/react 18.2.36
+ @types/react-dom 18.2.14
+ eslint 8.53.0
+ eslint-config-next 14.0.1
+ next 14.0.1
+ react 18.2.0
+ react-dom 18.2.0
+ typescript 5.2.2

Done in 6.9s
Initialized a git repository.

Success! Created online-shop at /Users/user/online-shop

A new version of `create-next-app` is available!
You can update by running: pnpm add -g create-next-app
```

eslintを初期化(デフォルトのJSONよりJavaScriptの方が`.eslintrc.js`自信をフォーマットしてくれるのでこっちがいい)

```shell
$ rm .eslint.json
$ node_modules/eslint/bin/eslint.js --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
@eslint/create-config@0.4.6
Ok to proceed? (y) y
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · pnpm

```

## References

-

