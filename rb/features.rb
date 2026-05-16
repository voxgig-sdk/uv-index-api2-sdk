# UvIndexApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UvIndexApi2Features
  def self.make_feature(name)
    case name
    when "base"
      UvIndexApi2BaseFeature.new
    when "test"
      UvIndexApi2TestFeature.new
    else
      UvIndexApi2BaseFeature.new
    end
  end
end
