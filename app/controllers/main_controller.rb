class MainController < ApplicationController
  def index
  end

  def bravo_list
  	bravos = Bravo.all
  	render json: { data: {bravos: bravos}  }
  end

  # def alpha_list
  # 	bravo = Bravo.all
  # 	alpha = Alpha.all
  # 	render json: { data: bravo }
  # end

end
