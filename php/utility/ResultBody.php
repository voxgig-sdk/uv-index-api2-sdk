<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: result_body

class UvIndexApi2ResultBody
{
    public static function call(UvIndexApi2Context $ctx): ?UvIndexApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
