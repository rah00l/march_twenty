Rails.application.routes.draw do
  get 'alpha/index'
  root 'main#index'

  get 'bravo_list', to: 'main#bravo_list'
  get 'alpha_list', to: 'main#alpha_list'

  resources :bravo do
    resources :alpha
    # get 'foo' => 'controller#index' # maps to /students/foo
  end
end
