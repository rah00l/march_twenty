class Alpha < ApplicationRecord
	# attributes
	# name 

	# Add associations 
	has_one :tango, dependent: :destroy
	belongs_to :bravo

end
