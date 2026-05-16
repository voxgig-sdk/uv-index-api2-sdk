<?php
declare(strict_types=1);

// UvIndexApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UvIndexApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UvIndexApi2BaseFeature();
            case "test":
                return new UvIndexApi2TestFeature();
            default:
                return new UvIndexApi2BaseFeature();
        }
    }
}
