# Frontend

## Required

- 

## Stack

- Next.js v14
- TypeScript v5
- pnpm

## Service

- オンラインショップ

## Pages

|page|path|param|description|
|:-----|:-----|:-----|:-----|
|トップページ|`/`||ルート|
|商品ページ|`/items`||商品一覧|
|商品詳細ページ|`/items/:id`|`id` item id|商品の説明|
|カートページ|`/cart`||カート|
|決済ページ|`/pay`||決済|
|注文一覧|`/order_history`||注文した商品のリスト|

## Feature

|function|description|
|:-----|:-----|
|認証|ユーザ認証|
|logging|エラーをサーバーサイドだ回収できるようにする(NextAuth)|
|||
|||
|||
|||
|||

## Getting Start

Cloning repository, and move to frontend directory.

```shell
cd frontend
```

frontend start. using pnpm.

```bash
pnpm install
pnpm dev
```

## Development Notes

build app.

```
create-next-app@latest --use-pnpm
```

- no tailwind

# 画像等を配置

配布していいのかよくわからないので、各自以下のURLからダウンロードしてpathに配置してください。

|path|url|
|:-----|:-----|
|src/public/mikan.svg|https://dot-illust.net/mikan/|
|src/public/celery.svg|https://dot-illust.net/celery/|
