<?php
declare(strict_types=1);

// Typed models for the UvIndexApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Forecast entity data model. */
class Forecast
{
    public ?array $daily = null;
    public ?array $hourly = null;
    public float $latitude;
    public float $longitude;
    public array $meta;
    public array $now;
    public bool $ok;
    public array $timezone;
    public array $today;
    public array $tomorrow;
}

/** Request payload for Forecast#list. */
class ForecastListMatch
{
    public ?bool $daily = null;
    public ?bool $hourly = null;
    public float $latitude;
    public float $longitude;
    public ?string $timezone = null;
}

