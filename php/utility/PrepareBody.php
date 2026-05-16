<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: prepare_body

class UvIndexApi2PrepareBody
{
    public static function call(UvIndexApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
