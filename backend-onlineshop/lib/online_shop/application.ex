defmodule OnlineShop.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      OnlineShopWeb.Telemetry,
      OnlineShop.Repo,
      {DNSCluster, query: Application.get_env(:online_shop, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: OnlineShop.PubSub},
      # Start a worker by calling: OnlineShop.Worker.start_link(arg)
      # {OnlineShop.Worker, arg},
      # Start to serve requests, typically the last entry
      OnlineShopWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: OnlineShop.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    OnlineShopWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
