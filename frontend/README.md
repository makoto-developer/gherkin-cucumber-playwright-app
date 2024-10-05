# Frontend

## Required

See repository root(https://github.com/makoto-developer/gherkin-cucumber-playwright-app).

## Stack

- Next.js v14
- TypeScript v5

## Service

- オンラインショップ

## Pages

|page|path|param|description|
|:-----|:-----|:-----|:-----|
|トップページ|`/`|``|ルート|
|商品ページ|`/items`|``|商品一覧|
|商品詳細ページ|`/items/:id`|`id` item id|商品の説明|
|カートページ|`/cart`|``|カート|
|決済ページ|`/pay`|``|決済|
|注文一覧|`/order_history`|``|注文した商品のリスト|

## Getting Start

Cloning repository, and move to frontend directory.

```shell
cd frontend
```

起動方法

```bash
pnpm install
pnpm dev
```

## Development Notes

アプリ構築時

```
create-next-app@latest --use-pnpm
```

# 画像等を配置

配布していいのかよくわからないので、各自以下のURLからダウンロードしてpathに配置してください。

|path|url|
|:-----|:-----|
|src/app/mikan.svg|https://dot-illust.net/mikan/|
