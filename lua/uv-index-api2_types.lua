-- Typed models for the UvIndexApi2 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Forecast
---@field daily? table
---@field hourly? table
---@field latitude number
---@field longitude number
---@field meta table
---@field now table
---@field ok boolean
---@field timezone table
---@field today table
---@field tomorrow table

---@class ForecastListMatch

local M = {}

return M
