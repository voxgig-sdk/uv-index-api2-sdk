# UvIndexApi2 SDK utility: make_context
require_relative '../core/context'
module UvIndexApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    UvIndexApi2Context.new(ctxmap, basectx)
  }
end
