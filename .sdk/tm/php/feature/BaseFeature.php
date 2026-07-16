<?php
declare(strict_types=1);

// UvIndexApi2 SDK base feature

class UvIndexApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UvIndexApi2Context $ctx, array $options): void {}
    public function PostConstruct(UvIndexApi2Context $ctx): void {}
    public function PostConstructEntity(UvIndexApi2Context $ctx): void {}
    public function SetData(UvIndexApi2Context $ctx): void {}
    public function GetData(UvIndexApi2Context $ctx): void {}
    public function GetMatch(UvIndexApi2Context $ctx): void {}
    public function SetMatch(UvIndexApi2Context $ctx): void {}
    public function PrePoint(UvIndexApi2Context $ctx): void {}
    public function PreSpec(UvIndexApi2Context $ctx): void {}
    public function PreRequest(UvIndexApi2Context $ctx): void {}
    public function PreResponse(UvIndexApi2Context $ctx): void {}
    public function PreResult(UvIndexApi2Context $ctx): void {}
    public function PreDone(UvIndexApi2Context $ctx): void {}
    public function PreUnexpected(UvIndexApi2Context $ctx): void {}
}
