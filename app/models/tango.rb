class Tango < ApplicationRecord
	# attributes
	# first_name
	# last_name
	# email
	# phone

	# Add associations
	belongs_to :alpha
	has_one :charli, dependent: :destroy
end
