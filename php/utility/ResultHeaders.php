<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: result_headers

class UvIndexApi2ResultHeaders
{
    public static function call(UvIndexApi2Context $ctx): ?UvIndexApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
