// Typed models for the UvIndexApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Forecast {
  daily?: any[]
  hourly?: any[]
  latitude: number
  longitude: number
  meta: Record<string, any>
  now: Record<string, any>
  ok: boolean
  timezone: Record<string, any>
  today: Record<string, any>
  tomorrow: Record<string, any>
}

export interface ForecastListMatch {
  daily?: boolean
  hourly?: boolean
  latitude: number
  longitude: number
  timezone?: string
}

