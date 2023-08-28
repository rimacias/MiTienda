class ClientesController < ApplicationController
    before_action :set_api_url
    def set_api_url
        @api_url = 'http://127.0.0.1:4000/'
    end
    def index
        response = HTTParty.get(@api_url + 'clientes')
        @clientes = JSON.parse(response.body)
    end
end
