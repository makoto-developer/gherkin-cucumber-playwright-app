defmodule OnlineShop.Repo do
  use Ecto.Repo,
    otp_app: :online_shop,
    adapter: Ecto.Adapters.Postgres
end
