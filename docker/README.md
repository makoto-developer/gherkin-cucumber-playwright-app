# PostgreSQL

## Getting Start

.envを作成してください

```shell
cp .env.example .env
```

.envファイルを開き、パスワードやポートなどシークレット情報を更新する。

```
vi .env
```

PostgreSQLコンテナを立ち上げる

```shell
docker compose up -d
```

## Postgresql 作業

dockerの中に入る

```shell
docker compose exec gherkin_online_shop_psql bash
```


## コンテナ内で作業

データベースに接続する(ユーザ名は.envを参照)

```shell
psql -U postgres -d app_dev
```

データベースから出る

```postgresql
\q
```

