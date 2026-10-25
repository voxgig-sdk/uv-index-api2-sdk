# UvIndexApi2 SDK utility: prepare_body
require_relative 'media'
module UvIndexApi2Utilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return UvIndexApi2Utilities.raw_body(ctx.reqdata) if UvIndexApi2Utilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
