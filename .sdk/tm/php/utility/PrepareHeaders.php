<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: prepare_headers

class UvIndexApi2PrepareHeaders
{
    public static function call(UvIndexApi2Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
