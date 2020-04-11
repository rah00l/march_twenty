class AlphaController < ApplicationController
  def index
  	alphas = Alpha.joins(:bravo).where('alphas.bravo_id=?', params[:bravo_id])
  	render json: { data: {alphas: alphas}  }
  end
end
