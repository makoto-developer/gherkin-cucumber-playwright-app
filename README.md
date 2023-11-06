# Gherkin

## Description

GherkinはE2E (エンドツーエンド) テストでよく使われる記法。

実装のサンプルを作成する。

題材は「オンラインショップ」で実装してみます。

## Stack

作成時点で最新のバージョンで実装する

- Next.js v13.4
- Cucumber
- Playwright
- TypeScript
- Elixir/Phoenix v15.7/1.7.10
- PostgreSQL 13.12

## Port

|port|app|
|:---:|:---|
|48800|Frontend|
|48801|Backend API server|
|48802|Database|

## Relation

<< Gherkin -> Cucumber -> playwright test の流れをmermaidで書く >>

## References

Gherkin Syntax
- https://cucumber.io/docs/gherkin/reference/


## Setup notes

project setup command.

```
pnpm create-next-app                                                                                                      2023-11-07 00:22
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
