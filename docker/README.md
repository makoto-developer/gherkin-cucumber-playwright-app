# PostgreSQL

## Getting Start

`.env`を作成

```shell
cp .env.example .env
```

ポート番号やPSQLの情報を編集

```shell
vi .env
```

PostgreSQLコンテナを立ち上げる

```shell
docker compose up -d
```

## Compose start, stop, destroy

起動

```shell
docker compose start
```

停止

```shell
docker compose start
```

Composeを削除

```shell
docker compose down
```

## Other

Postgre Admin Serverが欲しい場合はdocker-templateを参照

https://github.com/makoto-developer/docker-templates/tree/main/postgresql-single-server