<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: feature_add

class UvIndexApi2FeatureAdd
{
    public static function call(UvIndexApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
