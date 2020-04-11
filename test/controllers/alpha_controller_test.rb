require 'test_helper'

class AlphaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get alpha_index_url
    assert_response :success
  end

end
