class Charli < ApplicationRecord
	# attributes
	# first_name
	# last_name
	# email
	# phone

	# Add associations
  belongs_to :tango, dependent: :destroy
end
