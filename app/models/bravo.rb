class Bravo < ApplicationRecord
	# attributes
	# name 

	# Add associations 
	has_many :alpha, dependent: :destroy
end
