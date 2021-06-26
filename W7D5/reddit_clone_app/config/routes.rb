Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #routes for users and nested subs/new subs/create
  resources :users do
    resources :subs, only: [:new, :create]
  end

  #route for session
  resource :session, only: [:new, :create, :destroy]

  #routes for subs and nested posts/new posts/create
  resources :subs, only: [:index, :show, :edit, :update] do 
    resources :posts, only: [:new, :create]
  end

  #routes for posts
  resources :posts, only: [:show, :edit, :update, :destroy]
end
