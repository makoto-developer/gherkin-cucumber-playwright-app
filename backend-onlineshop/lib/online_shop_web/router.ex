defmodule OnlineShopWeb.Router do
  use OnlineShopWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", OnlineShopWeb do
    pipe_through :api
  end
end
