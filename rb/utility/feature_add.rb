# UvIndexApi2 SDK utility: feature_add
module UvIndexApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
