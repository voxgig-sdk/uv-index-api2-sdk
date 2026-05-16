<?php
declare(strict_types=1);

// UvIndexApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UvIndexApi2MakeContext
{
    public static function call(array $ctxmap, ?UvIndexApi2Context $basectx): UvIndexApi2Context
    {
        return new UvIndexApi2Context($ctxmap, $basectx);
    }
}
