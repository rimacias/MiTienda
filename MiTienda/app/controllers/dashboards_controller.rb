class DashboardsController < ApplicationController
  before_action :set_api_url

  def new
    @product = Producto.new
  end

  def index
    response = HTTParty.get(@api_url + 'productos/all')
    if response.success?
      @products = response.parsed_response
    else
      @error_message = 'Error retrieving products'
    end
  end

  def create
    response = HTTParty.post(@api_url + 'productos/new', body: params[:producto])

    if response.success?
      redirect_to productos_path, notice: 'Producto creado exitosamente.'
    else
      flash.now[:alert] = 'Error al crear el producto.'
      render :new
    end
  end

  private

  def set_api_url
    @api_url = 'http://127.0.0.1:4000/'
  end
end
