# UvIndexApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UvIndexApi2Features
  def self.make_feature(name)
    case name
    when "base"
      UvIndexApi2BaseFeature.new
    when "ratelimit"
      UvIndexApi2RatelimitFeature.new
    when "retry"
      UvIndexApi2RetryFeature.new
    when "test"
      UvIndexApi2TestFeature.new
    when "timeout"
      UvIndexApi2TimeoutFeature.new
    else
      UvIndexApi2BaseFeature.new
    end
  end
end
