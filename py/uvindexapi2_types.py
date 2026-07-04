# Typed models for the UvIndexApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Forecast:
    latitude: float
    longitude: float
    meta: dict
    now: dict
    ok: bool
    timezone: dict
    today: dict
    tomorrow: dict
    daily: Optional[list] = None
    hourly: Optional[list] = None


@dataclass
class ForecastListMatch:
    daily: Optional[list] = None
    hourly: Optional[list] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    meta: Optional[dict] = None
    now: Optional[dict] = None
    ok: Optional[bool] = None
    timezone: Optional[dict] = None
    today: Optional[dict] = None
    tomorrow: Optional[dict] = None

