Rails.application.routes.draw do
  get 'dashboards/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "dashboards#index"
  get '/clientes', to: 'clientes#index'
end
