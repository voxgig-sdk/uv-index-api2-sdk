# frozen_string_literal: true

# Typed models for the UvIndexApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Forecast entity data model.
#
# @!attribute [rw] daily
#   @return [Array, nil]
#
# @!attribute [rw] hourly
#   @return [Array, nil]
#
# @!attribute [rw] latitude
#   @return [Float]
#
# @!attribute [rw] longitude
#   @return [Float]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] now
#   @return [Hash]
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] timezone
#   @return [Hash]
#
# @!attribute [rw] today
#   @return [Hash]
#
# @!attribute [rw] tomorrow
#   @return [Hash]
Forecast = Struct.new(
  :daily,
  :hourly,
  :latitude,
  :longitude,
  :meta,
  :now,
  :ok,
  :timezone,
  :today,
  :tomorrow,
  keyword_init: true
)

# Match filter for Forecast#list (any subset of Forecast fields).
#
# @!attribute [rw] daily
#   @return [Array, nil]
#
# @!attribute [rw] hourly
#   @return [Array, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] now
#   @return [Hash, nil]
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] timezone
#   @return [Hash, nil]
#
# @!attribute [rw] today
#   @return [Hash, nil]
#
# @!attribute [rw] tomorrow
#   @return [Hash, nil]
ForecastListMatch = Struct.new(
  :daily,
  :hourly,
  :latitude,
  :longitude,
  :meta,
  :now,
  :ok,
  :timezone,
  :today,
  :tomorrow,
  keyword_init: true
)

